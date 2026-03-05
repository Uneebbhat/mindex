"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusIcon, SendIcon } from "lucide-react";

const TRANSCRIPT_TEXT = `rules are great, it's better to put speakers where they fit and then correct them to get the sound that you want. As an example, a square is clearly not a circle, but with a little bit of cutting off here or boosting there, you may actually be able to get it pretty close. Other amplifiers such as the SPA 1200 DSP even have the ability to measure the room and automatically self-adjust. But however you use it, DSP can take something like this and make it sound better.`;

type Message = { role: "user" | "assistant"; text: string };

const INITIAL_MESSAGES: Message[] = [
  { role: "user", text: "Can you give a summary in 5-6 lines." },
  {
    role: "assistant",
    text: "DSP (Digital Signal Processing) is software that processes a digital input signal into a different one, generally to fix problems or enhance sound. It's commonly used for tasks like adding delay for even sound distribution or directing specific frequencies to tweeters, woofers, or subwoofers. Most notably, DSP functions as an equalizer for your room.",
  },
];

export default function CreateConnection() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Let me look into that for you…" },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Responsive grid container with internal scroll on desktop, header remains visible */}
      <div className="flex flex-col md:grid md:grid-cols-3 h-full min-h-0 overflow-hidden">

        {/* LEFT SIDE — scrollable content area with its own scrollbar */}
        <div className="md:col-span-2 overflow-y-auto md:pr-4 min-h-0 flex-1 flex flex-col">
          <div className="w-full aspect-video h-80 mt-4">
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.youtube.com/embed/lyOiuYHl0SI"
              title="YouTube video player"
              allowFullScreen
            />
          </div>

          <div className="mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 gap-2">
              <h2 className="font-semibold text-base">Transcript</h2>
              <Button variant="secondary" size="sm" className="w-fit self-end sm:self-auto">
                <PlusIcon className="mr-1 h-4 w-4" />
                Add Tags
              </Button>
            </div>

            <Separator />

            <div className="px-4 py-3 text-sm text-gray-700 leading-relaxed">
              <p>{TRANSCRIPT_TEXT}</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — fixed-height panel on desktop, input pinned to bottom */}
        <div className="border-t md:border-t-0 md:border-l flex flex-col md:h-full min-h-0 w-full md:w-auto md:max-w-full md:flex-[0_0_1px] bg-white">
          {/* CHAT MESSAGES — scrolls independently */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.map((msg, idx) => (
              <p
                key={idx}
                className={`px-3 py-2 rounded-lg text-sm max-w-[90%] ${msg.role === "user"
                  ? "bg-black text-white ml-auto"
                  : "bg-gray-100 text-gray-900 mr-auto"
                  }`}
              >
                {msg.text}
              </p>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* INPUT — always visible at the bottom of the viewport */}
          <div className="border-t p-4 flex items-center gap-2 shrink-0 bg-white">
            <Input
              type="text"
              placeholder="Ask about this video..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button size="icon" onClick={handleSend}>
              <SendIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

