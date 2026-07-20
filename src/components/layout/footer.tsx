import Link from "next/link";
import { Camera, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#051320] text-foreground pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Image 
                src="/logos/logo-principal.png" 
                alt="Rodolfo Alexander Logo" 
                width={200} 
                height={60} 
                className="h-auto w-auto max-h-[60px]"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Soluções jurídicas estratégicas com excelência, agilidade e total confidencialidade.
            </p>
          </div>

          {/* Navegação */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-white tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-3">
              {["Início", "Sobre", "Áreas de Atuação", "Diferenciais", "Contato"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-white tracking-wide">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(81) 98566-9342</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>escritorio@rodolfoalexander.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Av. Dr. Belmíno Correia, 460 - Nazaré, Camaragibe/PE</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-semibold text-white tracking-wide">
              Siga nas Redes
            </h4>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/rodolfoalexsander.adv/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Camera className="w-5 h-5" />
                Instagram
              </a>
              <a href="https://wa.me/558195669242" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Rodolfo Alexander. Todos os direitos reservados.
          </p>
          <div className="text-xs text-muted-foreground flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
