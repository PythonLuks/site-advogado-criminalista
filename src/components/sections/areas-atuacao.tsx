"use client";

import { motion } from "framer-motion";
import { Gavel, Scale, ShieldAlert, Lock, Unlock, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";

const areas = [
  {
    title: "Audiência de Custódia e Liberdade Provisória",
    desc: "Atuação imediata no prazo de 24h após a prisão em flagrante. Defesa focada no relaxamento da prisão, anulação de ilegalidades e concessão de liberdade provisória.",
    icon: <Unlock className="w-8 h-8" />
  },
  {
    title: "Acompanhamento em Delegacias e Corregedorias",
    desc: "Defesa técnica em depoimentos, oitivas, interrogatórios e mandados de busca perante Polícia Civil, Polícia Federal e Corregedorias. Garantia do direito ao silêncio e livre acesso aos autos (SV 14/STF).",
    icon: <ShieldAlert className="w-8 h-8" />
  },
  {
    title: "Lei de Drogas & Crimes Hediondos",
    desc: "Atuação técnica em processos de tráfico, associação para o tráfico e demais crimes hediondos, da fase policial ao trânsito em julgado.",
    icon: <Scale className="w-8 h-8" />
  },
  {
    title: "Tribunal do Júri & Habeas Corpus",
    desc: "Defesa especializada em plenário do Júri e impetração urgente de Habeas Corpus perante os Tribunais Estaduais, STJ e STF.",
    icon: <Gavel className="w-8 h-8" />
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
