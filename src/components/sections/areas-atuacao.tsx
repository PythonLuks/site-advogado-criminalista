"use client";

import { motion } from "framer-motion";
import { Gavel, Scale, ShieldAlert, Lock, Unlock, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

const areas = [
  {
    title: "Lei de Drogas",
    desc: "Defesa especializada em casos envolvendo tráfico, associação para o tráfico e crimes relacionados à lei de drogas.",
    icon: <Scale className="w-8 h-8" />
  },
  {
    title: "Crimes Hediondos",
    desc: "Atuação estratégica e dedicada em processos complexos envolvendo crimes hediondos, garantindo o direito à ampla defesa.",
    icon: <ShieldAlert className="w-8 h-8" />
  },
  {
    title: "Tribunal do Júri",
    desc: "Defesa técnica e combativa em plenário para crimes dolosos contra a vida, incluindo homicídio.",
    icon: <Gavel className="w-8 h-8" />
  },
  {
    title: "Prisão em Flagrante",
    desc: "Acompanhamento imediato em delegacias para assegurar direitos constitucionais e evitar prisões preventivas desnecessárias.",
    icon: <Lock className="w-8 h-8" />
  },
  {
    title: "Habeas Corpus",
    desc: "Impetração rápida e fundamentada de Habeas Corpus em todas as instâncias para garantir a liberdade do paciente.",
    icon: <Unlock className="w-8 h-8" />
  },
  {
    title: "Execução Penal",
    desc: "Acompanhamento humanizado da pena, buscando progressão de regime, livramento condicional e remição.",
    icon: <FileText className="w-8 h-8" />
  },
];

export function AreasAtuacao() {
  return (
    <section id="areas" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-primary"></div>
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold">Áreas de Atuação</span>
            <div className="w-8 h-[1px] bg-primary"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight">
            Soluções jurídicas para a sua <span className="text-primary italic">defesa e liberdade.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#051320] border border-border p-8 rounded-sm overflow-hidden hover:border-primary/50 transition-colors duration-500 flex flex-col h-full"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  {area.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {area.desc}
                </p>
              </div>
              

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
