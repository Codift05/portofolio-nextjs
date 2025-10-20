"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import type { MouseEvent } from "react";
import Typewriter from "@/components/typewriter";
import NeonGrid from "@/components/neon-grid";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Github, Linkedin, Instagram } from "lucide-react";

type SectionProps = { id: string; title: string; children: React.ReactNode };
function Section({ id, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6">
        {children}
      </div>
    </motion.section>
  );
}

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "TensorFlow",
  "Figma",
  "Node.js",
];
// Tambah pemetaan ikon untuk skill yang tersedia di public/image/icon
const skillIcons: Record<string, string> = {
  React: "/image/icon/ReactJS.png",
  "Next.js": "/image/icon/NextJS.png",
  TypeScript: "/image/icon/Typescript.png",
  Python: "/image/icon/Python.png",
  Figma: "/image/icon/Figma.png",
  "Node.js": "/image/icon/NodeJS.png",
};

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

type Experience = { period: string; title: string; org: string };
const experiences: Experience[] = [
  { period: "2023–2025", title: "Organisasi UKM GENIA", org: "UNSRAT" },
  { period: "2023–2024", title: "Beasiswa KSE", org: "Karya Salemba Empat" },
  { period: "2024", title: "Mahkota", org: "Company Profile & Website" },
  { period: "2024", title: "BTU UNSRAT", org: "Proyek internal" },
];

const certificates = ["BNSP", "Huawei", "Alibaba Cloud"];

// Daftar ikon dari public/image/icon
const iconList: { label: string; src: string }[] = [
  { label: "Figma", src: "/image/icon/Figma.png" },
  { label: "Jupyter", src: "/image/icon/Jupyter.png" },
  { label: "Laravel", src: "/image/icon/Laravel.jpg" },
  { label: "MySQL", src: "/image/icon/MySQL.png" },
  { label: "NextJS", src: "/image/icon/NextJS.png" },
  { label: "NodeJS", src: "/image/icon/NodeJS.png" },
  { label: "PHP", src: "/image/icon/PHP.png" },
  { label: "Python", src: "/image/icon/Python.png" },
  { label: "ReactJS", src: "/image/icon/ReactJS.png" },
  { label: "Typescript", src: "/image/icon/Typescript.png" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.85]);
  const galleryY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const galleryScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  // Springs untuk efek yang lebih halus
  const sGlowY = useSpring(glowY, { stiffness: 80, damping: 20 });
  const sGlowY2 = useSpring(glowY2, { stiffness: 80, damping: 20 });
  const sGlowOpacity = useSpring(glowOpacity, { stiffness: 70, damping: 18 });
  const sGalleryY = useSpring(galleryY, { stiffness: 120, damping: 24 });
  const sGalleryScale = useSpring(galleryScale, { stiffness: 200, damping: 28 });
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--x", `${x}px`);
    event.currentTarget.style.setProperty("--y", `${y}px`);
  };
  return (
    <div>
    <section className="relative min-h-[calc(100vh-72px)] px-6 py-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full z-10 text-center">
        {/* Headline seperti referensi */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight"
        >
          I'm <span className="text-primary">Miftahuddin S. Arsyad</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-2 text-2xl sm:text-4xl font-semibold neon-text"
        >
          Full Stack Developer
        </motion.h2>

        {/* Foto kotak di bawah headline, center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto mt-10 w-fit"
        >
          {/* Parallax glow belakang */}
          <motion.div
            aria-hidden
            className="absolute -inset-12 rounded-2xl bg-gradient-to-tr from-primary/50 via-violet-500/40 to-cyan-400/40 blur-3xl"
            style={{ y: sGlowY, opacity: sGlowOpacity }}
          />
          <motion.div
            aria-hidden
            className="absolute -inset-24 rounded-3xl bg-gradient-to-br from-cyan-400/30 via-sky-400/20 to-violet-500/30 blur-2xl"
            style={{ y: sGlowY2, opacity: sGlowOpacity }}
          />
          <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-xl overflow-hidden border border-border shadow-2xl">
            {/* Overlay gradasi di dalam kotak */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-violet-500/20 to-cyan-400/20 mix-blend-soft-light pointer-events-none" aria-hidden />
            {/* Shapes dekoratif */}
            <motion.div
              className="absolute left-4 top-4 w-20 h-20 rounded-[28%] bg-gradient-to-br from-violet-500/50 to-cyan-400/50 blur-xl opacity-50 mix-blend-soft-light pointer-events-none"
              aria-hidden
              style={{ y: sGlowY }}
            />
            <div className="absolute right-4 bottom-4 w-14 h-14 rounded-full border border-primary/40 opacity-60 mix-blend-soft-light pointer-events-none" aria-hidden />
            <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(45deg,rgba(56,189,248,0.15)_0px,rgba(56,189,248,0.15)_2px,transparent_2px,transparent_8px)] pointer-events-none" aria-hidden />
            <Image
              src="/image/mip4.png"
              alt="Foto Miftah"
              fill
              priority
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
              className="object-cover object-center"
            />
            {/* Tombol overlay "My Projects" */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4">
              <Button asChild size="sm" className="bg-lime-400 text-black hover:bg-lime-300 shadow-md">
                <Link href="/#projects">My Projects</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Badges kiri/kanan melayang */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="hidden md:block"
        >
          <div className="pointer-events-none">
            {/* Kiri: Review */}
            <div className="absolute left-10 top-1/3 -rotate-6 rounded-xl border border-border bg-card/70 backdrop-blur p-4 shadow-lg">
              <div className="text-sm">Client Review From Australia</div>
              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <span>⭐ 5.0</span>
                <span>• 30+ feedback</span>
              </div>
            </div>
            {/* Kanan: Expertise */}
            <div className="absolute right-10 top-1/3 rotate-6 rounded-xl border border-border bg-card/70 backdrop-blur p-4 shadow-lg">
              <div className="text-sm">My Expertise</div>
              <div className="mt-2 space-y-2">
                <div className="text-xs text-muted-foreground">Backend</div>
                <div className="h-1.5 w-40 rounded bg-gradient-to-r from-primary to-primary/20" />
                <div className="text-xs text-muted-foreground">CMS</div>
                <div className="h-1.5 w-32 rounded bg-gradient-to-r from-violet-500 to-violet-500/20" />
                <div className="text-xs text-muted-foreground">Frontend</div>
                <div className="h-1.5 w-48 rounded bg-gradient-to-r from-cyan-400 to-cyan-400/20" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA tambahan */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button asChild className="bg-primary text-primary-foreground hover:shadow-[0_0_24px_rgba(56,189,248,0.6)]">
              <Link href="/#projects">
                <ArrowRight className="mr-2 h-4 w-4" /> View Projects
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button asChild variant="outline" className="hover:bg-primary/10">
              <Link href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <NeonGrid />
    </section>



    {/* About */}
    <Section id="about" title="Tentang Miftah">
      <p className="text-muted-foreground max-w-3xl">
        Mahasiswa Teknik Informatika Universitas Sam Ratulangi. Berfokus pada pengembangan web,
        eksplorasi Machine Learning, dan desain antarmuka yang human-centered.
      </p>
      <div className="relative mt-8">
        {/* Glow background grid */}
        <div
          aria-hidden
          className="absolute -inset-6 rounded-3xl blur-2xl opacity-40"
          style={{
            background:
              "radial-gradient(500px 200px at 20% 30%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(500px 200px at 80% 70%, rgba(139,92,246,0.18), transparent 60%)",
          }}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {iconList.map((icon) => (
            <div
              key={icon.label}
              className="group relative rounded-xl border border-border bg-card/60 backdrop-blur p-4 flex items-center justify-center overflow-hidden"
            >
              {/* Glow per-card saat hover */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(80px 80px at 50% 50%, rgba(56,189,248,0.22), transparent 60%)",
                }}
              />
              <Image
                src={icon.src}
                alt={icon.label}
                width={44}
                height={44}
                className="relative z-10 w-11 h-11 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Projects */}
    <Section id="projects" title="Proyek Pilihan">
      <div className="snap-y snap-mandatory">
        {projectImages.map((src, i) => (
          <section key={src} className="relative w-full h-screen snap-start flex items-center justify-center">
            <motion.div
              onMouseMove={handleMouseMove}
              className="group relative isolate max-w-6xl w-[92vw] md:h-[85vh] h-[70vh] min-h-[380px] p-4 sm:p-6 rounded-[32px] border border-border bg-card/60 backdrop-blur overflow-hidden shadow-xl transition-all duration-200 hover:shadow-[0_0_36px_rgba(56,189,248,0.28)] hover:border-primary/60"
              style={{ y: sGalleryY, scale: sGalleryScale }}
            >
              <div
                className="relative w-full h-full rounded-[32px] overflow-hidden"
                style={{ clipPath: "inset(0 round 32px)" }}
              >
                <Image
                  src={src}
                  alt={`Project ${i + 1}`}
                  fill
                  className="md:object-cover object-contain object-center rounded-[32px]"
                  sizes="100vw"
                  priority={i === 0}
                />
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-soft-light"
                  style={{
                    background:
                      "radial-gradient(200px 200px at var(--x, 50%) var(--y, 50%), rgba(147, 197, 253, 0.32), transparent 55%)",
                  }}
                />
              </div>
            </motion.div>
          </section>
        ))}
      </div>
    </Section>

    {/* Experience */}
    <Section id="experience" title="Pengalaman & Organisasi">
      <div className="space-y-4">
        {experiences.map((e, i) => (
          <div key={i} className="relative pl-6">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
            <div className="rounded-xl border border-border bg-card/60 backdrop-blur p-4">
              <div className="text-sm text-muted-foreground">{e.period}</div>
              <div className="font-medium">{e.title}</div>
              <div className="text-sm">{e.org}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Certificates */}
    <Section id="certificates" title="Sertifikasi">
      <ul className="grid sm:grid-cols-2 gap-4">
        {certificates.map((c) => (
          <li key={c} className="rounded-xl border border-border bg-card/60 backdrop-blur p-4">
            <span className="font-medium">{c}</span>
          </li>
        ))}
      </ul>
    </Section>

    {/* Contact */}
    <Section id="contact" title="Kontak & Sosial Media">
      <p className="text-muted-foreground">Temukan aku di platform berikut atau kirim pesan singkat.</p>
      <div className="mt-6 flex gap-3">
        <Button asChild variant="outline"><Link href="https://www.linkedin.com/" target="_blank">LinkedIn</Link></Button>
        <Button asChild variant="outline"><Link href="https://github.com/" target="_blank">GitHub</Link></Button>
        <Button asChild variant="outline"><Link href="https://instagram.com/" target="_blank">Instagram</Link></Button>
      </div>
      <form className="mt-10 space-y-3 max-w-xl">
        <div>
          <label className="text-sm" htmlFor="name">Nama</label>
          <input id="name" name="name" type="text" className="mt-1 w-full rounded-lg bg-card/60 backdrop-blur border border-border px-3 py-2" placeholder="Nama kamu" />
        </div>
        <div>
          <label className="text-sm" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="mt-1 w-full rounded-lg bg-card/60 backdrop-blur border border-border px-3 py-2" placeholder="email@contoh.com" />
        </div>
        <div>
          <label className="text-sm" htmlFor="message">Pesan</label>
          <textarea id="message" name="message" className="mt-1 w-full rounded-lg bg-card/60 backdrop-blur border border-border px-3 py-2 h-28" placeholder="Tulis pesanmu..." />
        </div>
        <Button type="submit" className="bg-primary text-primary-foreground hover:shadow-[0_0_24px_rgba(56,189,248,0.6)]">Kirim</Button>
      </form>
    </Section>
    </div>
  );
}
