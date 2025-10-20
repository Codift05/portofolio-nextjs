import Image from "next/image";

const certificatesImages: { label: string; src: string }[] = [
  { label: "Sertif BNSP", src: "/image/certificate/Sertif BNSP.jpg" },
  { label: "Sertif Huawei", src: "/image/certificate/Sertif Huawei.jpg" },
  { label: "Sertif Cloud", src: "/image/certificate/Sertif Cloud.jpg" },
];

export default function CertificatesPage() {
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
              className="group relative rounded-xl border border-border bg-card/60 backdrop-blur p-3 sm:p-4 overflow-hidden"
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
    </section>
  );
}