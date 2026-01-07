"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Shield, FileCheck } from "lucide-react";

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

const legalInfo = [
  { label: "PAN", value: "AAATR1683A" },
  { label: "TAN", value: "KLPT02123C" },
  { label: "GST", value: "27AAATR1683A2ZQ" },
  { label: "Registration No.", value: "BOM/259/Sangli" },
  { label: "Charity Commissioner No.", value: "F-218" },
];

const documents = [
  {
    title: "12A Certificate",
    description: "Income Tax exemption certificate under Section 12A",
    icon: FileText,
  },
  {
    title: "80G Certificate",
    description: "Tax deduction certificate for donors under Section 80G",
    icon: FileCheck,
  },
  {
    title: "CSR Policy Document",
    description: "Corporate Social Responsibility guidelines and eligibility",
    icon: Shield,
  },
  {
    title: "Trust Deed",
    description: "Registration and constitutional documents",
    icon: FileText,
  },
  {
    title: "Annual Reports",
    description: "Yearly activity and financial reports",
    icon: FileText,
  },
  {
    title: "Audited Statements",
    description: "Financial statements audited by chartered accountants",
    icon: FileCheck,
  },
];

export default function CompliancePage() {
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
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Statutory & Compliance
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Transparency, accountability, and regulatory compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Information Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary">
                Legal Information
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our registration details and statutory compliance information
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
            >
              {legalInfo.map((info, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                        {info.label}
                      </h3>
                      <p className="font-bold text-2xl text-primary">{info.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 max-w-3xl mx-auto bg-muted/50 p-8 rounded-lg"
            >
              <h3 className="font-bold text-xl mb-4 text-foreground">
                Registered Under
              </h3>
              <p className="text-muted-foreground mb-4">
                The Rotary Silver Jubilee Trust, Sangli is registered under the{" "}
                <span className="font-semibold text-foreground">
                  Bombay Public Trust Act
                </span>
                , ensuring full legal compliance and governance as per Indian trust laws.
              </p>
              <p className="text-muted-foreground">
                The Trust is also registered under Section 12A and 80G of the Income Tax
                Act, enabling tax benefits for donors and exemptions as per applicable
                regulations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary">
                Documents & Certificates
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Download official certificates and compliance documents
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
            >
              {documents.map((doc, index) => {
                const Icon = doc.icon;
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{doc.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {doc.description}
                        </p>
                        <Button
                          variant="outline"
                          className="w-full group"
                          disabled
                        >
                          <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                          Download PDF
                        </Button>
                        <p className="text-xs text-muted-foreground mt-2 text-center">
                          Contact office for documents
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

      {/* CSR Information Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-primary/20">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-serif">
                  CSR Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The Rotary Silver Jubilee Trust, Sangli is eligible to receive funds under
                  the Corporate Social Responsibility (CSR) provisions of the Companies Act,
                  2013.
                </p>
                <p>
                  Corporations looking to fulfill their CSR obligations can partner with us
                  for impactful social projects in education, healthcare, disability support,
                  and community infrastructure.
                </p>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-bold text-foreground mb-2">For CSR Partnerships:</h4>
                  <p className="text-sm">
                    Please contact our office for detailed project proposals, impact
                    reports, and partnership opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
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
              Need More Information?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Contact our office to request official documents, certificates, or discuss
              partnership opportunities.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="/contact">Contact Us</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
