import React, { useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";

export default function ConversationArea({ messages, isLoadingHistory = false }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto min-h-0 px-4 sm:px-8 py-6 flex flex-col gap-5 bg-white">
      {isLoadingHistory && (
        <p className="text-sm text-neutral-400 text-center mt-8">
          Carregando histórico da conversa
        </p>
      )}

      {!isLoadingHistory && messages.length === 0 && (
        <p className="text-sm text-neutral-400 text-center mt-8">
          Envie uma mensagem para iniciar a conversa com o chat
        </p>
      )}

      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          sender={msg.sender}
          text={msg.text}
          time={msg.time}
        />
      ))}

      <div ref={bottomRef} />
    </div>
  );
}