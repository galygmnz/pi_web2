"use client"

import React from 'react'
import { useRouter } from "next/navigation"

//Creamos props para reutlizar el componente y se llama dependiendo los criterios de la app
type ComponentCardProps = {
  titulo: string,
  ruta: string
}

//exportamos la funcuin con props reiterando lo que va a recibir de componentsCardprops
export default function ComponentCard({ titulo, ruta }: ComponentCardProps) {

    const router = useRouter(); //Creamos una variable donde use el router

  return (
    //al darle click a la carta esta llamando la consante router que usa por defecta el userouter para redireccionar  a la pagina con el push(pagina)
   <div className="component-card" onClick={() => router.push(ruta)}>
      <span className="card-title">{titulo}</span>
    </div>
  )
}