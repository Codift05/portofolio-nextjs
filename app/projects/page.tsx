"use client";
import Image from "next/image";
import type { MouseEvent } from "react";

const projectImages = [
  "/image/project/5.png",
  "/image/project/6.png",
  "/image/project/7.png",
  "/image/project/8.png",
  "/image/project/9.png",
  "/image/project/10.png",
  "/image/project/11.png",
  "/image/project/12.png",
  "/image/project/13.png",
  "/image/project/14.png",
  "/image/project/15.png",
  "/image/project/16.png",
  "/image/project/17.png",
  "/image/project/18.png",
  "/image/project/19.png",
  "/image/project/20.png",
  "/image/project/21.png",
];

export default function ProjectsPage() {
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--x", `${x}px`);
    event.currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <main className="w-full">
      <h1 className="px-6 pt-10 text-2xl sm:text-3xl font-semibold">Proyek Pilihan</h1>
      <div className="snap-y snap-mandatory">
        {projectImages.map((src, i) => (
          <section key={src} className="relative w-full h-screen snap-start flex items-center justify-center">
            <div
              onMouseMove={handleMouseMove}
              className="group relative max-w-6xl w-[92vw] h-[85vh] rounded-3xl border border-border bg-card/60 backdrop-blur overflow-hidden shadow-xl"
            >
              <Image
                src={src}
                alt={`Project ${i + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority={i === 0}
              />
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 mix-blend-soft-light"
                style={{
                  background:
                    "radial-gradient(240px 240px at var(--x, 50%) var(--y, 50%), rgba(147, 197, 253, 0.35), transparent 60%)",
                }}
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}