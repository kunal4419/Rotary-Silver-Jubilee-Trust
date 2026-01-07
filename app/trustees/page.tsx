"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, User } from "lucide-react";

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

const boardMembers = [
  {
    role: "Chairman",
    name: "Rtn. Ashok V. Savant",
    phone: "+91 98220 43518",
  },
  {
    role: "Vice Chairman",
    name: "Rtn. Vijay G. Bajaj",
    phone: "+91 98223 25555",
  },
  {
    role: "Secretary",
    name: "Rtn. Nitin B. Shah",
    phone: "+91 98230 53516",
  },
  {
    role: "Joint Secretary",
    name: "Rtn. Dr. Chandrashekhar S. Purandare",
    phone: "+91 98223 38523",
  },
  {
    role: "Treasurer",
    name: "Rtn. Uday J. Patil",
    phone: "+91 98220 02736",
  },
];

const trustees = [
  { name: "Rtn. Girish Chitale" },
  { name: "Rtn. Dr. Suhas Joshi" },
];

const exOfficioTrustees = [
  { name: "Hon. Commissioner, SMKC, Sangli" },
  { name: "President, Rotary Club of Sangli" },
  { name: "President Elect, Rotary Club of Sangli" },
];

const honorarySecretary = {
  name: "Rtn. Ramkrishna J. Chitale",
  phone: "+91 94220 41688",
};

export default function TrusteesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trustees & Office Bearers
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Leadership committed to serving the community (2025-2030)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board of Trustees Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4 text-primary">
                Board of Trustees (2025-2030)
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our dedicated leadership team guiding the Trust's vision and mission
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
            >
              {boardMembers.map((member, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <User className="w-8 h-8 text-primary" />
                      </div>
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                          {member.role}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-foreground">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <a
                          href={`tel:${member.phone}`}
                          className="text-sm hover:text-primary transition-colors"
                        >
                          {member.phone}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trustees Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4 text-primary">
                Trustees
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto"
            >
              {trustees.map((trustee, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground">
                        {trustee.name}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ex-Officio Trustees Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4 text-primary">
                Ex-Officio Trustees
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto"
            >
              {exOfficioTrustees.map((trustee, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                        <User className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-base text-foreground leading-relaxed">
                        {trustee.name}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Honorary Secretary Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-8 text-center">
              Honorary Secretary
            </h2>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/20 mb-4">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-primary-foreground">
                  {honorarySecretary.name}
                </h3>
                <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
                  <Phone className="w-5 h-5" />
                  <a
                    href={`tel:${honorarySecretary.phone}`}
                    className="text-lg hover:text-accent transition-colors"
                  >
                    {honorarySecretary.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
