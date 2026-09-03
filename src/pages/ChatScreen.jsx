import React, { useState, useEffect } from "react";
import ChatHeader from "../components/chat/ChatHeader";
import ChatTitle from "../components/chat/ChatTitle";
import ConversationArea from "../components/chat/ConversationArea";
import SessionHistory from "../components/chat/SessionHistory";
import MessageInput from "../components/chat/MessageInput";

const initialMessages = [];
const SESSION_ID = "sessao-atual";

function formatTime(isoString) {
  return new Date(isoString).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ChatScreen({ onBack }) {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("idle");
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function loadHistory() {
      try {
        const response = await fetch(
          `http://localhost:3001/history?session_id=${SESSION_ID}`
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar histórico");
        }

        const records = await response.json();

        const restoredMessages = records.flatMap((record, index) => [
          {
            id: `${record.timestamp}-user-${index}`,
            sender: "user",
            text: record.message,
            time: formatTime(record.timestamp),
          },
          {
            id: `${record.timestamp}-bot-${index}`,
            sender: "bot",
            text: record.response,
            time: formatTime(record.timestamp),
          },
        ]);

        if (isActive) {
          setMessages(restoredMessages);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (isActive) {
          setIsLoadingHistory(false);
        }
      }
    }

    loadHistory();

    return () => {
      isActive = false;
    };
  }, []);

  const handleSend = async () => {
    if (!inputValue.trim() || status === "loading") return;

    const currentText = inputValue;
    const timeString = new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: currentText,
      time: timeString,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentText,
          session_id: SESSION_ID,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro na resposta do servidor");
      }

      const data = await response.json();
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.response,
        time: new Date(data.timestamp).toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
      setStatus("idle");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleRetry = () => {
    setStatus("idle");
  };

  return (
    <div className="h-screen w-full flex flex-col bg-white font-sans overflow-hidden">
      <ChatHeader onBack={onBack} />
      <ChatTitle />

      <div className="flex-1 flex flex-col lg:flex-row min-h-0">
        <div className="flex-1 flex flex-col min-h-0">
          <ConversationArea
            messages={messages}
            isLoadingHistory={isLoadingHistory}
          />
          <MessageInput
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSend}
            status={status}
            onRetry={handleRetry}
          />
        </div>

        <SessionHistory messages={messages} />
      </div>
    </div>
  );
}