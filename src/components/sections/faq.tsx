"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Quais tipos de serviços vocês oferecem?",
    answer: "Atuamos de forma especializada em Direito Penal, com foco em Lei de Drogas, Crimes Hediondos, Tribunal do Júri, acompanhamento em flagrantes, Habeas Corpus e execução penal."
  },
  {
    question: "Como funciona o atendimento online?",
    answer: "Oferecemos consultas virtuais por videochamada com a mesma excelência e sigilo do atendimento presencial. Você pode agendar seu horário pelo WhatsApp."
  },
  {
    question: "Vocês atendem em todo o Brasil?",
    answer: "Sim. Realizamos atendimento consultivo e contencioso estratégico em todo o território nacional, de forma presencial quando necessário ou integralmente digital."
  },
  {
    question: "Como faço para contratar os serviços?",
    answer: "O primeiro passo é entrar em contato pelo nosso WhatsApp ou formulário para agendarmos uma consulta inicial. Nela, analisaremos o caso e apresentaremos a melhor estratégia defensiva."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-[#051320] border-t border-border">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold">Perguntas Frequentes</span>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
            Esclareça suas <span className="text-primary italic">dúvidas.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            Reunimos as principais dúvidas sobre nossa atuação e metodologia de trabalho. Caso sua dúvida não esteja aqui, entre em contato diretamente conosco.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border border-border/50 rounded-sm overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-primary/5 border-primary/30' : 'bg-background/20 hover:border-border'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className={`font-medium text-lg transition-colors ${isOpen ? 'text-primary' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-transparent border border-border text-muted-foreground'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-muted-foreground leading-relaxed text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
