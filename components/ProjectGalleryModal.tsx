"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react"
import { ProjectImage } from "@/lib/projects"

type ProjectGalleryModalProps = {
  projectTitle: string
  images: ProjectImage[]
  isOpen: boolean
  onClose: () => void
}

export function ProjectGalleryModal({
  projectTitle,
  images,
  isOpen,
  onClose,
}: ProjectGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!isOpen || images.length === 0) return null

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur">
          <div className="flex items-center gap-2 text-white">
            <Images className="w-5 h-5" />
            <h2 className="text-lg md:text-xl font-semibold">{projectTitle}</h2>
            <span className="text-sm text-white/70">
              ({currentIndex + 1} / {images.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image Area */}
        <div className="flex-1 flex items-center justify-center p-4 relative">
          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Image Display */}
          <div className="relative w-full h-full max-w-6xl max-h-[70vh]">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="p-4 bg-black/50 backdrop-blur overflow-x-auto">
            <div className="flex gap-2 justify-center">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
                    index === currentIndex
                      ? "ring-4 ring-primary scale-110"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Keyboard Navigation Hint */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/50 text-xs hidden md:block">
          Use arrow keys to navigate • ESC to close
        </div>
      </div>
    </div>
  )
}

// Hook to handle keyboard navigation
export function useKeyboardNavigation(
  onPrev: () => void,
  onNext: () => void,
  onClose: () => void
) {
  if (typeof window !== "undefined") {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }
}
