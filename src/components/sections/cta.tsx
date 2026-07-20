"use client";

import { motion } from "framer-motion";
import { ButtonPremium } from "@/components/ui/button-premium";
import { MessageSquare, Camera } from "lucide-react";

export function CTA() {
  return (
    <section id="contato" className="py-32 relative overflow-hidden bg-background">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Glowing background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Monogram Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
        <span className="font-heading font-bold text-[400px] leading-none text-white tracking-tighter">
          RA
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border border-primary/20 bg-[#051320]/80 backdrop-blur-md p-12 md:p-20 rounded-sm shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Precisa de uma defesa criminal <span className="text-primary italic">especializada?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entre em contato agora mesmo e garanta uma atuação estratégica, ética e focada no melhor resultado para o seu caso.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <a href="https://wa.me/558195669242" target="_blank" rel="noopener noreferrer">
                <ButtonPremium size="lg" className="gap-2 w-full sm:w-auto">
                  <MessageSquare className="w-5 h-5" />
                  Falar no WhatsApp
                </ButtonPremium>
              </a>
              <a href="https://www.instagram.com/rodolfoalexsander.adv/" target="_blank" rel="noopener noreferrer">
                <ButtonPremium size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                  <Camera className="w-5 h-5" />
                  Siga no Instagram
                </ButtonPremium>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
