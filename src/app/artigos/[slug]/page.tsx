import Link from "next/link";
import { Calendar, Clock, ChevronRight, Share2, ArrowLeft } from "lucide-react";
import { ButtonPremium } from "@/components/ui/button-premium";

export const metadata = {
  title: "Artigo | Rodolfo Alexander",
  description: "Leia nosso artigo completo.",
};

export default async function ArtigoPage({ params }: { params: { slug: string } }) {
  // Simulação de busca no banco/CMS
  const slug = params.slug;

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Início</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/artigos" className="hover:text-primary transition-colors">Artigos</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white truncate max-w-[200px] md:max-w-xs">{slug.replace(/-/g, ' ')}</span>
        </div>

        {/* Header do Artigo */}
        <div className="mb-12">
          <div className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md mb-6">
            Categoria
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white leading-tight mb-6 capitalize">
            {slug.replace(/-/g, ' ')}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-y border-border py-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-heading text-primary font-bold">R</div>
                Por <strong className="text-white">Rodolfo Alexander</strong>
              </span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> 10 Jul 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> 5 min leitura</span>
            </div>
            
            <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
              <Share2 className="w-4 h-4" /> Compartilhar
            </button>
          </div>
        </div>

        {/* Imagem de Capa */}
        <div className="w-full aspect-video bg-[#051320] border border-border rounded-sm overflow-hidden mb-12 flex items-center justify-center relative">
           <div className="absolute inset-0 bg-gradient-to-t from-[#051320] to-transparent opacity-50 z-10"></div>
           <div className="relative z-20 text-muted-foreground font-heading text-xl md:text-2xl tracking-widest opacity-50">
             [IMAGEM DE CAPa]
           </div>
        </div>

        {/* Conteúdo */}
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
          <p>
            O conteúdo completo do artigo sobre {slug.replace(/-/g, ' ')} será renderizado aqui. Este é um ambiente preparado para receber <strong>MDX</strong> ou dados de um <strong>CMS Headless</strong>.
          </p>
          <h2>O que diz a lei?</h2>
          <p>
            A legislação brasileira prevê diversas nuances que devem ser analisadas com cautela pelo advogado criminalista. A defesa técnica exige não apenas o conhecimento da lei, mas a vivência e a capacidade de argumentação perante os tribunais.
          </p>
          <blockquote>
            "A justiça não consiste em ser neutro entre o certo e o errado, mas em descobrir o certo e sustentá-lo, onde quer que ele se encontre."
          </blockquote>
          <h3>Conclusão</h3>
          <p>
            Portanto, é fundamental que o acusado busque assistência jurídica especializada desde o primeiro momento.
          </p>
        </article>

        {/* Footer do Artigo */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/artigos">
            <ButtonPremium variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Voltar para Artigos
            </ButtonPremium>
          </Link>
          
          <div className="flex gap-2">
            <span className="text-sm text-muted-foreground mr-2">Tags:</span>
            <span className="text-xs bg-background border border-border px-2 py-1 rounded text-muted-foreground">Direito Penal</span>
            <span className="text-xs bg-background border border-border px-2 py-1 rounded text-muted-foreground">Drogas</span>
          </div>
        </div>

      </div>
    </div>
  );
}
