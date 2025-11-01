"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../types/auth";
import { API_BASE_URL } from "@/utils/constants";

// -----------------------------------------------------------
// 1. Tipado del Contexto
// -----------------------------------------------------------
interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  token: string | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
}

// -----------------------------------------------------------
// 2. Creación del Contexto
// -----------------------------------------------------------
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// -----------------------------------------------------------
// 3. Custom Hook
// -----------------------------------------------------------
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

// -----------------------------------------------------------
// 4. Proveedor del Contexto
// -----------------------------------------------------------
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter(); // ✅ DEBE IR AQUÍ

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const isLoggedIn = !!user;

  // A. Iniciar sesión
  const login = (jwtToken: string, userData: User) => {
    localStorage.setItem("authToken", jwtToken);
    setToken(jwtToken);
    setUser(userData);
    router.push("/dashboard"); // ✅ Redirige después de login
  };

  // B. Cerrar sesión
  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
    setUser(null);
    router.push("/"); // ✅ Redirige al inicio
  };

  // C. Cargar sesión persistente
  const loadUserFromStorage = useCallback(async () => {
    const storedToken = localStorage.getItem("authToken");

    if (!storedToken) {
      router.push("/");
      return;
    }

    setToken(storedToken);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/verify-token`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });

      if (res.ok) {
        const data = await res.json();

        const resolvedName =
          data.nombre ||
          data.name ||
          data.username ||
          (data.email ? data.email.split("@")[0] : undefined);

        const userData: User = {
          name: resolvedName || "",
          id: data.id,
          email: data.email,
        };

        setUser(userData);
      } else if (res.status === 401 || res.status === 403) {
        console.warn("Token inválido o expirado. Forzando cierre de sesión.");
        localStorage.removeItem("authToken");
        setToken(null);
        setUser(null);
      }
    } catch (error) {
      console.error("Error verificando token:", error);
      localStorage.removeItem("authToken");
      setToken(null);
      setUser(null);
    }
  }, [router]);

  // D. Efecto para restaurar sesión al cargar la app
  useEffect(() => {
    loadUserFromStorage();
  }, [loadUserFromStorage]);

  // E. Valor del contexto
  const value = {
    user,
    isLoggedIn,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
