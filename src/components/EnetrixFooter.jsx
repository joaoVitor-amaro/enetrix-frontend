import React from "react";
import { NAVY } from "../theme";

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path
        d="M4 4h16v12H8l-4 4V4z"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function EnetrixFooter({ onStart }) {
  return (
    <footer className="bg-[#eeece7] flex justify-center px-7 pb-7 pt-4">
      <button
        onClick={onStart}
        className="w-full max-w-2xl flex items-center justify-center gap-2.5 rounded-full py-3.5 px-6 text-white text-[15px] font-medium shadow-lg shadow-[#14233F]/30 hover:opacity-95 active:scale-[0.99] transition"
        style={{ backgroundColor: NAVY }}
      >
        <ChatIcon />
        Iniciar atendimento
      </button>
    </footer>
  );
}
