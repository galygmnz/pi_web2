// ASUME QUE ESTÁ UBICADO EN src/components/forms/LoginForm.tsx
"use client";

import React, { useEffect, useState } from "react";
import { LoginData, User } from "../../types/auth"; // Asegúrate de que 'User' también esté importado aquí
import Link from "next/link";

// Importamos el hook useAuth para usar la función de login global
import { useAuth } from "../../context/AuthContext";
import { API_BASE_URL } from "@/app/utils/constants";
import { useRouter } from "next/navigation";

// Estado inicial
const initialData: LoginData = {
  email: "",
  password: "",
};

// URL base de tu API

const LoginForm: React.FC = () => {
  // 1. OBTENER LA FUNCIÓN LOGIN DEL CONTEXTO
  const { login } = useAuth();
  const { push } = useRouter();

  // Estados para el formulario y la petición
  const [formData, setFormData] = useState<LoginData>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Petición al endpoint de Login
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 2. Esperamos un JSON (token y datos de usuario)
      const data = await response.json();

      if (response.ok) {
        // ÉXITO: El backend puede devolver diferentes shapes.
        const jwtToken: string = data.token;
        // Normalizamos la estructura: a veces viene en data.user, a veces en la raíz
        const payloadUser = data.user || data;
        const resolvedName = payloadUser.nombre || payloadUser.name || payloadUser.username || (payloadUser.email ? payloadUser.email.split("@")[0] : formData.email.split("@")[0]);
        const userData: User = {
          name: resolvedName,
          id: payloadUser.id,
          email: payloadUser.email || formData.email,
        };
        // Llamamos a la función global de login
        login(jwtToken, userData);
      } else if (response.status === 401) {
        setError("Credenciales incorrectas. Verifica tu email y contraseña.");
      } else {
        setError(data.message || "Ocurrió un error al iniciar sesión.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Error de conexión. ¿Está el backend encendido?");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      push("/dashboard");
    }
  }, [push]);

  return (
    <form onSubmit={handleSubmit} className="space-y-7 bg-white/10 p-8 rounded-2xl backdrop-blur-sm w-full sm:w-[400px]">
      {error && (
        <p className="p-3 bg-red-100 text-red-700 rounded-md font-medium">
          {error}
        </p>
      )}

      {/* --- CAMPO EMAIL --- */}
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

      {/* --- CAMPO CONTRASEÑA --- */}
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

      {/* --- BOTONES DE ACCIÓN --- */}
      <div className="pt-6 flex flex-col items-center gap-5">
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 font-semibold rounded-xl shadow-md transition-all ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#006f79] hover:bg-[#005761] cursor-pointer"
          } text-white focus:outline-none focus:ring-2 focus:ring-[#006f79] focus:ring-offset-2 transform hover:scale-[1.02]`}
        >
          {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
        </button>

        {/* Botón de Regresar/Registrar */}
        <p className="flex gap-2 text-white">
          ¿No tienes una cuenta?
          <Link 
            href="/auth/register" 
            className="font-semibold text-lime-200 hover:text-lime-300 transition-colors duration-200 underline decoration-2 underline-offset-2"
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
