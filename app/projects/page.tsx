type Project = { title: string; summary: string };

const projects: Project[] = [
  { title: "Greenify App", summary: "Smart Waste Reporting" },
  { title: "AmanBersuara", summary: "Safe Space for Domestic Violence Survivors" },
  { title: "NutriGen", summary: "Nutrition Recommendation System" },
  { title: "Qiza App", summary: "Qur’anic Intelligence Zone" },
  { title: "Company Profile MAHKOTA", summary: "Profil perusahaan modern" },
  { title: "Bioinformatics DNA-RNA Tool", summary: "Alat analisis dasar Bioinformatika" },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Proyek Pilihan</h1>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-xl border border-border bg-card/60 backdrop-blur p-5 hover:border-primary transition-colors"
          >
            <h2 className="font-medium">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}