"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Scale } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const resultados = [
  {
    title: "Tráfico de Drogas",
    text: "Revogação de prisão preventiva em processo de tráfico de drogas, com concessão de liberdade provisória em regime de medidas cautelares."
  },
  {
    title: "Crimes Hediondos",
    text: "Habeas Corpus deferido pelo Tribunal de Justiça, garantindo a progressão de regime a cliente em cumprimento de pena por crime hediondo."
  },
  {
    title: "Tribunal do Júri",
    text: "Absolvição em Tribunal do Júri por negativa de autoria, após instrução criminal técnica e minuciosa."
  },
  {
    title: "Prisão em Flagrante",
    text: "Relaxamento de prisão em flagrante por vício na lavratura do auto de prisão, com soltura em 24 horas."
  },
  {
    title: "Associação para o Tráfico",
    text: "Desclassificação da conduta na fase de sentença, afastando a tipificação de associação e reduzindo significativamente a pena."
  }
];

export function Depoimentos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Elemento de fundo */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-primary"></div>
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold">Casos de Atuação</span>
            <div className="w-8 h-[1px] bg-primary"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight">
            Resultados que <span className="text-primary italic">falam por si.</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {resultados.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="bg-[#051320] border border-border p-8 rounded-sm h-full flex flex-col relative group hover:border-primary/50 transition-colors">
                    <Scale className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1 relative z-10">
                      "{item.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-4">
                      <div>
                        <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                        <p className="text-xs text-primary mt-1">Caso Concluído</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button 
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {resultados.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${idx === selectedIndex ? 'bg-primary w-6' : 'bg-primary/30'}`}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  aria-label={`Ir para o slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
