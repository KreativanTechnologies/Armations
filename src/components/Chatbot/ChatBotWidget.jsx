'use client';
import React, { useState } from "react";
import { MessageCircle, Send, ChevronLeft, X } from "lucide-react";
import Link from "next/link";

const ChatBotWidget = () => {
  const predefinedQuestions = [
    "What services do you provide?",
    "What is your mission?",
    "Where are you located?",
    "How can I get a quote?",
    "Do you offer IoT solutions?"
  ];

  const answers = {
    "What services do you provide?":
      "We provide Electrical, IoT, SCADA, AI, Automation, and Instrumentation solutions.",
    "What is your mission?":
      "Our mission is to deliver end-to-end smart solutions that empower industries, living, and enterprises.",
    "Where are you located?":
      "We are located globally, with headquarters in India.",
    "How can I get a quote?":
      "You can request a quote by contacting us through our website's Contact Us page.",
    "Do you offer IoT solutions?":
      "Yes! We specialize in advanced IoT solutions for various industries.",
  };

  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(null);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Welcome to Aarmation Electric! How can we help you?" }
  ]);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const sendMessage = (msg) => {
    if (!msg.trim()) return;

    const userMessage = { from: "user", text: msg };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      if (answers[msg]) {
        setMessages((prev) => [...prev, { from: "bot", text: answers[msg] }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: (
              <span>
                ❓ We couldn't find an answer. Please{" "}
                <Link href="/contact" className="text-blue-500 underline font-medium">
                  connect with us here
                </Link>.
              </span>
            ),
          },
        ]);
      }
    }, 500);
    setInput("");
  };

  const sendFeedback = () => {
    if (!feedback.trim()) return;
    alert("✅ Thank you for your feedback!");
    setFeedback("");
    setIsOpen(false);
    setMode(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-red-500 to-pink-500 hover:scale-110 transform transition p-4 rounded-full shadow-xl"
        >
          <MessageCircle size={28} color="#fff" />
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="w-80 h-[440px] bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col border border-gray-200 animate-[fadeIn_0.3s_ease-in-out]">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 flex justify-between items-center rounded-t-2xl shadow-md">
            <div className="flex items-center gap-2">
              {mode && (
                <button
                  onClick={() => setMode(null)}
                  className="p-1 hover:bg-white/20 rounded-full"
                >
                  <ChevronLeft size={20} />
                </button>
              )}
              <span className="font-semibold">
                {mode === null && "Aarmation Support"}
                {mode === "chat" && "💬 Chat with Bot"}
                {mode === "feedback" && "📝 Send Feedback"}
              </span>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setMode(null);
              }}
              className="p-1 hover:bg-white/20 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mode Selection */}
          {mode === null && (
            <div className="flex-1 flex flex-col justify-center items-center gap-4 p-6">
              <button
                onClick={() => setMode("chat")}
                className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-md font-medium transition"
              >
                💬 Chat with Bot
              </button>
              <button
                onClick={() => setMode("feedback")}
                className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white shadow-md font-medium transition"
              >
                📝 Send Feedback
              </button>
            </div>
          )}

          {/* Chat Mode */}
          {mode === "chat" && (
            <>
              <div className="p-2 border-b bg-gray-50 flex flex-wrap gap-2">
                {predefinedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => sendMessage(q)}
                    className="bg-gray-200 hover:bg-gray-300 text-black text-xs px-2 py-1 rounded-lg transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`px-3 py-2 rounded-xl max-w-[80%] shadow ${
                      msg.from === "bot"
                        ? "bg-gray-200 text-gray-800"
                        : "bg-red-500 text-white ml-auto"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="p-2 border-t flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 border rounded-lg px-3 py-2 text-black text-sm outline-none"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                />
                <button
                  onClick={() => sendMessage(input)}
                  className="bg-gradient-to-r from-red-500 to-pink-500 hover:bg-red-600 text-white p-2 rounded-lg shadow"
                >
                  <Send size={18} />
                </button>
              </div>
            </>
          )}

          {/* Feedback Mode */}
          {mode === "feedback" && (
            <div className="flex-1 flex flex-col p-3">
              <textarea
                className="border rounded-lg p-3 text-black text-sm flex-1 outline-none resize-none shadow-inner"
                placeholder="Write your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button
                onClick={sendFeedback}
                className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow font-medium transition"
              >
                ✅ Submit Feedback
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBotWidget;
