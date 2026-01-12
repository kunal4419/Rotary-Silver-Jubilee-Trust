"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Target, Users, Shield, Lightbulb, Handshake } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const missionPoints = [
  "Promote education, healthcare, and community welfare",
  "Support inclusive development for the disabled and underprivileged",
  "Create and maintain public utility infrastructure",
  "Foster partnerships with government and civil society",
];

const values = [
  {
    icon: Heart,
    title: "Service Above Self",
    description: "We prioritize the needs of the community over individual interests",
  },
  {
    icon: Shield,
    title: "Transparency & Accountability",
    description: "We maintain the highest standards of governance and reporting",
  },
  {
    icon: Lightbulb,
    title: "Sustainability",
    description: "We design projects for long-term impact and environmental responsibility",
  },
  {
    icon: Handshake,
    title: "Community Partnership",
    description: "We work collaboratively with stakeholders to achieve shared goals",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Building a legacy of social service and community development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <h2 className="font-sans text-2xl md:text-3xl font-bold mb-3 text-primary">
                Official Recognition
              </h2>
              <p className="text-muted-foreground">
                Chartered member of Rotary International since 1948
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/certificates/Rotary Sangli Charter Certificate 1948.jpg"
                      alt="Rotary Club of Sangli Charter Certificate from 1948"
                      fill
                      className="object-contain bg-white p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                  <div className="p-6 bg-muted/30 text-center">
                    <h3 className="font-bold text-lg mb-2 text-primary">
                      Rotary International Charter Certificate
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Rotary Club of Sangli, India - Chartered 30th December 1948 (Club No. 7146)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="font-sans text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The Rotary Silver Jubilee Trust, Sangli was established on{" "}
                  <span className="font-semibold text-foreground">12th November 1974</span>{" "}
                  by the <span className="font-semibold text-foreground">Rotary Club of Sangli</span> to
                  implement long-term, high-impact social projects for public benefit.
                </p>
                <p>
                  Registered under the{" "}
                  <span className="font-semibold text-foreground">Bombay Public Trust Act</span>{" "}
                  (Registration No.: <span className="font-semibold text-foreground">BOM/259/Sangli</span>),
                  our Trust has been a cornerstone of social development in Sangli and surrounding regions
                  for over 50 years.
                </p>
                <p>
                  Through landmark projects in education, healthcare, disability support, and community
                  infrastructure, we have touched countless lives and created sustainable social impact
                  that continues to benefit the community today.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-muted/50 p-8 rounded-lg">
              <p className="text-lg text-foreground italic">
                "Our commitment goes beyond charity - we invest in creating permanent assets and
                infrastructure that serve generations, embodying the Rotary spirit of Service Above Self."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-sans text-3xl md:text-4xl font-bold mb-6 text-primary">
                Our Vision
              </h2>
              <p className="text-xl text-foreground leading-relaxed">
                To create sustainable social infrastructure that enhances quality of life for all
                sections of society, building a more equitable and prosperous Sangli.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-primary">
                Our Mission
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid gap-4 md:gap-6"
            >
              {missionPoints.map((point, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="text-lg text-foreground flex-1">{point}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4 text-primary">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do and shape our approach to social service
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-primary">
                          {value.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-6">
              A Legacy of Impact
            </h2>
            <p className="text-lg mb-4 text-primary-foreground/90 leading-relaxed">
              For over five decades, we have remained steadfast in our commitment to creating
              meaningful change. From blood banks to schools, from swimming pools to skin banks,
              each project represents our dedication to building infrastructure that serves the
              community for generations.
            </p>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              As we continue this journey, we invite you to be part of our mission to build a
              better tomorrow for Sangli and beyond.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
