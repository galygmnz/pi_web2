"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section id="faq" className=" w-full max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-lime-200 mb-10 mt-20">
        Preguntas Frecuentes
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            ¿Cómo puedo reservar una cancha?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-gray-200">
            <p>
              Para reservar una cancha, solo necesitas iniciar sesión en tu cuenta
              con ello tendras acceso a el dashboard donde podras reservar en que horario gustas asignar tu reservar y ver las canchas disponibles. 
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            ¿Puedo cancelar o modificar mi reserva?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-gray-200">
            <p>
              Sí, puedes cancelar o modificar tu reserva hasta 24 horas antes del
              horario programado.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            ¿Qué métodos de pago aceptan?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-gray-200">
            <p>
              No aceptammos totalmente nada es gratis estos espacios para la multitud y nuestros queridos usuarios.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            ¿Tienen implementos deportivos?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-gray-200">
            <p>
              Sí, contamos con implementos deportivos para los usuarios, implementos bien cuidados para el disfrute de estos espacios.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>


    
    </section>

    
  )
}
