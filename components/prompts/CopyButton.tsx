"use client";

import { useState } from "react";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

    async function handleCopy() {
    try {
        if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;

        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";

        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        document.execCommand("copy");

        document.body.removeChild(textArea);
        }

        setCopied(true);

        setTimeout(() => {
        setCopied(false);
        }, 2000);
    } catch (error) {
        console.error("Copy failed:", error);
        alert("Copy failed. Please check the browser console.");
    }
    }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center rounded-xl bg-gradient-to-r from-green-600 to-green-800 px-6 py-3 font-semibold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-green-500/50"
    >
      {copied ? "✅ Copied!" : "📋 Copy Prompt"}
    </button>
  );
}