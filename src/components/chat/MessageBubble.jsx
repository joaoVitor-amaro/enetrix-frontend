import { NAVY } from "../../theme";

export default function MessageBubble({ sender, text, time }) {
  const isUser = sender === "user";

  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
      <div
        className={`flex items-baseline gap-2 mb-1 ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <span className="text-xs font-semibold text-neutral-700">
          {isUser ? "Você" : "ENETRIX"}
        </span>
        <span className="text-[11px] text-neutral-400">{time}</span>
      </div>

      <div
        className={`max-w-[85%] sm:max-w-[70%] px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
          isUser
            ? "text-white rounded-2xl rounded-tr-sm"
            : "bg-neutral-100 text-neutral-800 rounded-2xl rounded-tl-sm"
        }`}
        style={isUser ? { backgroundColor: NAVY } : undefined}
      >
        {text}
      </div>
    </div>
  );
}
