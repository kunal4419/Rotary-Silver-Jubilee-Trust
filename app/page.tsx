"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
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
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/hero-video.webm" type="video/webm" />
            {/* Fallback gradient if video doesn't load */}
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <motion.h1
              className="font-sans text-4xl md:text-5xl lg:text-6xl font-normal mb-6 drop-shadow-lg tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We are People of Action
            </motion.h1>
            
            <motion.p
              className="text-base md:text-lg lg:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Our global network of more than 1.2 million neighbors, friends, and leaders volunteer their skills and resources to solve issues and address community needs.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="text-sm md:text-base px-8 py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary tracking-wide uppercase font-medium"
              >
                <Link href="/about">Take Action With Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* About Snapshot Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                Serving Society Since 1974
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary"
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

      {/* Landmark Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
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
