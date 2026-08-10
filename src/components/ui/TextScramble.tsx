"use client";
import React, { useEffect, useState } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
}

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const TextScramble: React.FC<TextScrambleProps> = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startScramble = () => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) return text[index];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 2;
      }, 30);
    };

    startScramble();
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};