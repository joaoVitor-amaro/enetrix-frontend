import React from "react";
import EnetrixLogo from "../EnetrixLogo";
import { NAVY } from "../../theme";

export default function ChatHeader({ onBack }) {
  return (
    <header className="border-b border-neutral-200 bg-white px-4 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0">
      <div className="flex items-center gap-3">
        <EnetrixLogo size={40} />
        <div className="leading-tight">
          <div className="text-[#1B2E52] text-base font-bold tracking-wide">
            ENETRIX
          </div>
          <div className="text-[#1B2E52] text-[10px] font-medium tracking-[0.18em]">
            ENERGY TREATIES MATRIX
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition"
      >
        <span aria-hidden="true">←</span>
        Voltar
      </button>
    </header>
  );
}
