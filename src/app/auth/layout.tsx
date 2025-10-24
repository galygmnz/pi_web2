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
    <div className="relative w-full h-screen rounded-3xl p-5">
      <div className="w-full h-full absolute inset-0 rounded-3xl p-5">
        <div className="relative w-full h-full inset-0">
          <Image
            src="/soccer-image.jpg"
            alt="Background"
            fill
            priority
            className="object-cover rounded-3xl opacity-80 -z-10"
          />
          <div className="absolute inset-0 bg-black/60 rounded-3xl -z-5"></div>
        </div>
      </div>
      <div className="relative flex w-full h-full justify-between items-center p-5 z-20">
        <div className="ml-20 text-white drop-shadow-lg">
          <p className="text-7xl md:text-9xl font-extrabold leading-none">ORBIX</p>
          <p className="text-xl md:text-3xl mt-3 text-white/90">
            Organiza tus reservas de forma simple y eficiente
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
