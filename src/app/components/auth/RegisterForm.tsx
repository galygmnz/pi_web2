"use client";

import React, { useState } from "react";
import { RegisterData } from "../../types/auth"; // Importamos la interfaz de datos
import Link from "next/link";
import { useRouter } from "next/navigation"; // Importamos el router para redirigir

// URL base de tu API de Spring Boot
// ¡Asegúrate de que el backend esté corriendo en http://localhost:8080!
const API_URL = "http://localhost:8080/api/auth/register";

// Estado inicial del formulario
const initialData: RegisterData = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  identificacion: "",
  telefono: "",
};

const RegisterForm: React.FC = () => {
  const router = useRouter(); // Inicializamos el hook de navegación

  // Estados del formulario y la petición
  const [formData, setFormData] = useState<RegisterData>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Manejador de Cambios: Actualiza el estado con cada tecla
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // La clave [name] usa el nombre del input para actualizar la propiedad correcta
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejador de Envío: Conecta con la API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convierte el objeto JavaScript a JSON string
      });

      // La API de Spring Security suele devolver un mensaje en caso de éxito.
      if (response.ok) {
        setSuccess("¡Registro exitoso! Serás redirigido para iniciar sesión.");

        // Redirige después de 2 segundos.
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      } else {
        // Lee el mensaje de error que envía el backend (ej. "El email ya existe")
        const errorText = await response.text();
        // Si el backend devuelve un texto de error, úsalo. Si no, usa un genérico.
        setError(
          errorText || "Ocurrió un error desconocido durante el registro."
        );
      }
    } catch (error) {
        console.error(error)
      // Esto captura errores de red (API apagada o CORS)
      setError(
        "Error de conexión. Verifica que el servidor de Spring Boot esté corriendo."
      );
    } finally {
      setIsLoading(false); // Siempre desactiva la carga al finalizar
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 p-8 rounded-2xl backdrop-blur-sm w-[500px]">
      {/* Mensajes de Estado (Éxito y Error) */}
      {success && (
        <p className="p-3 bg-green-100 text-green-700 rounded-xl font-medium">
          {success}
        </p>
      )}
      {error && (
        <p className="p-3 bg-red-100 text-red-700 rounded-xl font-medium whitespace-pre-wrap">
          {error}
        </p>
      )}

      {/* --- CAMPOS DEL FORMULARIO --- */}
      {/* Nota: Todos los inputs usan value={formData.[nombre]} y onChange={handleChange}. 
        Esto se llama 'Controlled Component' en React.
      */}

      <div className="grid grid-cols-2 gap-3">
        {/* Campo Nombre */}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="nombre"
            className="block text-lg font-medium text-white"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="block w-full border border-[#006f79] bg-white/20 rounded-xl shadow-sm py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#006f79] focus:border-transparent transition-all"
          />
        </div>

        {/* Campo Apellido */}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="apellido"
            className="block text-lg font-medium text-white"
          >
            Apellido:
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            className="block w-full border border-[#006f79] bg-white/20 rounded-xl shadow-sm py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#006f79] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Campo Email */}
      <div className="flex flex-col gap-3">
        <label
          htmlFor="email"
          className="block text-lg font-medium text-white"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block w-full border border-[#006f79] bg-white/20 rounded-xl shadow-sm py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#006f79] focus:border-transparent transition-all"
        />
      </div>

      {/* Campo Contraseña */}
      <div className="flex flex-col gap-3">
        <label
          htmlFor="password"
          className="block text-lg font-medium text-white"
        >
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="block w-full border border-[#006f79] bg-white/20 rounded-xl shadow-sm py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#006f79] focus:border-transparent transition-all"
        />
      </div>

      {/* Campo Identificación */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="identificacion"
            className="block text-lg font-medium text-white"
          >
            Identificación:
          </label>
          <input
            type="text"
            id="identificacion"
            name="identificacion"
            value={formData.identificacion}
            onChange={handleChange}
            required
            className="block w-full border border-[#006f79] bg-white/20 rounded-xl shadow-sm py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#006f79] focus:border-transparent transition-all"
          />
        </div>

        {/* Campo Teléfono */}
        <div className="flex flex-col gap-3">
          <label
            htmlFor="telefono"
            className="block text-lg font-medium text-white"
          >
            Teléfono:
          </label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="block w-full border border-[#006f79] bg-white/20 rounded-xl shadow-sm py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#006f79] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* --- BOTONES DE ACCIÓN --- */}
      <div className="pt-6 flex flex-col gap-5 items-center mt-8">
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 font-semibold rounded-xl shadow-md transition-all ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#006f79] hover:bg-[#005761] cursor-pointer"
          } text-white focus:outline-none focus:ring-2 focus:ring-[#006f79] focus:ring-offset-2 transform hover:scale-[1.02]`}
        >
          {isLoading ? "Registrando..." : "Registrar"}
        </button>

        {/* Botón de Regresar/Login */}
        <p className="flex gap-2 text-white">
          ¿Ya tienes una cuenta?
          <Link
            href="/auth/login"
            className="font-semibold text-lime-200 hover:text-lime-300 transition-colors duration-200 underline decoration-2 underline-offset-2"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
