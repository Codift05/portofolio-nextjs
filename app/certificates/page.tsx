const certificates = [
  "BNSP",
  "Huawei",
  "Alibaba Cloud",
];

export default function CertificatesPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Sertifikasi</h1>
      <ul className="mt-6 grid sm:grid-cols-2 gap-4">
        {certificates.map((c) => (
          <li key={c} className="rounded-xl border border-border bg-card/60 backdrop-blur p-4">
            <span className="font-medium">{c}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}