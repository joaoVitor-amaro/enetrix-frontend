import React from "react";
import { NAVY } from "../../theme";

export default function MessageInput({
  value,
  onChange,
  onSend,
  status = "idle",
  onRetry,
}) {
  const isEmpty = value.trim().length === 0;
  const isLoading = status === "loading";
  const isError = status === "error";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmpty && !isLoading) {
      onSend();
    }
  };

  return (
    <div className="border-t border-neutral-200 bg-white px-4 sm:px-8 py-4">
      {isError && (
        <div className="mb-2 flex items-center justify-between rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs text-red-600">
          <span>Não foi possível enviar sua mensagem.</span>
          <button
            type="button"
            onClick={onRetry}
            className="font-semibold underline underline-offset-2 hover:text-red-700"
          >
            Tentar novamente
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 sm:gap-3 rounded-full border border-neutral-300 bg-white px-3 sm:px-4 py-2 focus-within:border-[#1B2E52] transition"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Digite sua mensagem..."
          disabled={isLoading}
          className="flex-1 min-w-0 text-sm outline-none placeholder:text-neutral-400 disabled:opacity-60"
        />

        <button
          type="submit"
          disabled={isEmpty || isLoading}
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full text-white transition disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ backgroundColor: NAVY }}
          aria-label="Enviar mensagem"
        >
          {isLoading ? (
            <svg
              className="animate-spin"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="white"
                strokeWidth="2.5"
                strokeOpacity="0.3"
              />
              <path
                d="M21 12a9 9 0 0 0-9-9"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 20l16-8L4 4v6l10 2-10 2v6z" fill="white" />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
}