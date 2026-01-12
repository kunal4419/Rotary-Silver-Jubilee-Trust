"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Droplet,
  Ear,
  Waves,
  Home,
  Heart,
  Sparkles,
  Sun,
  Calendar,
  FileCheck,
  Users,
  ArrowRight,
} from "lucide-react";
import { ImpactCarousel } from "@/components/ImpactCarousel";
import HeroVideo from "@/components/home/HeroVideo";
import AutoCarousel from "@/components/home/AutoCarousel";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projects = [
  {
    icon: Building2,
    title: "Chintamanrao College of Commerce Building",
    description: "Educational infrastructure for future leaders",
  },
  {
    icon: Droplet,
    title: "Dr. Shirgaonkar Blood Bank",
    description: "Life-saving blood supply for the community",
  },
  {
    icon: Ear,
    title: "Deaf and Dumb School, Miraj",
    description: "Inclusive education for specially-abled children",
  },
  {
    icon: Waves,
    title: "Rambhau Bhide Swimming Pool",
    description: "Public health and sports facility",
  },
  {
    icon: Home,
    title: "Community Halls, Ganesh Nagar",
    description: "Social gathering spaces for the community",
  },
  {
    icon: Heart,
    title: "Usha Mohini Disable Rehabilitation Center",
    description: "Comprehensive care for persons with disabilities",
  },
  {
    icon: Sparkles,
    title: "Kalavati Chintamani Patwardhan Rotary Skin Bank",
    description: "Advanced medical facility for skin grafts",
  },
  {
    icon: Sun,
    title: "Solar Electric Systems",
    description: "Renewable energy for remote areas of Sangli district",
  },
];

const aboutCards = [
  {
    icon: Calendar,
    label: "Founded",
    value: "12 November 1974",
  },
  {
    icon: FileCheck,
    label: "Registered Under",
    value: "Bombay Public Trust Act",
  },
  {
    icon: FileCheck,
    label: "Regd. No.",
    value: "BOM/259/Sangli",
  },
  {
    icon: Users,
    label: "Charity Commissioner No.",
    value: "F-218",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Video Section */}
      <HeroVideo />

      {/* Trust Information Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
                Rotary Silver Jubilee Trust, Sangli
              </h2>
              <p className="text-lg text-muted-foreground">
                A Legacy of Service Since 1974
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The Rotary Silver Jubilee Trust, established by Rotary Club of Sangli in 1974, 
                      is dedicated to creating sustainable social infrastructure that transforms lives. 
                      We focus on building landmark projects in education, healthcare, disability support, 
                      and community development that serve society for generations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Our Impact</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Over five decades, we have invested ₹10+ Crores in building critical infrastructure 
                      that has touched over 100,000 lives across Sangli district. Our projects include 
                      blood banks, educational institutions, rehabilitation centers, sports facilities, 
                      and community halls.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <AutoCarousel />
        </div>
      </section>

      {/* About Snapshot Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Serving Society Since 1974
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary"
            >
              50+ Years of Dedicated Service
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Since our inception, we have been committed to creating sustainable
              social infrastructure that enhances the quality of life for all sections
              of society in Sangli and beyond.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12"
          >
            {aboutCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                        {item.label}
                      </h3>
                      <p className="font-bold text-lg text-primary">{item.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Impact Carousel Section */}
      <ImpactCarousel />

      {/* Landmark Projects Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary"
            >
              Landmark Social Projects
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Our commitment to social welfare is reflected in these transformative
              projects that continue to serve the community.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12"
          >
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
              Our Focus Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Rotary addresses community needs through targeted areas of impact
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
              {/* Row 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <Image
                    src="/images/healthcare/DSC_1142.JPG"
                    alt="Fighting Disease"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-base md:text-lg text-foreground">Fighting Disease</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <Image
                    src="/images/community/MG-52216-5.jpg"
                    alt="Promoting Peace"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-base md:text-lg text-foreground">Promoting Peace</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <Image
                    src="/images/community/MG-52225-3.jpg"
                    alt="Providing Clean Water"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-base md:text-lg text-foreground">Providing Clean Water</h3>
              </motion.div>

              {/* Row 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <Image
                    src="/images/healthcare/DSC_1151.JPG"
                    alt="Improving Maternal and Child Health"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-base md:text-lg text-foreground">Improving Maternal and Child Health</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <Image
                    src="/images/education/DSC_0225.JPG"
                    alt="Supporting Education"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-base md:text-lg text-foreground">Supporting Education</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <Image
                    src="/images/community/MG-52225-5.jpg"
                    alt="Growing Local Economies"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-base md:text-lg text-foreground">Growing Local Economies</h3>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Together, we can create lasting impact and build a better future for
              our community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border p-5">
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

function Teaser({ title, href, img }: { title: string; href: string; img: string }) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-lg border">
      <Image
        src={img}
        alt={title}
        width={800}
        height={600}
        className="h-48 w-full object-cover transition-transform group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-3 left-3 text-white text-lg font-semibold">{title}</div>
    </Link>
  )
}
