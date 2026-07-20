"use client";

import { motion } from "framer-motion";
import { ButtonPremium } from "@/components/ui/button-premium";
import { Camera, MessageSquare } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background">
      {/* Background Monogram */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
        <span className="font-heading font-bold text-[600px] leading-none text-white tracking-tighter">
          RA
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-w-2xl"
        >
          <div className="inline-block border border-primary/30 px-4 py-1.5 rounded-full text-xs font-medium text-primary tracking-widest uppercase mb-4 bg-primary/5">
            Consultoria & Correspondência Jurídica
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
            Defesa Criminal Estratégica com <span className="text-primary italic">Excelência</span>, Ética e Compromisso.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Atuação especializada em Lei de Drogas e Crimes Hediondos. Protegendo seus direitos com agilidade, transparência e estratégias personalizadas para os melhores resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://wa.me/558195669242" target="_blank" rel="noopener noreferrer">
              <ButtonPremium size="lg" icon className="w-full sm:w-auto">
                Agendar Consulta
              </ButtonPremium>
            </a>
            <a href="https://wa.me/558195669242" target="_blank" rel="noopener noreferrer">
              <ButtonPremium size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </ButtonPremium>
            </a>
            <a href="https://www.instagram.com/rodolfoalexsander.adv/" target="_blank" rel="noopener noreferrer">
              <ButtonPremium size="lg" variant="ghost" className="gap-2 px-4 w-full sm:w-auto">
                <Camera className="w-5 h-5" />
              </ButtonPremium>
            </a>
          </div>
        </motion.div>

        {/* Right Content - Placeholder com Moldura Elegante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] aspect-[3/4]">
            {/* Decorative Frame */}
            <div className="absolute inset-0 border-2 border-primary/40 -translate-x-6 translate-y-6 rounded-sm"></div>
            <div className="absolute inset-0 border border-white/10 translate-x-3 -translate-y-3 rounded-sm backdrop-blur-sm bg-white/5"></div>
            
            {/* The Image */}
            <div className="relative w-full h-full bg-[#051320] flex flex-col items-center justify-center border border-primary/20 rounded-sm shadow-2xl overflow-hidden group">
              <Image 
                src="/images/perfil1.jpg"
                alt="Rodolfo Alexander"
                fill
                className="object-cover object-top filter contrast-110 saturate-50 hover:saturate-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051320] via-transparent to-transparent z-10" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
