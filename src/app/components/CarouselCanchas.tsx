"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Clerk removed: using static buttons for now. TODO: wire JWT auth.
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const canchas = [
  { id: 1, title: "Unidad Deportiva La Floresta", description: "Disfruta de una cancha en grama sintética polifuncional y zona administrativa Cuenta con gradería central, cerramiento moderno y porterías para fútbol 11 y fútbol 7 Un espacio renovado y perfecto para compartir en familia ¡Ven y vive la experiencia!", image: "./Unidad deportiva la floresta.webp" },
  { id: 2, title: "Coliseo Cubierto Ivan De Bedout", description: "Vive la emoción del deporte en uno de los escenarios más emblemáticos de Medellín. Con capacidad para 6 000 espectadores, el Coliseo Iván de Bedout es el hogar del baloncesto y el fútbol sala colombiano.", image: "./Coliseo de baloncesto ivan de bedout.jpg" },
  { id: 3, title: "Unidad Deportiva Belen Andres Escobar", description: "Vive el deporte al máximo en uno de los complejos más completos de Medellín. Con amplias zonas verdes y modernas instalaciones, la Unidad Deportiva de Belén ofrece canchas de fútbol natural y sintético.", image: "./Unidad deportiva belen andres escobar.jpg" },
  { id: 4, title: "Cancha Santa Lucia", description: "Descubre la energía deportiva del barrio Santa Lucía. Este moderno escenario cuenta con una cancha sintética de excelente calidad, perfecta para partidos de fútbol 5 y fútbol 7, con iluminación nocturna y zonas seguras para el público.", image: "Cancha Santa Lucia.jpg" },
  { id: 5, title: "Cancha Campo Amor", description: "Vive la pasión del fútbol en la Cancha Campo Amor, ubicada en Guayabal Medellín. Este renovado escenario cuenta con una moderna superficie de grama sintética, iluminación de calidad y un entorno vibrante para entrenar, jugar o disfrutar con amigos.", image: "./Cancha Campo Amor.jpg" },
];

export default function CarouselCanchas() {
  return (
    <div id="Canchas" className="w-full max-h-4xl max-w-5xl mx-auto mt-30">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-3xl font-bold text-center mb-10 text-lime-200"
      >
        Estas son nuestras canchas más populares
      </motion.h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper rounded-xl shadow-xl overflow-hidden"
      >
        {canchas.map((cancha, index) => (
          <SwiperSlide key={cancha.id}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-emerald-700 rounded-xl overflow-hidden h-[320px] md:h-[250px]"
            >
              <img
                className="w-full md:w-94 h-50 md:h-auto object-cover"
                src={cancha.image || "https://via.placeholder.com/300x200"}
                alt={cancha.title}
              />
              <div className="p-6 flex flex-col justify-between leading-normal">
                <motion.h5
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lime-200 font-bold text-2xl mb-2"
                >
                  {cancha.title}
                </motion.h5>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-blue-100 text-base mb-4"
                >
                  {cancha.description}
                </motion.p>
                <div className="flex items-center">
                  <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                    Disponible
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-6"

                
                >
                  {/* Static reserve button for now; wire auth with JWT later */}
                  <button  className="px-5 py-2 font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700">
                    Reservar
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
