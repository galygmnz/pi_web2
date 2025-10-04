"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const canchas = [
  { id: 1, title: "Cancha 1", description: "Descripcion en desarrollo", image: "" },
  { id: 2, title: "Cancha 2", description: "Descripcion en desarrollo", image: "" },
  { id: 3, title: "Cancha 3", description: "Descripcion en desarrollo", image: "" },
  { id: 4, title: "Cancha 4", description: "Descripcion en desarrollo", image: "" },
  { id: 5, title: "Cancha 5", description: "Descripcion en desarrollo", image: "" },
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
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="px-5 py-2 font-semibold text-white bg-teal-600 rounded-md hover:bg-teal-700">
                        Reservar
                      </button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <button className="px-5 py-2 font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700">
                      Reservar
                    </button>
                  </SignedIn>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
