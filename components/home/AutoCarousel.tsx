"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const carouselImages = [
  "/images/community/MG-52225-5.jpg",
  "/images/community/MG-52225-1.jpg",
  "/images/education/Shelters 004.jpg",
  "/images/disability/DSC_0005.JPG",
  "/images/highlights/DSC_0474.JPG",
  "/images/international/Rot9.jpg",
  "/images/sports/Photo 8b.JPG",
  "/images/sports/Photo 9a.JPG",
  "/images/education/DSC_0235.JPG",
  "/images/disability/32.JPG",
]

export default function AutoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Rotary Trust Activity ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
