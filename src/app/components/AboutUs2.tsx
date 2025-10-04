"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutUs2() {
  return (
    <section className="bg-[#006f79] w-8xl py-20  md:px-1 text-lime-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Buscamos lo mejor para ti</h2>
          <ul className="flex flex-col gap-6 text-lg">
            <li className="bg-emerald-700 text-blue-100 p-4 rounded-xl shadow-md">
              Amplia variedad de canchas para fútbol, baloncesto y más.
            </li>
            <li className="bg-emerald-700 text-blue-100 p-4 rounded-xl shadow-md">
              Reservas rápidas y seguras en cualquier momento.
            </li>
            <li className="bg-emerald-700 text-blue-100 p-4 rounded-xl shadow-md">
              Instalaciones modernas y bien cuidadas.
            </li>
            <li className="bg-emerald-700  text-blue-100 p-4 rounded-xl shadow-md">
              Atención personalizada y promociones exclusivas.
            </li>
          </ul>
        </motion.div>

       
        <motion.div 
          className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/Football.avif"
            alt="Implementos deportivos"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}
