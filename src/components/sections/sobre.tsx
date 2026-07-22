"use client";

import { motion } from "framer-motion";
import { ButtonPremium } from "@/components/ui/button-premium";
import Image from "next/image";

export function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#051320] border-y border-border overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Imagem / Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0">
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/50"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/50"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full bg-background border border-primary/20 flex flex-col items-center justify-center shadow-2xl overflow-hidden z-10 group">
              <Image 
                src="/images/perfil4.jpg"
                alt="Rodolfo Alexander"
                fill
                className="object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[400ms] ease-out"
              />
            </div>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 lg:order-2 space-y-8 relative z-10"
        >
          <div className="inline-flex items-center gap-2">
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold">Sobre o Advogado</span>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight">
            Compromisso, ética e excelência em <span className="text-primary italic">cada detalhe.</span>
          </h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              Rodolfo Alexander é advogado criminalista (OAB/PE 44.544), com atuação dedicada ao Direito Penal, especialmente em Lei de Drogas, Crimes Hediondos e Tribunal do Júri.
            </p>
            <p>
              Toda pessoa tem direito a uma defesa técnica e diligente. A atuação do escritório é pautada pelo sigilo profissional e pelo acompanhamento próximo de cada caso, da fase policial até os Tribunais Superiores.
            </p>
          </div>

          <div className="pt-4">
            <a href="https://www.instagram.com/rodolfoalexsander.adv/" target="_blank" rel="noopener noreferrer">
              <ButtonPremium size="lg" icon>
                Conheça minha história
              </ButtonPremium>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
