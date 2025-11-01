"use client";

import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PanelInformativo from "@/app/components/reservas/PanelInformativo";
import { format } from "date-fns";

interface Cancha {
  id: number;
  nombre: string;
  ubicacion?: string;
  horario?: string;
}

const API_URL = "http://localhost:8080/api"; // backend Spring Boot

const horarios = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

export default function ReservaForm() {
  const { user, token, isLoggedIn } = useAuth(); // ✅ Contexto de autenticación

  const [canchas, setCanchas] = useState<Cancha[]>([]);
  const [canchaSeleccionada, setCanchaSeleccionada] = useState<Cancha | null>(null);
  const [fecha, setFecha] = useState<Date | null>(new Date());
  const [horaInicio, setHoraInicio] = useState<string>("");
  const [horaFin, setHoraFin] = useState<string>("");
  const [mensaje, setMensaje] = useState<string>("");
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState<boolean>(false);

  // 🔹 Cargar canchas desde backend
  useEffect(() => {
    const cargarCanchas = async () => {
      try {
        const res = await fetch(`${API_URL}/canchas`);
        if (!res.ok) throw new Error("Error al obtener canchas");
        const data: Cancha[] = await res.json();
        setCanchas(data);
      } catch (err) {
        console.error(err);
        setMensaje("No se pudieron cargar las canchas");
      }
    };
    cargarCanchas();
  }, []);

  // 🔹 Confirmar reserva con autenticación JWT
  const confirmarReserva = async () => {
    if (!canchaSeleccionada || !fecha) {
      setMensaje("⚠️ Debes seleccionar cancha y fecha antes de confirmar.");
      return;
    }

    if (!isLoggedIn || !token) {
      setMensaje("⚠️ Debes iniciar sesión para confirmar la reserva.");
      return;
    }

    try {
      const fechaStr = format(fecha, "yyyy-MM-dd");

      const res = await fetch(`${API_URL}/reservas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ token JWT
        },
        body: JSON.stringify({
          cancha: { id: canchaSeleccionada.id },
          usuario: { id: user?.id }, // ✅ usuario real del contexto
          fechaReserva: fechaStr,
          horaInicio,
          horaFin,
        }),
      });

      if (!res.ok) {
        if (res.status === 401) {
          setMensaje("⚠️ Sesión expirada. Vuelve a iniciar sesión.");
        } else {
          setMensaje("❌ Error al crear reserva.");
        }
        return;
      }

      await res.json();
      setMensaje("✅ Reserva confirmada correctamente");
      setMostrarConfirmacion(false);
    } catch (err) {
      console.error(err);
      setMensaje("❌ No se pudo confirmar la reserva.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        {isLoggedIn && user
          ? `Reserva tu Cancha, ${user.name || user.email}`
          : "Reserva tu Cancha"}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulario - columnas principales */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Selecciona una Cancha</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {canchas.map((cancha) => (
                <button
                  key={cancha.id}
                  onClick={() => setCanchaSeleccionada(cancha)}
                  className={`p-4 rounded-xl transition-all text-left ${
                    canchaSeleccionada?.id === cancha.id
                      ? "bg-[#008c9a] text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <div className="font-semibold">{cancha.nombre}</div>
                  {cancha.ubicacion && (
                    <div className="text-sm mt-1">{cancha.ubicacion}</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Selecciona una Fecha</h2>
            <Calendar
              onChange={(d) => setFecha(d as Date)}
              value={fecha}
              minDate={new Date()}
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Selecciona el Horario</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hora de Inicio
                </label>
                <select
                  value={horaInicio}
                  onChange={(e) => setHoraInicio(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Seleccionar...</option>
                  {horarios.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hora de Fin
                </label>
                <select
                  value={horaFin}
                  onChange={(e) => setHoraFin(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Seleccionar...</option>
                  {horarios.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {mensaje && (
            <div
              className={`text-center p-4 rounded-xl ${
                mensaje.includes("✅")
                  ? "bg-green-100 text-green-800"
                  : mensaje.includes("❌")
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {mensaje}
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={() => {
                if (!isLoggedIn) {
                  setMensaje("⚠️ Debes iniciar sesión para reservar.");
                  return;
                }
                setMostrarConfirmacion(true);
              }}
              className="flex-1 bg-gray-200 py-3 rounded-xl font-semibold"
            >
              Vista previa
            </button>
          </div>
        </div>

        {/* Panel Informativo */}
        <div className="lg:col-span-1">
          <PanelInformativo
            canchaSeleccionada={canchaSeleccionada || undefined}
            fecha={
              fecha ? format(fecha, "d 'de' MMMM 'de' yyyy") : undefined
            }
            horaInicio={horaInicio}
            horaFin={horaFin}
          />
        </div>
      </div>

      {/* Modal de confirmación */}
      {mostrarConfirmacion && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Confirmar Reserva</h3>
            <p className="mb-2">
              <span className="font-medium">Cancha:</span>{" "}
              {canchaSeleccionada?.nombre || "-"}
            </p>
            <p className="mb-2">
              <span className="font-medium">Fecha:</span>{" "}
              {fecha ? format(fecha, "d 'de' MMMM 'de' yyyy") : "-"}
            </p>
            <p className="mb-4">
              <span className="font-medium">Hora:</span> {horaInicio} - {horaFin}
            </p>

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={confirmarReserva}
                disabled={!isLoggedIn}
                className={`px-4 py-2 rounded text-white ${
                  isLoggedIn
                    ? "bg-[#008c9a] hover:bg-[#007a87]"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {isLoggedIn ? "Confirmar" : "Inicia sesión para confirmar"}
              </button>
              <button
                onClick={() => setMostrarConfirmacion(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
