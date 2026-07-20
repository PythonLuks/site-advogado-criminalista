"use client";

import { motion } from "framer-motion";
import { UserCog, Zap, Shield, Eye, MonitorSmartphone, Lock } from "lucide-react";

const diferenciais = [
  {
    icon: <UserCog className="w-6 h-6" />,
    title: "Atendimento Personalizado",
    desc: "Cada cliente é único. Tratamos seu caso com a dedicação e atenção exclusivas que ele exige."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Resposta Rápida",
    desc: "Agilidade que faz a diferença. Retorno rápido para garantir seus direitos em tempo hábil."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Ética Profissional",
    desc: "Compromisso com a verdade, a justiça e as normas éticas da advocacia em todas as ações."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Transparência",
    desc: "Informações claras e constantes sobre o andamento e as reais possibilidades do seu processo."
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: "Atendimento Digital",
    desc: "Soluções modernas com reuniões online para facilitar sua vida, em qualquer lugar do Brasil."
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Confidencialidade",
    desc: "Sigilo absoluto garantido em todas as etapas e comunicações sobre o seu caso."
  }
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-[#051320] border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-primary"></div>
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold">Diferenciais</span>
            <div className="w-8 h-[1px] bg-primary"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight">
            O que nos torna <span className="text-primary italic">diferentes.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-background/50 border border-border/50 rounded-sm hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
