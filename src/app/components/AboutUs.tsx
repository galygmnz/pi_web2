"use client"

import { ReservasCanchasChart } from "@/components/ui/chart-line-label"



export default function AboutUs() {
  return (
    <section id= "Nosotros" className="mt-2  py-30 px-6 md:px-17  text-lime-100" >
      <div className=" grid md:grid-cols-2 gap-20 items-center text-lime-100">

        <div>
          <h2 className="text-4xl font-bold mb-5">Acerca de nosotros</h2>
          <p className=" text-xl mb-6 text-blue-100" >
            Orbix Administra las reservas de canchas deportivas en toda la ciudad.
            Nuestra misión es que cada jugador pueda encontrar fácilmente dónde
            y cuándo jugar.
          </p>
          <p className="text-xl">
            A continuación puedes ver las reservas mensuales de canchas durante
            el año, reflejando la confianza que los usuarios depositan en
            nuestro servicio.
          </p>
        </div>

       <ReservasCanchasChart/>

          


        
     
      </div>
       <div className=" mt-20">
       

       </div>

    </section>
  )
}
