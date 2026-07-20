import { Hero } from "@/components/sections/hero";
import { Indicadores } from "@/components/sections/indicadores";
import { AreasAtuacao } from "@/components/sections/areas-atuacao";
import { Sobre } from "@/components/sections/sobre";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { Diferenciais } from "@/components/sections/diferenciais";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Artigos } from "@/components/sections/artigos";
import { FAQ } from "@/components/sections/faq";
import { Contato } from "@/components/sections/contato";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Indicadores />
      <AreasAtuacao />
      <Sobre />
      <ComoFunciona />
      <Diferenciais />
      <Depoimentos />
      <Artigos />
      <FAQ />
      <Contato />
      <CTA />
    </>
  );
}
