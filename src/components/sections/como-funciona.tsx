"use client";

import { motion } from "framer-motion";
import { PhoneCall, FileSearch, Target, Gavel } from "lucide-react";

const steps = [
  {
    icon: <PhoneCall className="w-8 h-8" />,
    num: "01",
    title: "Primeiro contato",
    desc: "Você entra em contato pelo WhatsApp ou formulário e marcamos uma consulta de alinhamento."
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    num: "02",
    title: "Análise do caso",
    desc: "Estudamos detalhadamente sua demanda, provas e o cenário jurídico para definir a melhor estratégia."
  },
  {
    icon: <Target className="w-8 h-8" />,
    num: "03",
    title: "Planejamento",
    desc: "Criamos um plano de ação personalizado, focado no seu objetivo e nas garantias fundamentais."
  },
  {
    icon: <Gavel className="w-8 h-8" />,
    num: "04",
    title: "Execução",
    desc: "Atuamos com agilidade e combatividade em todas as esferas, mantendo você sempre informado."
  }
];

export function ComoFunciona() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-primary"></div>
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold">Como Funciona o Atendimento</span>
            <div className="w-8 h-[1px] bg-primary"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight">
            Um processo simples, <span className="text-primary italic">transparente</span> e eficiente.
          </h2>
        </div>

        <div className="relative">
          {/* Linha horizontal para telas grandes */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-border z-0">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-[#051320] border border-border flex items-center justify-center text-muted-foreground relative mb-8 group-hover:border-primary group-hover:text-primary transition-all duration-500 shadow-xl">
                  {/* Número de fundo (marca d'água) */}
                  <span className="absolute font-heading text-6xl font-bold text-white/5 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 select-none group-hover:text-primary/10 transition-colors duration-500">
                    {step.num}
                  </span>
                  {/* Ícone */}
                  <div className="relative z-10">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center relative z-10"
          >
            <p className="inline-block bg-primary/10 border border-primary/20 text-primary px-6 py-3 rounded-sm text-sm font-medium">
              Em casos de prisão em flagrante, o contato inicial pode ser feito a qualquer horário — a resposta ocorre dentro do prazo legal da audiência de custódia (24h).
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
