"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Clock } from "lucide-react";

export default function InitialSection() {
  return (
    <section className=" mt-25 text-lime-300 py-24 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
    
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-lime-100">
          Reserva tu cancha deportiva en segundos
        </h1>

        <p className="text-lg text-blue-100">
          Encuentra, compara y agenda tu espacio ideal para jugar sin
          complicaciones. Orbix te conecta con las mejores canchas deportivas de
          tu ciudad.
        </p>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
      >
        <div className="bg-[#00979E] p-6 rounded-2xl shadow-md space-y-2">
          <Clock className="mx-auto w-8 h-8 text-[#A3FFAB]" />
          <h3 className="text-lg font-semibold text-[#E0FFDC]">
            Reservas rápidas
          </h3>
          <p className="text-sm text-[#E8FFE2]">
            Programa en pocos clics desde cualquier dispositivo.
          </p>
        </div>

        <div className="bg-[#00979E] p-6 rounded-2xl shadow-md space-y-2">
          <MapPin className="mx-auto w-8 h-8 text-[#A3FFAB]" />
          <h3 className="text-lg font-semibold text-[#E0FFDC]">
            Canchas cercanas
          </h3>
          <p className="text-sm text-[#E8FFE2]">
            Encuentra el lugar perfecto para tu próximo partido.
          </p>
        </div>

        <div className="bg-[#00979E] p-6 rounded-2xl shadow-md space-y-2">
          <Search className="mx-auto w-8 h-8 text-[#A3FFAB]" />
          <h3 className="text-lg font-semibold text-[#E0FFDC]">
            Soporte en línea
          </h3>
          <p className="text-sm text-[#E8FFE2]">
            Nuestro equipo está disponible para ayudarte siempre.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
