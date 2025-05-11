# Cara Mengatasi Gambar Tidak Muncul Saat Deploy di Vercel

Ketika menggunakan React Vite dan melakukan deploy di Vercel, gambar yang disimpan di folder lokal seperti `src/assets` seringkali tidak muncul. Hal ini terjadi karena perbedaan cara Vite menangani gambar di development vs production. Berikut cara mengatasinya:

## Masalah

Pada struktur kode saat ini, kita menggunakan path seperti:

```jsx
<img src="/src/assets/nama-gambar.jpg" />
```

Path di atas bekerja dengan baik di development (localhost), tetapi tidak berfungsi di Vercel karena path `/src/assets/` tidak tersedia di production build.

## Solusi 1: Gunakan Import (Direkomendasikan)

Cara terbaik adalah mengimpor gambar secara langsung:

### Langkah-langkah:

1. **Import gambar sebagai modul di file component:**

```jsx
import gambarLogo from "../assets/nama-gambar.jpg";

function Component() {
  return (
    <img src={gambarLogo} alt="Deskripsi gambar" />
  );
}
```

### Contoh penerapan di komponen kita:

```jsx
// Sebelum:
<img 
  src="/src/assets/shane-mclendon-9jPJrfLTBi0-unsplash.jpg" 
  alt="Pekerja konstruksi jalan meninjau rencana" 
  className="w-full h-full object-cover"
/>

// Sesudah:
import konstruksiImage from "../../../assets/shane-mclendon-9jPJrfLTBi0-unsplash.jpg";

<img 
  src={konstruksiImage} 
  alt="Pekerja konstruksi jalan meninjau rencana" 
  className="w-full h-full object-cover"
/>
```

## Solusi 2: Pindahkan Gambar ke Public Folder

Jika memiliki banyak gambar dan ingin pendekatan yang lebih sederhana:

### Langkah-langkah:

1. **Buat folder `public/images` di root proyek:**

```
public/
  └── images/
      └── nama-gambar.jpg
```

2. **Referensikan gambar dengan path relatif terhadap `public`:**

```jsx
<img src="/images/nama-gambar.jpg" alt="Deskripsi gambar" />
```

### Contoh penerapan:

1. Pindahkan semua gambar dari `src/assets` ke `public/images`
2. Update semua referensi gambar:

```jsx
// Sebelum:
<img src="/src/assets/jamar-penny-ZgmGq_eFmUs-unsplash.jpg" alt="Alat berat" />

// Sesudah:
<img src="/images/jamar-penny-ZgmGq_eFmUs-unsplash.jpg" alt="Alat berat" />
```

## Solusi 3: Update Konfigurasi Vite untuk Asset Handling

Jika ingin mempertahankan struktur folder saat ini:

### Langkah-langkah:

1. **Edit file `vite.config.ts` untuk menambahkan custom alias:**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets")
    }
  },
  build: {
    assetsInlineLimit: 0 // Jika tidak ingin gambar diconvert ke base64
  }
});
```

2. **Gunakan alias di komponen:**

```jsx
<img src="@assets/nama-gambar.jpg" alt="Deskripsi gambar" />
```

## Rekomendasi Terbaik

Solusi 1 (import langsung) adalah yang paling direkomendasikan karena:

1. Vite secara otomatis menangani hashing file untuk cache busting
2. Hanya gambar yang benar-benar digunakan yang akan disertakan dalam build
3. Performa lebih baik karena optimasi otomatis

## Catatan Penting

- Jika proyek menggunakan framework seperti Next.js, pendekatan penanganan gambar mungkin sedikit berbeda
- Selalu periksa dokumentasi Vercel dan Vite untuk informasi terbaru tentang penanganan aset
- Lakukan uji deploy untuk memastikan gambar muncul dengan benar