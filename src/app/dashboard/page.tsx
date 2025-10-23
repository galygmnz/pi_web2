"use client";
import React from "react";
import { MapPin, Clock } from "lucide-react"; // íconos de lucide-react
import Image from "next/image";

export default function Page() {
  const canchas = [
    {
      nombre: "Cancha Santa Lucía",
      ubicacion: "Cra. 80 #32-45, Medellín",
      horario: "6:00 AM - 10:00 PM",
      
    },
    {
      nombre: "Cancha Campo Amor",
      ubicacion: "Cl. 16 #52-40, Medellín",
      horario: "7:00 AM - 9:00 PM",
      
      
    },
    {
      nombre: "Unidad Deportiva Belén",
      ubicacion: "Carrera 76 #18A-16, Medellín",
      horario: "5:00 AM - 11:00 PM",
     
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Información general</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-1xl">
          ¡Bienvenido Usuario! Este es tu panel para gestionar tus reservas de canchas deportivas.
          Aquí podrás ver un resumen de tus próximas reservas, historial y opciones para crear nuevas reservas.
        </p>
      </div>

      <section>
       <div className=" mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Elige tu cancha favorita y reserva tu próximo partido
          </h2>
          <p className="text-gray-600 mt-2">
            Consulta los horarios disponibles y asegura tu espacio en nuestras mejores canchas.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {canchas.map((cancha, index) => (
            <div
              key={index}
              className="bg-gray-200 mt-5 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{cancha.nombre}</h3>

              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#008c9a]" />
                  <span>{cancha.ubicacion}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#008c9a]" />
                  <span>{cancha.horario}</span>
                </div>

                <div>
                  
                </div>

                
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
