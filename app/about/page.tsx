import Image from "next/image";

export default function AboutPage() {
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

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Tentang Miftah</h1>
      <p className="mt-4 text-muted-foreground">
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
              "radial-gradient(500px 200px at 25% 35%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(500px 200px at 75% 70%, rgba(139,92,246,0.18), transparent 60%)",
          }}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {iconList.map((icon) => (
            <div
              key={icon.label}
              className="group relative rounded-xl border border-border bg-card/60 backdrop-blur p-4 flex items-center justify-center overflow-hidden"
            >
              {/* Glow per-card on hover */}
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
    </section>
  );
}