import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Termos de Uso | Rodolfo Alexander",
  description: "Termos de Uso do site Rodolfo Alexander Advogado Criminalista."
};

export default function TermosPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </Link>
        
        <div className="space-y-12">
          <header>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Termos de Uso
            </h1>
            <p className="text-muted-foreground">Última atualização: Julho de 2026</p>
          </header>

          <div className="prose prose-invert prose-p:text-muted-foreground prose-a:text-primary max-w-none">
            <p>
              Ao acessar e utilizar o site do escritório <strong>Rodolfo Alexander Advocacia Criminal</strong>, você concorda em cumprir e sujeitar-se aos seguintes Termos de Uso. Recomendamos a leitura atenta das condições abaixo.
            </p>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">1. Natureza Informativa do Conteúdo</h3>
            <p>
              O conteúdo disponibilizado neste site, incluindo artigos, páginas de áreas de atuação, perguntas frequentes (FAQ) e resultados ilustrativos, tem finalidade exclusivamente <strong>informativa e institucional</strong>. Nenhuma informação aqui contida constitui parecer jurídico, consultoria, recomendação de agir ou promessa de resultado.
            </p>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">2. Ausência de Vínculo Advocatício</h3>
            <p>
              O simples acesso a este site, bem como o envio de mensagens pelo formulário de contato ou WhatsApp, não cria imediatamente uma relação de cliente-advogado. O vínculo profissional só se concretiza mediante a celebração de um contrato formal de honorários advocatícios ou procuração específica.
            </p>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">3. Sigilo e Confidencialidade</h3>
            <p>
              Embora o contato inicial não estabeleça imediata relação contratual, todas as informações recebidas pelo escritório durante consultas ou contatos preliminares são tratadas com absoluto sigilo, em observância ao Código de Ética e Disciplina da OAB.
            </p>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">4. Restrições de Uso</h3>
            <p>
              Fica terminantemente proibida a reprodução, cópia, distribuição, alteração ou uso não autorizado de qualquer material contido neste site (textos, imagens, identidade visual e logotipos) sem a prévia e expressa autorização por escrito do titular.
            </p>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">5. Propriedade Intelectual</h3>
            <p>
              Todos os direitos relativos a este site são reservados à <strong>Rodolfo Alexander Advocacia Criminal</strong>. O uso indevido de qualquer conteúdo configurará infração aos direitos de propriedade intelectual, sujeitando o infrator às sanções civis e criminais cabíveis.
            </p>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">6. Modificações dos Termos</h3>
            <p>
              Reservamo-nos o direito de alterar, a qualquer momento e sem aviso prévio, estes Termos de Uso. Recomendamos que você os revise periodicamente para se manter atualizado.
            </p>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">7. Foro</h3>
            <p>
              Para dirimir quaisquer controvérsias oriundas da utilização deste site, elege-se o foro da Comarca do Recife, Estado de Pernambuco, renunciando-se a qualquer outro, por mais privilegiado que seja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
