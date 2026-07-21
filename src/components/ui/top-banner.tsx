"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export function TopBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full bg-[#051320] border-b border-primary/20 text-center py-2 px-4 flex items-center justify-center gap-2 overflow-hidden z-[60]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <AlertCircle className="w-4 h-4 text-primary shrink-0 relative z-10" />
      <span className="text-xs md:text-sm font-medium text-white tracking-wide relative z-10">
        <strong className="text-primary font-semibold">Prontidão 24h</strong> para urgências e prisões em flagrante. Atendimento imediato.
      </span>
    </motion.div>
  );
}
