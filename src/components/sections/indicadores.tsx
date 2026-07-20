"use client";

import { motion } from "framer-motion";
import { Briefcase, Star, Clock, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    value: "+500",
    label: "Processos",
    desc: "Atuando com maestria",
  },
  {
    icon: <Star className="w-8 h-8 text-primary" />,
    value: "5.0",
    label: "★★★★★",
    desc: "Avaliação dos clientes",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    value: "24/7",
    label: "Atendimento Ágil",
    desc: "Respostas rápidas e eficientes",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    value: "100%",
    label: "Total Sigilo",
    desc: "Confidencialidade em todas as etapas",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Indicadores() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-24 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#051320] border border-primary/20 p-8 md:p-12 rounded-sm shadow-2xl flex flex-col md:flex-row flex-wrap justify-between gap-10 lg:gap-4 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex items-center gap-6 flex-1 min-w-[200px]">
              <div className="p-4 border border-primary/20 bg-background/50 rounded-sm shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-heading font-bold text-white">{stat.value}</h3>
                </div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
