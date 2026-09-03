import React from "react";
import EnetrixLogo from "./EnetrixLogo";

export default function EnetrixHeader() {
  return (
    <header className="border-t-4 border-[#3182CE] border-b border-neutral-200 px-4 sm:px-6 py-6 flex justify-center bg-white w-full">
      <div className="w-full max-w-2xl flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-8">
        <div className="shrink-0 max-w-[120px] sm:max-w-none">
          <EnetrixLogo size={140} />
        </div>
        <h2 className="text-sm sm:text-base text-[#4B6B94] font-normal max-w-xs text-center sm:text-left leading-relaxed">
          Plataforma de Registro, Monitoramento e Análise de Acordos Internacionais relacionados à Energia.
        </h2>
      </div>
    </header>
  );
}