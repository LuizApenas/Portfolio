"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ text, label = "Copiar" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar:", err);
    }
  };

  return (
    <button
      className={`copy-btn ${copied ? "copied" : ""}`}
      onClick={handleCopy}
      type="button"
      title={`Copiar ${text}`}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      <span>{copied ? "Copiado!" : label}</span>
    </button>
  );
}
