# Mif — Personal Portfolio

Portofolio pribadi berbasis `Next.js` dengan tema neon, animasi halus, dan layout responsif. Hero berisi headline di tengah, foto di bawahnya, dan badge review/keahlian di kiri-kanan mulai breakpoint `md:`.

## Fitur

- Hero: teks besar terpusat, foto kotak di bawah, badge kiri/kanan.
- Tema neon dengan gradasi, blur, dan garis diagonal halus.
- Animasi `framer-motion` untuk transisi yang lembut.
- Komponen UI ringan (`Button`) dan ikon `lucide-react`.
- Responsif: mobile tetap rapi, badge tampil dari `md:`.

## Tech Stack

- `Next.js 15` (App Router) + `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `Framer Motion`
- `Lucide React`

## Memulai

Prasyarat: `Node.js >= 18` (disarankan 20+), `npm`.

```bash
npm install
npm run dev
# buka http://localhost:3000
```

Build produksi:

```bash
npm run build
npm start
```

Script lain:

- `npm run lint` — menjalankan ESLint.

## Struktur Proyek Singkat

- `app/` — halaman & layout (`page.tsx`, dll.)
- `components/` — komponen UI & util (mis. `neon-grid`, `button`)
- `public/` — aset publik (ikon, gambar), termasuk `image/mip3.png`
- `lib/` — utilitas kecil
- `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`

## Kustomisasi Cepat

- Ubah foto profil:
  - Ganti file di `public/image/` lalu sesuaikan `src` di `app/page.tsx`.
  - Contoh di `app/page.tsx`:
    ```tsx
    <Image
      src="/image/mip3.png"
      alt="Foto Miftah"
      fill
      priority
      className="object-cover object-center"
    />
    ```
- Posisi & ukuran badge:
  - Kiri: `absolute left-10 top-1/3 -rotate-6`
  - Kanan: `absolute right-10 top-1/3 rotate-6`
  - Geser angka (mis. `left-8`, `top-1/2`) untuk penempatan.
- Ukuran kotak foto: ubah kelas `w-56 h-56 sm:w-64 md:w-72`.
- Intensitas gradasi/blur: sesuaikan `opacity`/`blur` pada elemen dekoratif.

## Deploy

Saran: gunakan Vercel.

1. Buat project baru di Vercel dan hubungkan repo GitHub ini.
2. Pengaturan default Next.js sudah cukup; tidak perlu env khusus.
3. Setelah deploy, cek halaman utama dan lintas perangkat.

---

Jika menemukan bug/kebutuhan fitur, buat issue atau pull request. Selamat berkarya!
