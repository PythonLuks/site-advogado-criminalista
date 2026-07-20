"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { ButtonPremium } from "@/components/ui/button-premium";

const ultimosArtigos = [
  {
    slug: "revisao-criminal-trabalho",
    title: "Revisão Criminal: Quando é possível anular uma condenação?",
    resumo: "Entenda os requisitos e hipóteses legais em que a revisão criminal pode ser aplicada para reverter condenações injustas ou desproporcionais.",
    category: "Direitos do Acusado",
    date: "10 Jul 2026",
    readTime: "5 min",
    author: "Rodolfo Alexander"
  },
  {
    slug: "prisao-preventiva-requisitos",
    title: "Prisão Preventiva nos Crimes de Tráfico de Drogas",
    resumo: "Uma análise detalhada sobre a banalização da prisão preventiva e as alternativas cautelares possíveis na atual jurisprudência.",
    category: "Lei de Drogas",
    date: "03 Jul 2026",
    readTime: "7 min",
    author: "Rodolfo Alexander"
  },
  {
    slug: "habeas-corpus-stj",
    title: "A efetividade do Habeas Corpus no STJ em Execuções Penais",
    resumo: "Como os Tribunais Superiores têm julgado pedidos de Habeas Corpus voltados a garantir a correta progressão de regime prisional.",
    category: "Habeas Corpus",
    date: "25 Jun 2026",
    readTime: "6 min",
    author: "Rodolfo Alexander"
  }
];

export function Artigos() {
  return (
    <section id="artigos" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-primary"></div>
              <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold">Blog</span>
              <div className="w-8 h-[1px] bg-primary"></div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight">
              Artigos <span className="text-primary italic">Jurídicos.</span>
            </h2>
          </div>
          
          <Link href="/artigos">
            <ButtonPremium variant="outline" className="hidden md:flex">
              Ver Todos os Artigos
            </ButtonPremium>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ultimosArtigos.map((artigo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col h-full bg-[#051320] border border-border rounded-sm overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Imagem de Capa Placeholder */}
              <div className="w-full aspect-[16/9] bg-background border-b border-border/50 relative overflow-hidden flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-[#051320] to-transparent opacity-50 z-10"></div>
                <div className="relative z-20 text-muted-foreground font-heading text-lg tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
                  [IMAGEM ARTIGO]
                </div>
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 z-20 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md">
                  {artigo.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {artigo.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    {artigo.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {artigo.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                  {artigo.resumo}
                </p>

                <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Por <strong className="text-white/80">{artigo.author}</strong></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/artigos">
            <ButtonPremium variant="outline" className="w-full">
              Ver Todos os Artigos
            </ButtonPremium>
          </Link>
        </div>
      </div>
    </section>
  );
}
