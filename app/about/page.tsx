"use client";
import Image from "next/image";
// removed: import { useI18n } from "@/components/i18n";

export default function AboutPage() {
  // removed i18n hook
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Tentang</h1>
      <div className="mt-6 grid lg:grid-cols-2 gap-6 items-start">
        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6">
          <h2 className="text-lg font-semibold text-slate-900">Bio</h2>
          <p className="mt-2 text-slate-700 leading-relaxed">
            Halo! Saya Miftahuddin S. Arsyad , seorang Software Engineer yang berfokus pada pengembangan web dan mobile, serta memiliki ketertarikan besar pada eksplorasi Machine Learning.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6">
          <h2 className="text-lg font-semibold text-slate-900">Keahlian</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-2">
            <div className="rounded-lg border border-border p-3">
              <p className="text-sm text-slate-900 font-medium">Backend</p>
              <div className="mt-2 h-2 bg-slate-100 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-[80%]" />
              </div>
            </div>
            <div className="rounded-lg border border-border p-3">
              <p className="text-sm text-slate-900 font-medium">Machine Learning</p>
              <div className="mt-2 h-2 bg-slate-100 rounded-full">
                <div className="h-2 bg-purple-500 rounded-full w-[70%]" />
              </div>
            </div>
            <div className="rounded-lg border border-border p-3">
              <p className="text-sm text-slate-900 font-medium">Frontend</p>
              <div className="mt-2 h-2 bg-slate-100 rounded-full">
                <div className="h-2 bg-indigo-500 rounded-full w-[65%]" />
              </div>
            </div>
            <div className="rounded-lg border border-border p-3">
              <p className="text-sm text-slate-900 font-medium">DevOps</p>
              <div className="mt-2 h-2 bg-slate-100 rounded-full">
                <div className="h-2 bg-emerald-500 rounded-full w-[55%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card/60 backdrop-blur p-6">
        <h2 className="text-lg font-semibold text-slate-900">Kontak</h2>
        <p className="mt-2 text-slate-700">
          Saya terbuka untuk kolaborasi. Hubungi saya melalui platform di bawah ini.
        </p>
      </div>
    </section>
  );
}