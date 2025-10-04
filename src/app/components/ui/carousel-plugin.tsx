"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { Card } from "@/components/ui/Card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )


  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
    "/images/slide5.jpg",
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-screen mt-10 overflow-hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className=" relative w-full h-screen content-center">
        {images.map((src, index) => (
          <CarouselItem key={index} className="w-full h-full p-2">
            <Card className= "w-full h-[80vh] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1930}
                height={1280}
                className="object-cover w-full h-full"
                priority={index === 0}
              />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="bg-transparent hover:bg-gray-800/50 text-white" />
      <CarouselNext className="bg-transparent hover:bg-gray-800/50 text-white" />
    </Carousel>
  )
}
