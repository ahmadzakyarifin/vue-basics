# 🚀 Vue 3 Basic to Advanced: Catatan Belajar & Persiapan Karir

Repo ini berisi rangkuman rincian materi dasar Vue 3 (Composition API), Vue Router, dan Pinia. Disusun sebagai catatan pribadi sekaligus panduan untuk menghadapi pertanyaan teknis saat interview kerja.

---

## 🏗️ 1. Paradigma Framework

### Kenapa Kita Perlu Framework?
Dalam pengembangan profesional, framework memberikan **Standarisasi**. 
* **Masalah (Vanilla JS):** Setiap orang punya gaya kode berbeda, manipulasi DOM manual yang rawan bug, dan sulit dikelola saat proyek membesar (*Spaghetti Code*).
* **Solusi (Vue):** Menyediakan struktur yang jelas. Jika data (state) berubah, tampilan otomatis update. Ini membuat tim bisa bekerja lebih cepat dan sinkron.

---

## 🧩 2. Component System
**Konsep:** Memecah UI menjadi bagian-bagian kecil (Navbar, Footer, Card) yang menggabungkan logic, template, dan style.
* **Analogi:** Seperti balok LEGO. Kamu buat balok "Tombol" sekali, lalu pasang di halaman manapun berkali-kali (**Reusable**).

---

## 🎨 3. Template Syntax & Directives

### A. Text Interpolation vs `v-html`
* **`{{ text }}`**: Menampilkan data sebagai teks murni. Sangat aman dari serangan XSS.
* **`v-html`**: Merender data sebagai tag HTML. 
    * *Interview Note:* Hanya gunakan jika sumber datanya tepercaya (bukan input user), karena bisa disalahgunakan untuk menyisipkan script berbahaya.

### B. Directives (Instruksi Khusus)
| Directive | Kegunaan | Contoh / Shorthand |
| :--- | :--- | :--- |
| **v-bind** | Mengikat data ke atribut HTML secara dinamis. | `:class`, `:id`, `:src`, `:disabled` |
| **v-on** | Menangani event/interaksi user. | `@click`, `@submit.prevent` |
| **v-model** | Two-way data binding (Sinkronisasi input). | `<input v-model="name">` |

> **Perbedaan :class vs class biasa:** `class` bersifat statis (tetap), sedangkan `:class` bersifat dinamis (bisa berubah sesuai logika di script).

---

## ⚡ 4. Reactivity: `ref()` vs `reactive()`
Reactivity adalah jantung dari Vue yang membuat tampilan otomatis sinkron dengan data.

* **`ref()`**: Digunakan untuk tipe data sederhana (string, number, boolean) atau object. Diakses menggunakan `.value` di script.
* **`reactive()`**: Digunakan khusus untuk object/array.
* **Jebakan Interview:** "Kapan pilih yang mana?" 
    * *Jawaban:* Lebih aman pakai **`ref()`** untuk semuanya karena `reactive()` akan kehilangan reaktivitas jika di-destructure atau di-assign ulang.

---

## 🧠 5. Logic Optimization (Computed vs Watch)

### A. Computed Property
Punya **Cache**. Hanya dihitung ulang jika data di dalamnya berubah. Sangat efisien untuk perhitungan berat (seperti filter list atau total harga).
* *Cara Panggil:* Seperti variabel (tanpa tanda kurung `()`).

### B. Watcher & `watchEffect`
Digunakan untuk "Aksi Sampingan" (Side Effects) seperti memanggil API saat data berubah.
* **`immediate: true`**: Menjalankan watcher langsung saat komponen pertama kali dimuat.
* **`onWatcherCleanup`**: Menghentikan proses lama (seperti request API) sebelum proses baru dimulai. Ini mencegah **Race Condition** (data lama menimpa data baru).

---

## 🔄 6. Komunikasi Antar Komponen

1.  **`defineProps`**: Menerima data dari Parent (Atas) ke Child (Bawah).
2.  **`defineEmits`**: Mengirim laporan/event dari Child ke Parent.
3.  **`defineModel`**: Shortcut untuk sinkronisasi dua arah. Parent dan Child memegang data yang sama secara otomatis.
4.  **Provide & Inject**: Mengirim data ke komponen yang sangat dalam tanpa perlu melewati setiap level (*Prop Drilling*).
5.  **Fallthrough Attributes**: Atribut (seperti `class` atau `id`) yang otomatis diteruskan ke root element komponen jika tidak didefinisikan sebagai props.

---

## 📡 7. AJAX & Lifecycle
* **AJAX (Asynchronous JS):** Komunikasi FE ke BE tanpa refresh halaman (pakai `fetch` atau `axios`).
* **`useTemplateRef`**: Digunakan untuk memegang elemen fisik HTML (DOM). 
    * *Contoh:* Melakukan `.focus()` pada input secara otomatis saat halaman baru dibuka agar user bisa langsung mengetik (UX yang baik).

---

## 🛣️ 8. Router & Store (Pinia)
* **Vue Router:** Navigasi antar halaman dalam satu aplikasi (Single Page Application).
* **Pinia:** State management pusat. Digunakan untuk data yang dibutuhkan global, seperti data login user atau isi keranjang belanja.

---

## 🚩 Pertanyaan "Jebakan" Interview

* **Q: Apa bedanya `v-if` dan `v-show`?**
    * *A:* `v-if` menghapus elemen dari DOM (lebih hemat memori). `v-show` hanya sembunyi pakai CSS `display:none` (lebih cepat untuk elemen yang sering muncul-hilang).
* **Q: Kenapa kita butuh `key` pada `v-for`?**
    * *A:* Agar Vue tahu identitas setiap elemen. Jika data berubah/dihapus, Vue tidak akan salah update posisi elemen di layar.
* **Q: Apa itu Composition API dibanding Options API?**
    * *A:* Composition API (pakai `setup`) lebih rapi karena logika yang berkaitan bisa dikelompokkan jadi satu, bukan terpisah-pisah di `data`, `methods`, dan `computed`.

---