export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Tentang Miftah</h1>
      <p className="mt-4 text-muted-foreground">
        Mahasiswa Teknik Informatika Universitas Sam Ratulangi. Berfokus pada pengembangan web,
        eksplorasi Machine Learning, dan desain antarmuka yang human-centered.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Python",
          "TensorFlow",
          "Figma",
          "Node.js",
        ].map((skill) => (
          <div key={skill} className="rounded-xl border border-border bg-card/60 backdrop-blur p-4">
            <span className="text-sm">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}