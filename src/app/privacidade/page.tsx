import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | Rodolfo Alexander",
  description: "Política de Privacidade e Proteção de Dados - Rodolfo Alexander Advogado Criminalista."
};

export default function PrivacidadePage() {
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
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">Última atualização: Julho de 2026</p>
          </header>

          <div className="prose prose-invert prose-p:text-muted-foreground prose-a:text-primary max-w-none">
            <p>
              O escritório <strong>Rodolfo Alexander Advocacia Criminal</strong>, com atuação focada em Direito Penal, respeita a sua privacidade e garante o sigilo total de suas informações.
              Esta Política de Privacidade descreve como os seus dados pessoais são coletados, usados e compartilhados quando você visita nosso site ou entra em contato conosco.
            </p>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">1. Informações que coletamos</h3>
            <p>
              Quando você utiliza nosso formulário de contato ou botão de WhatsApp, podemos coletar os seguintes dados pessoais:
            </p>
            <ul>
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone / WhatsApp</li>
              <li>Informações iniciais sobre o seu caso (caso você decida nos enviar via mensagem)</li>
            </ul>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">2. Como utilizamos suas informações</h3>
            <p>
              Em obediência ao sigilo profissional que rege a advocacia (Estatuto da OAB e Código de Ética e Disciplina) e à Lei Geral de Proteção de Dados (LGPD), utilizamos os dados coletados exclusivamente para:
            </p>
            <ul>
              <li>Entrar em contato para responder à sua solicitação inicial;</li>
              <li>Realizar agendamentos de consultas presenciais ou virtuais;</li>
              <li>Avaliar preliminarmente a viabilidade jurídica do seu caso;</li>
              <li>Cumprir obrigações legais e regulatórias inerentes à prestação de serviços jurídicos.</li>
            </ul>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">3. Sigilo Profissional e Confidencialidade</h3>
            <p>
              Todas as informações compartilhadas conosco, incluindo os dados preenchidos no site e os fatos narrados em consultas, são protegidas pelo <strong>rigoroso sigilo profissional do advogado</strong>. Seus dados jamais serão vendidos, alugados ou compartilhados com terceiros para fins de marketing ou qualquer outra finalidade comercial.
            </p>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">4. Retenção de Dados</h3>
            <p>
              Manteremos suas informações de contato apenas pelo tempo necessário para cumprir as finalidades descritas nesta política. Caso a contratação dos serviços não se concretize, os dados sensíveis fornecidos no contato inicial poderão ser descartados de forma segura, garantindo sua privacidade.
            </p>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">5. Seus Direitos</h3>
            <p>
              Conforme a LGPD, você tem o direito de solicitar a confirmação do tratamento, o acesso, a correção ou a exclusão dos seus dados pessoais fornecidos através do nosso site. Para exercer qualquer um desses direitos, entre em contato conosco.
            </p>

            <h3 className="text-xl font-heading text-white mt-8 mb-4">6. Contato</h3>
            <p>
              Para dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados, entre em contato diretamente conosco pelo e-mail: <strong>escritorio@rodolfoalexander.com.br</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
