import React from "react";

export default function SessionHistory({ messages }) {
  return (
    <aside className="lg:w-72 xl:w-80 shrink-0 bg-[#f7f7f5] border-t lg:border-t-0 lg:border-l border-neutral-200 px-5 py-5 lg:py-6 overflow-y-auto">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
        Histórico da sessão
      </h3>

      <ul className="flex flex-col gap-2.5">
        {messages.map((msg) => (
          <li
            key={msg.id}
            className="text-xs text-neutral-600 flex gap-2 items-start"
          >
            <span className="text-neutral-400 shrink-0 tabular-nums">
              {msg.time}
            </span>
            <span className="truncate">{msg.text}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
