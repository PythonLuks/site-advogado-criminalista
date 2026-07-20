"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { ButtonPremium } from "@/components/ui/button-premium";

const contactSchema = z.object({
  nome: z.string().min(3, "Nome completo é obrigatório"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  mensagem: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contato() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulação de envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold">Contato</span>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
            Fale com um <span className="text-primary italic">especialista.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            Agende uma consulta presencial ou online. Atendemos de forma ágil, segura e com total confidencialidade.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Endereço</span>
              <span className="text-white">Av. Dr. Belmíno Correia, 460 - Nazaré, Camaragibe/PE</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">WhatsApp</span>
              <span className="text-white">(81) 98566-9342</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">E-mail</span>
              <span className="text-white">escritorio@rodolfoalexander.com.br</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#051320] border border-border p-8 md:p-12 rounded-sm"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="nome" className="text-sm text-muted-foreground">Nome Completo</label>
              <input 
                id="nome"
                {...register("nome")}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Seu nome completo"
              />
              {errors.nome && <span className="text-destructive text-xs">{errors.nome.message}</span>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="telefone" className="text-sm text-muted-foreground">Telefone / WhatsApp</label>
                <input 
                  id="telefone"
                  {...register("telefone")}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="(00) 00000-0000"
                />
                {errors.telefone && <span className="text-destructive text-xs">{errors.telefone.message}</span>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-muted-foreground">E-mail</label>
                <input 
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
                {errors.email && <span className="text-destructive text-xs">{errors.email.message}</span>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="mensagem" className="text-sm text-muted-foreground">Mensagem (Opcional)</label>
              <textarea 
                id="mensagem"
                rows={4}
                {...register("mensagem")}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Descreva brevemente seu caso..."
              />
              {errors.mensagem && <span className="text-destructive text-xs">{errors.mensagem.message}</span>}
            </div>

            <ButtonPremium className="w-full" type="submit" disabled={isSubmitting} icon>
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </ButtonPremium>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
