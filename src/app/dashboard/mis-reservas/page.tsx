"use client";

import React, { useEffect, useState, useCallback } from "react";
import { format, parseISO } from "date-fns";
import { useAuth } from "@/context/AuthContext"; // ✅ Importamos el contexto

interface Reserva {
  id: number;
  cancha?: { nombre: string };
  fechaReserva: string; // ISO date
  horaInicio: string;
  horaFin: string;
  estado?: string;
}

const API_URL = "http://localhost:8080/api";

export default function MisReservasPage() {
  const { user, token } = useAuth(); // ✅ Obtenemos el usuario y el token
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 🔍 Traer solo las reservas del usuario autenticado
  const fetchReservas = useCallback(async () => {
    if (!token || !user) {
      setError("⚠️ No hay sesión activa. Inicia sesión para ver tus reservas.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_URL}/reservas/usuario/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Error al cargar reservas");
      const data: Reserva[] = await res.json();
      setReservas(data);
    } catch (err) {
      console.error(err);
      setError("❌ No se pudieron cargar las reservas.");
    } finally {
      setLoading(false);
    }
  }, [token, user]);

  useEffect(() => {
    fetchReservas();

    // Re-cargar cuando se cree una reserva
    const handler = () => fetchReservas();
    window.addEventListener("reservation:created", handler);
    return () => window.removeEventListener("reservation:created", handler);
  }, [fetchReservas]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Mis reservas</h1>
        <button
          onClick={fetchReservas}
          className="px-3 py-2 bg-[#008c9a] text-white rounded-md hover:bg-[#007a87]"
        >
          Actualizar
        </button>
      </div>

      {loading ? (
        <div>Cargando reservas...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : reservas.length === 0 ? (
        <div className="text-gray-600">No tienes reservas aún.</div>
      ) : (
        <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-md">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="p-3 border-b">Cancha</th>
              <th className="p-3 border-b">Fecha</th>
              <th className="p-3 border-b">Horario</th>
              <th className="p-3 border-b">Estado</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{reserva.cancha?.nombre || "-"}</td>
                <td className="p-3 border-b">
                  {format(parseISO(reserva.fechaReserva), "d MMM yyyy")}
                </td>
                <td className="p-3 border-b">
                  {reserva.horaInicio} - {reserva.horaFin}
                </td>
                <td className="p-3 border-b">
                  {reserva.estado || "Pendiente"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
