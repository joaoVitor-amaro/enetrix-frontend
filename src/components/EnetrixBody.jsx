import React from "react";
import InfoSection from "./InfoSection";

export default function EnetrixBody() {
  return (
    <main className="flex-1 bg-[#eeece7] flex justify-center px-7 pt-7 pb-2">
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <InfoSection title="O que é Enetrix?">
          Uma inovação tecnológica aplicada à análise de iniciativas de
          cooperação entre países e organizações internacionais no campo
          energético. Uma solução baseada no mapeamento de acordos e
          capacidade, reunindo informações de mais de 35 países e 10
          organizações transnacionais.
        </InfoSection>

        <InfoSection title="Quem se beneficia?">
          As informações detalhadas da Enetrix beneficiam pesquisadores,
          organizações, governos e diplomatas na tomada de decisões
          nacionais e internacionais, reunindo dados de fontes
          especializadas, como a imprensa e as mídias sociais, em um único
          ambiente.
        </InfoSection>
      </div>
    </main>
  );
}
