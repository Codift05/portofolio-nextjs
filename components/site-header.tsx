"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function SiteHeader() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = ["about", "projects", "experience", "certificates", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.15 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `transition-colors hover:text-primary ${active === id ? "text-primary" : "text-muted-foreground"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Mif
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#about" className={linkClass("about")}>
            About
          </Link>
          <Link href="/#projects" className={linkClass("projects")}>
            Projects
          </Link>
          <Link href="/#experience" className={linkClass("experience")}>
            Experience
          </Link>
          <Link href="/#certificates" className={linkClass("certificates")}>
            Certificates
          </Link>
          <Link href="/#contact" className={linkClass("contact")}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="https://github.com/" target="_blank" aria-label="GitHub">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}