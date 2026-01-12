"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const impactCards = [
  {
    id: 1,
    image: "/images/highlights/DSC_0001.JPG",
    statistic: "50+ YEARS",
    color: "bg-teal-700",
    title: "SERVING SOCIETY SINCE 1974",
    description: "The Rotary Silver Jubilee Trust has been transforming lives in Sangli and surrounding regions for over five decades",
    link: "/about",
  },
  {
    id: 2,
    image: "/images/highlights/DSC_0007.JPG",
    statistic: "12+ PROJECTS",
    color: "bg-rose-700",
    title: "WE FUND SUSTAINABLE PROJECTS",
    description: "Landmark social infrastructure projects in education, healthcare, disability support, and community development",
    link: "/projects",
  },
  {
    id: 3,
    image: "/images/highlights/DSC_0474.JPG",
    statistic: "100K+ LIVES",
    color: "bg-blue-700",
    title: "WE CONNECT PEOPLE",
    description: "Impacting over 100,000 lives through our comprehensive social welfare initiatives across Sangli district",
    link: "/projects",
  },
  {
    id: 4,
    image: "/images/community/MG-52216-5.jpg",
    statistic: "₹10+ CRORE",
    color: "bg-amber-700",
    title: "COMMUNITY INVESTMENT",
    description: "Invested in building critical infrastructure including blood banks, skin banks, educational institutions, and rehabilitation centers",
    link: "/compliance",
  },
];

export function ImpactCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === impactCards.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? impactCards.length - 1 : prevIndex - 1
    );
  };

  const currentCard = impactCards[currentIndex];

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 md:w-16 md:h-16 bg-white hover:bg-gray-100 rounded-sm shadow-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 md:w-16 md:h-16 bg-white hover:bg-gray-100 rounded-sm shadow-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
          </button>

          {/* Carousel Container */}
          <div className="relative h-[600px] md:h-[500px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="bg-white rounded-sm shadow-xl overflow-hidden h-full flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
                    <Image
                      src={currentCard.image}
                      alt={currentCard.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 flex flex-col">
                    {/* Statistic Bar */}
                    <div
                      className={`${currentCard.color} text-white py-6 px-8 flex items-center justify-center`}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold tracking-wide">
                        {currentCard.statistic}
                      </h3>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 bg-gray-100 p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 tracking-tight">
                          {currentCard.title}
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                          {currentCard.description}
                        </p>
                      </div>

                      <div>
                        <Link
                          href={currentCard.link}
                          className="inline-block text-blue-600 hover:text-blue-800 font-semibold text-sm tracking-wider uppercase transition-colors"
                        >
                          EXPLORE →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {impactCards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
