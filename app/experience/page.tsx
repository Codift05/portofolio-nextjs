type Experience = { period: string; title: string; org: string };

const experiences: Experience[] = [
  { period: "2023–2025", title: "Organisasi UKM GENIA", org: "UNSRAT" },
  { period: "2023–2024", title: "Beasiswa KSE", org: "Karya Salemba Empat" },
  { period: "2024", title: "Mahkota", org: "Company Profile & Website" },
  { period: "2024", title: "BTU UNSRAT", org: "Proyek internal" },
];

export default function ExperiencePage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Pengalaman & Organisasi</h1>
      <div className="mt-8 space-y-4">
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
    </section>
  );
}