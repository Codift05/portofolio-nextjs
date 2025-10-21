"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificatesImages: { label: string; src: string }[] = [
  { label: "Sertif BNSP", src: "/image/certificate/Sertif BNSP.jpg" },
  { label: "Sertif Huawei", src: "/image/certificate/Sertif Huawei.jpg" },
  { label: "Sertif Cloud", src: "/image/certificate/Sertif Cloud.jpg" },
];

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Sertifikasi</h1>
      <div className="relative mt-6">
        {/* Glow background */}
        <div
          aria-hidden
          className="absolute -inset-6 rounded-3xl blur-2xl opacity-40"
          style={{
            background:
              "radial-gradient(500px 200px at 20% 30%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(500px 200px at 80% 70%, rgba(139,92,246,0.18), transparent 60%)",
          }}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificatesImages.map((item) => (
            <div
              key={item.label}
              onClick={() => setSelectedCert(item.src)}
              className="group relative rounded-xl border border-slate-200/30 bg-white p-3 sm:p-4 overflow-hidden cursor-pointer"
            >
              {/* Glow per-card */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(120px 120px at 50% 50%, rgba(56,189,248,0.22), transparent 60%)",
                }}
              />
              <div className="relative z-10 aspect-video w-full">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative w-full sm:max-w-2xl lg:max-w-3xl mx-4 bg-white rounded-xl border border-slate-200/30 shadow-2xl p-4 max-h-[80vh] overflow-hidden"
              initial={{ scale: 0.98, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-slate-900 font-semibold">Detail Sertifikat</h3>
                <button
                  className="px-3 py-1.5 text-sm rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700"
                  onClick={() => setSelectedCert(null)}
                >
                  Tutup
                </button>
              </div>
              <div className="rounded-lg border border-slate-200/30 overflow-auto">
                <Image src={selectedCert} alt="Sertifikat" width={1200} height={800} className="w-full h-auto max-h-[70vh] object-contain bg-white" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}