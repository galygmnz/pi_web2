// src/app/(auth)/layout.tsx
import React from "react";
import Image from "next/image";

/**
 * Layout para las rutas de autenticación (Login, Register).
 * Proporciona un contenedor simple y centrado, sin la navegación principal.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen bg-[#008c9a]">
      {/* Contenedor centrado y responsive */}
      <div className=" relative z-20 w-full h-full flex items-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-5">
          {/* Bloque izquierdo: logo + subtítulo (centrado en móvil, alineado a la izquierda en md+) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left text-white drop-shadow-lg gap-4 w-full md:w-1/2">
            <Image
              src="/OrbixLogo.png"
              alt="Orbix logo"
              width={320}
              height={320}
              className="object-contain w-28 h-28 md:w-56 md:h-56 lg:w-64 lg:h-64"
            />
            
          </div>

          {/* Contenedor del formulario/children: centrado y con ancho responsive */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
