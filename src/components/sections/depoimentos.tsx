"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const depoimentos = [
  {
    name: "Carlos Mendes",
    initial: "C",
    text: "Atendimento excelente! Muito ágil e competente. Me manteve informado em todas as etapas do processo, passando muita segurança.",
    stars: 5
  },
  {
    name: "Juliana Ferreira",
    initial: "J",
    text: "Profissional extremamente dedicado e atencioso. Recomendo de olhos fechados. Fez toda a diferença no meu caso.",
    stars: 5
  },
  {
    name: "Ricardo Lima",
    initial: "R",
    text: "Soluções práticas e eficientes. Conseguiu resolver meu problema com rapidez e muita transparência.",
    stars: 5
  },
  {
    name: "Mariana Costa",
    initial: "M",
    text: "Me senti acolhida desde o primeiro contato. O Dr. Rodolfo é impecável em sua atuação. Muito grata por tudo.",
    stars: 5
  },
  {
    name: "Fernando Silva",
    initial: "F",
    text: "Profissionalismo ímpar! O Dr. Rodolfo e sua equipe foram extremamente atenciosos e resolveram minha situação com maestria.",
    stars: 5
  },
  {
    name: "Beatriz Oliveira",
    initial: "B",
    text: "Estava muito preocupada com meu processo, mas a clareza e segurança transmitidas pelo escritório me tranquilizaram bastante. Resultado excelente.",
    stars: 5
  },
  {
    name: "Eduardo Santos",
    initial: "E",
    text: "Excelente advogado. Acompanhou meu caso de perto, com dedicação e extrema habilidade técnica. Sou muito grato por me ajudarem.",
    stars: 5
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
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold">O que dizem nossos clientes</span>
            <div className="w-8 h-[1px] bg-primary"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight">
            A confiança de quem já <span className="text-primary italic">nos escolheu.</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {depoimentos.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="bg-[#051320] border border-border p-8 rounded-sm h-full flex flex-col relative group hover:border-primary/50 transition-colors">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1 italic relative z-10">
                      "{item.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-heading text-xl text-primary font-bold">
                        {item.initial}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                        <div className="flex gap-1 mt-1">
                          {[...Array(item.stars)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                          ))}
                        </div>
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
              {depoimentos.map((_, idx) => (
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
