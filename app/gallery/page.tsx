"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { gallery, type GalleryCategory } from "@/lib/gallery"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories: { label: string; value: GalleryCategory }[] = [
  { label: "Community Service", value: "community" },
  { label: "Healthcare Initiatives", value: "healthcare" },
  { label: "Education & Universities", value: "education" },
  { label: "International Visitors", value: "international" },
  { label: "Sports & Wellness", value: "sports" },
  { label: "Disability Support", value: "disability" },
  { label: "Leadership & Presidents", value: "leadership" },
]

export default function GalleryPage() {

  const scrollLeft = (categoryId: string) => {
    const container = document.getElementById(`scroll-${categoryId}`)
    if (container) {
      container.scrollBy({ left: -800, behavior: 'smooth' })
    }
  }

  const scrollRight = (categoryId: string) => {
    const container = document.getElementById(`scroll-${categoryId}`)
    if (container) {
      container.scrollBy({ left: 800, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Explore our work through images organized by category
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Rows */}
          <div className="space-y-8">
          {categories.map((category) => {
            const categoryImages = gallery.filter((item) => item.category === category.value)
            if (categoryImages.length === 0) return null
            
            return (
              <div key={category.value} className="group">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    {category.label} <span className="text-muted-foreground text-sm font-normal">({categoryImages.length})</span>
                  </h2>
                </div>

                {/* Scrollable Image Row */}
                <div className="relative">
                  {/* Left Arrow */}
                  <button
                    onClick={() => scrollLeft(category.value)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Images Container */}
                  <div
                    id={`scroll-${category.value}`}
                    className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {categoryImages.map((item, idx) => (
                      <div key={`${item.src}-${idx}`} className={`relative flex-shrink-0 rounded-lg overflow-hidden group/item ${
                        category.value === 'leadership' ? 'w-48 h-64 md:w-60 md:h-80' : 'w-64 h-40 md:w-80 md:h-48'
                      }`}>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover/item:scale-110"
                          sizes="320px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity">
                          <div className="absolute bottom-2 left-2 right-2">
                            <p className="text-white text-sm font-semibold line-clamp-1">{item.title}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Arrow */}
                  <button
                    onClick={() => scrollRight(category.value)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}
