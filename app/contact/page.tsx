import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Kontak & Sosial Media</h1>
      <p className="mt-4 text-muted-foreground">Temukan aku di platform berikut atau kirim pesan singkat.</p>

      <div className="mt-6 flex gap-3">
        <Button asChild variant="outline"><Link href="https://www.linkedin.com/" target="_blank">LinkedIn</Link></Button>
        <Button asChild variant="outline"><Link href="https://github.com/" target="_blank">GitHub</Link></Button>
        <Button asChild variant="outline"><Link href="https://instagram.com/" target="_blank">Instagram</Link></Button>
      </div>

      <form className="mt-10 space-y-3">
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
    </section>
  );
}