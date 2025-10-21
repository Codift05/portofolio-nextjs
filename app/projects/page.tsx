"use client";
import Image from "next/image";
// removed: import { useI18n } from "@/components/i18n";

const projects = [
  {
    title: "AI Resume Parser",
    desc: "Automatically extract key information from resumes using ML.",
    image: "/image/projects/resume-parser.png",
  },
  {
    title: "Portfolio Web",
    desc: "Personal portfolio showcasing projects and certificates.",
    image: "/image/projects/portfolio.png",
  },
  {
    title: "E-commerce Dashboard",
    desc: "Admin panel for managing products, orders, and analytics.",
    image: "/image/projects/ecommerce.png",
  },
];

export default function ProjectsPage() {
  // removed i18n hook
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {projects.map((p) => (
          <div key={p.title} className="rounded-xl border border-border bg-card/60 backdrop-blur p-4">
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
              <Image src={p.image} alt={p.title} width={640} height={360} className="w-full h-full object-cover" />
            </div>
            <h3 className="mt-3 text-slate-900 font-semibold">{p.title}</h3>
            <p className="mt-1 text-slate-700 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}