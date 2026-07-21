"use client";

import Link from "next/link";
import { Calendar, Clock, Search, ChevronRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const categorias = [
  "Todas", "Lei de Drogas", "Crimes Hediondos", "Tribunal do Júri", "Prisão", "Direitos do Acusado", "Habeas Corpus", "Execução Penal"
];

// Mock database
const artigosData = [
  {
    slug: "revisao-criminal-trabalho",
    title: "Revisão Criminal: Quando é possível anular uma condenação?",
    resumo: "Entenda os requisitos e hipóteses legais em que a revisão criminal pode ser aplicada para reverter condenações injustas ou desproporcionais.",
    category: "Direitos do Acusado",
    date: "10 Jul 2026",
    readTime: "5 min",
    author: "Rodolfo Alexander",
    image: "/images/artigo_gavel.jpg"
  },
  {
    slug: "prisao-preventiva-requisitos",
    title: "Prisão Preventiva nos Crimes de Tráfico de Drogas",
    resumo: "Uma análise detalhada sobre a banalização da prisão preventiva e as alternativas cautelares possíveis na atual jurisprudência.",
    category: "Lei de Drogas",
    date: "03 Jul 2026",
    readTime: "7 min",
    author: "Rodolfo Alexander",
    image: "/images/artigo_livros.jpg"
  },
  {
    slug: "habeas-corpus-stj",
    title: "A efetividade do Habeas Corpus no STJ em Execuções Penais",
    resumo: "Como os Tribunais Superiores têm julgado pedidos de Habeas Corpus voltados a garantir a correta progressão de regime prisional.",
    category: "Habeas Corpus",
    date: "25 Jun 2026",
    readTime: "6 min",
    author: "Rodolfo Alexander",
    image: "/images/artigo_tribunal.jpg"
  }
];

export default function ArtigosPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArtigos = artigosData.filter(artigo => {
    const matchesCategory = selectedCategory === "Todas" || artigo.category === selectedCategory;
    const matchesSearch = artigo.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          artigo.resumo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Início</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Artigos</span>
            </div>
            
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors bg-[#051320] px-4 py-2 rounded-sm border border-border hover:border-primary/50"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </button>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Artigos <span className="text-primary italic">Jurídicos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Análises aprofundadas, teses defensivas e as mais recentes decisões dos Tribunais Superiores no âmbito do Direito Penal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="space-y-12">
            {/* Search */}
            <div>
              <h3 className="font-heading text-xl text-white mb-4">Pesquisar</h3>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar artigos..." 
                  className="w-full bg-[#051320] border border-border rounded-sm py-3 pl-4 pr-10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-heading text-xl text-white mb-4">Categorias</h3>
              <ul className="space-y-2">
                {categorias.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setSelectedCategory(cat)}
                      className={`transition-colors text-sm text-left w-full py-1 ${
                        selectedCategory === cat ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Artigos List */}
          <div className="lg:col-span-3">
            {filteredArtigos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArtigos.map((artigo, index) => (
                  <div
                    key={index}
                    className="group flex flex-col h-full bg-[#051320] border border-border rounded-sm overflow-hidden hover:border-primary/50 transition-all duration-500"
                  >
                    <div className="w-full aspect-[16/9] bg-background border-b border-border/50 relative overflow-hidden flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                      <Image 
                        src={artigo.image} 
                        alt={artigo.title} 
                        fill 
                        className="object-cover object-center filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#051320] via-[#051320]/40 to-transparent opacity-80 z-10 pointer-events-none"></div>
                      <div className="absolute top-4 left-4 z-20 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md">
                        {artigo.category}
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" />{artigo.date}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" />{artigo.readTime}</span>
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
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-[#051320] border border-border p-8 rounded-sm text-center">
                <p className="text-muted-foreground">Nenhum artigo encontrado para esta categoria ou termo de busca.</p>
                <button 
                  onClick={() => { setSelectedCategory("Todas"); setSearchTerm(""); }}
                  className="mt-4 text-primary text-sm font-semibold uppercase hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
