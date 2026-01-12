"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Droplet,
  Ear,
  Waves,
  Home,
  Heart,
  Sparkles,
  Trees,
  Sun,
  GraduationCap,
  Leaf,
  Users2,
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
    icon: Sparkles,
    title: "Kalavati Patwardhan Rotary Skin Bank",
    category: "Healthcare",
    description:
      "A state-of-the-art facility providing life-saving skin grafts for burn victims and accident survivors. This critical medical infrastructure serves the entire region and has saved countless lives through advanced tissue banking technology.",
    impact: "500+ patients treated annually",
  },
  {
    icon: Waves,
    title: "Rambhau Bhide Public Swimming Pool",
    category: "Sports & Recreation",
    description:
      "A community swimming facility promoting health, fitness, and water sports. The pool serves as both a recreational center and a training ground for aspiring swimmers, encouraging healthy lifestyles across all age groups.",
    impact: "2000+ community members benefit",
  },
  {
    icon: Droplet,
    title: "Dr. Shirgaonkar Blood Bank",
    category: "Healthcare",
    description:
      "Emergency blood supply facility ensuring critical care during medical emergencies. Operating 24/7, this blood bank maintains diverse blood groups and provides rapid response for hospitals and medical facilities throughout the district.",
    impact: "5000+ units collected annually",
  },
  {
    icon: Building2,
    title: "Chintamanrao College of Commerce Building",
    category: "Education",
    description:
      "Modern educational infrastructure supporting higher education in commerce and business studies. This facility provides quality learning environments for hundreds of students pursuing their dreams in business and commerce.",
    impact: "800+ students enrolled",
  },
  {
    icon: Ear,
    title: "Deaf and Dumb School, Miraj",
    category: "Inclusive Education",
    description:
      "Specialized educational institution providing inclusive learning opportunities for hearing and speech-impaired children. The school offers sign language instruction, vocational training, and comprehensive support for specially-abled students.",
    impact: "150+ students empowered",
  },
  {
    icon: Heart,
    title: "Usha Mohini Disable Rehabilitation Center",
    category: "Disability Support",
    description:
      "Comprehensive rehabilitation facility offering physiotherapy, occupational therapy, and skill development for persons with disabilities. The center focuses on enabling independent living and social integration.",
    impact: "300+ individuals rehabilitated",
  },
  {
    icon: Home,
    title: "Community Halls, Ganesh Nagar",
    category: "Community Infrastructure",
    description:
      "Multi-purpose community spaces facilitating social gatherings, cultural events, and public meetings. These halls serve as vital community hubs, fostering social cohesion and enabling civic participation.",
    impact: "200+ events hosted annually",
  },
  {
    icon: Trees,
    title: "Kantibhai Shah Lawn",
    category: "Public Spaces",
    description:
      "Beautifully maintained public garden and green space providing recreational areas for families and children. This urban oasis offers a peaceful retreat and promotes environmental awareness in the community.",
    impact: "Daily visitors: 500+",
  },
  {
    icon: Sun,
    title: "Solar Electric Systems",
    category: "Renewable Energy",
    description:
      "Installation of solar power systems in remote areas of Sangli district, bringing clean, sustainable electricity to underserved communities. This initiative reduces dependence on conventional power and promotes environmental sustainability.",
    impact: "50+ homes electrified",
  },
  {
    icon: GraduationCap,
    title: "Educational Scholarships",
    category: "Education",
    description:
      "Financial assistance program supporting meritorious students from economically disadvantaged backgrounds. These scholarships enable talented youth to pursue higher education and realize their full potential.",
    impact: "100+ students supported yearly",
  },
  {
    icon: Users2,
    title: "Rotary Complex, Ganesh Nagar",
    category: "Community Infrastructure",
    description:
      "Centralized facility housing the Trust's administrative offices and serving as a coordination center for various social initiatives. The complex also provides meeting spaces for community organizations and civil society groups.",
    impact: "Hub for community activities",
  },
  {
    icon: Leaf,
    title: "Environmental Initiatives",
    category: "Environment",
    description:
      "Tree plantation drives, waste management programs, and environmental awareness campaigns aimed at creating a sustainable future. These initiatives engage community volunteers and promote ecological responsibility.",
    impact: "10,000+ trees planted",
  },
];

const categories = [
  "All",
  "Healthcare",
  "Education",
  "Community Infrastructure",
  "Disability Support",
  "Environment",
];

export default function ProjectsPage() {
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
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Transforming lives through sustainable infrastructure and community development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Each project represents our commitment to creating lasting impact and building
                infrastructure that serves the community for generations.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="pt-4 border-t border-border">
                          <p className="text-sm font-semibold text-primary">
                            Impact: {project.impact}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-4 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">50+</div>
              <div className="text-lg">Years of Service</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">12+</div>
              <div className="text-lg">Major Projects</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">100K+</div>
              <div className="text-lg">Lives Impacted</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">24/7</div>
              <div className="text-lg">Service Commitment</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
