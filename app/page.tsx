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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              The Rotary Silver Jubilee Trust, Sangli
            </motion.h1>
            
            <motion.p
              className="text-2xl md:text-3xl mb-4 text-accent font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Serving Society Since 1974
            </motion.p>
            
            <motion.p
              className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Established by Rotary Club of Sangli, the Trust has been a cornerstone
              of social development in Sangli and surrounding regions through landmark
              projects in education, healthcare, disability support, and community
              infrastructure.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/about">Know Our Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/projects">Our Projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* About Snapshot Section */}
      <section className="py-20 bg-background">
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
              50+ Years of Dedicated Service
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
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
