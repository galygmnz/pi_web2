"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <section
      id="contacto"
      className="bg-[#006f79] w-full mt-30 py-20 px-6 md:px-12 text-lime-100"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
  
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Contáctanos</h2>
          <p className=" text-blue-100 mb-6 text-lg">
            Si tienes preguntas, sugerencias o deseas reservar de manera
            personalizada, aquí tienes nuestros medios de contacto:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-lime-300" />
              <span>5000320313</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-lime-300" />
              <span>contacto@canchasorbix.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-lime-300" />
              <span>Direccion ejemplo</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-lime-300" />
              <span>Lunes - Domingo: 8:00 AM - 10:00 PM</span>
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7892853017286!2d-75.56581572581492!3d6.244203793743361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f0dfc6f5b9%3A0x7e7e5736f7f21c9a!2sMedell%C3%ADn!5e0!3m2!1ses!2sco!4v1694000000000!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
