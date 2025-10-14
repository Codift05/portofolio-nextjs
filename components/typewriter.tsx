"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  typingSpeed?: number; // ms per character
  deletingSpeed?: number;
  pauseTime?: number; // ms pause after full word
  className?: string;
};

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 900,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    if (subIndex === words[index].length && !deleting) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {words[index]?.substring(0, subIndex)}
      <span className="ml-1 text-primary">|</span>
    </span>
  );
}