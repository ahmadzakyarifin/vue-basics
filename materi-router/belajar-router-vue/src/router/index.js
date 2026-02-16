import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import HomeViews from '../views/HomeViews.vue'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'

// <-- LAZY LOADING: Hapus/Komentari ini
// import AboutViews from '../views/AboutViews.vue' 
// import ContactViews from '../views/ContactViews.vue'
// import StudentViews from '../views/StudentViews.vue'
// import NotFoundViews from '../views/NotFoundViews.vue'
// import StudentIndex from '../views/student/StudentIndex.vue'
// import StudentDetail from '../views/student/StudentDetails.vue'
// import DashboardHome from '../views/dasboard/DashboardHome.vue'
// import DashboardViews from '../views/DashboardViews.vue'
// import DashboardCreate from '../views/dasboard/DashboardCreate.vue'
// import DashboardUpdate from '../views/dasboard/DashboardUpdate.vue'

const router = createRouter({
    // =================================================================
    // TIPE HISTORY MODE (Jenis URL yang dipakai)
    // =================================================================

    // 1. HTML5 History Mode (createWebHistory) - REKOMENDASI UTAMA
    //    - URL Bersih: example.com/user/id
    //    - SEO Friendly (Disukai Google).
    //    - Syarat: Perlu konfigurasi khusus di Server (Apache/Nginx/Vercel)
    //      agar saat direfresh tidak Error 404.
    history: createWebHistory(),

    // 2. Hash Mode (createWebHashHistory) - OPSIONAL / DEMO
    //    - URL ada Pagar: example.com/#/user/id
    //    - Tidak butuh konfigurasi server (Jalan di file .html biasa).
    //    - Biasanya dipakai buat demo cepat atau aplikasi internal yang tidak butuh SEO.
    // history: createWebHashHistory(), 

    routes: [
        {
            // url
            path: "/",
            // ini id unik . jadi kalau kita pasang id ini di app.vue (router-link), maka ketika kita ingin ubah nama urlnya 
            //  cukup ubah di sini aja (path). jadi kayak id itu sebgai penghubung aja
            name: "home",
            // halaman yang mau ditampilkan 
            // ini tidak pakai lazy loading karena halama yang pertama kali mau ditampilkan
            component: HomeViews
        },
        {
            path: "/about",
            name: "about",
            // CARA BIASA (Eager Loading): Dimuat di awal bareng Home
            // component: AboutViews  

            // ===========================================================
            // LAZY LOADING (Pemuatan Malas / Tertunda)
            // ===========================================================
            // Konsep: "Jangan load code halaman ini KECUALI user benar-benar membukanya."
            // Manfaat: Website jadi lebih ringan di awal (Initial Load cepat)
            // Caranya: Pakai function arrow () => import('...')
            // 1. TANPA Lazy Loading (Eager):
            //    - Browser download SEMUA halaman (Home, About, Contact, dll) di awal.
            //    - Loading awal LAMBAT, tapi pas ganti halaman INSTAN.
            //
            // 2. DENGAN Lazy Loading:
            //    - Browser cuma download halaman yang DIBUKA user.
            //    - Loading awal CEPAT.
            //    - KELEMAHAN: "RouterView Slow" / Jeda Halaman. 
            //      Saat user klik menu, browser butuh waktu download file (loading).
            //      User bisa bingung "kok gak ganti-ganti?".
            //
            // SOLUSI: Navigation Guards
            //    - Kita pasang "Satpam" (beforeEach & afterEach).
            //    - Pas mau ganti halaman -> Munculkan Loading Bar.
            //    - Pas selesai ganti -> Hilangkan Loading Bar.
            // component: () => import('../views/AboutViews.vue') (STANDAR)
            component: () => import('../views/AboutViews.vue')
        },
        {
            path: "/contact",
            name: "contact",
            // component: ContactViews
            component: () => import('../views/ContactViews.vue')
        },
        // =========================================
        //  VERSI LAMA (Sebelum Nested Route)
        // =========================================
        // {
        //     // Tambahkan (\\d+) setelah :id
        //     // artinya: "hanya terima jika isinya digit/angka"
        //     path: "/student/:id(\\d+)",
        //     name: "student",
        //     component: StudentViews
        // },

        // =========================================
        //  VERSI BARU (Nested Route)
        // =========================================
        {
            path: "/student",
            name: "student",
            // component: StudentViews,
            component: () => import('../views/StudentViews.vue'),

            // nested route
            children: [
                {
                    path: "",
                    name: "student-index",
                    // component: StudentIndex
                    component: () => import('../views/student/StudentIndex.vue')
                },
                {
                    path: ":id(\\d+)",
                    name: "student-detail",
                    // component: StudentDetail,
                    component: () => import('../views/student/StudentDetails.vue'),
                    // Aktifkan Props: Kirim params sebagai props ke komponen
                    props: true
                }
            ]
        },
        {
            path: "/dashboard",
            // HAPUS (Best Practice: Parent dgn default child jangan dikasih nama)
            // name: "dashboard",

            // component: DashboardViews,
            component: () => import('../views/DashboardViews.vue'),

            children: [
                {
                    path: "",
                    name: "dashboard-home",
                    components: {
                        sidebar: Sidebar,
                        // main: DashboardHome,
                        main: () => import('../views/dasboard/DashboardHome.vue'),
                        footer: Footer
                    }
                },
                {
                    path: "create",
                    name: "dashboard-create",
                    components: {
                        sidebar: Sidebar,
                        // main: DashboardCreate,
                        main: () => import('../views/dasboard/DashboardCreate.vue'),
                        footer: Footer
                    }
                },
                {
                    path: "update",
                    name: "dashboard-update",
                    components: {
                        sidebar: Sidebar,
                        // main: DashboardUpdate,
                        main: () => import('../views/dasboard/DashboardUpdate.vue'),
                        footer: Footer
                    }
                }
            ]
        },
        {
            // Kasus Nyata: Skenario Ganti Nama Fitur
            // Dulu namanya "Member", sekarang "Student".
            // Biar orang yang akses link lama /member gak nyasar, kita redirect aja.
            path: "/member",
            redirect: "/student"
        },
        {
            // materi Matching Syntax
            path: "/:pathMatch(.*)*",
            name: "not-found",
            // component: NotFoundViews
            component: () => import('../views/NotFoundViews.vue')
        }
    ]
})


// =================================================================
// NAVIGATION GUARDS (Satpam Router)
// =================================================================
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 2. Setting NProgress 
// Hilangkan spinner di pojok kanan
NProgress.configure({ showSpinner: false })

// 3. Global Before Guard (Dijalankan SEBELUM pindah halaman)
router.beforeEach((to, from, next) => {
    // Mulai Loading Bar
    NProgress.start()
    // Lanjut ke halaman tujuan
    next()
})

// 4. Global After Hook (Dijalankan SETELAH sukses pindah halaman)
router.afterEach(() => {
    // Selesai Loading Bar
    NProgress.done()
})

export default router


/*
========================================================================
   PENJELASAN LENGKAP & RINCI TENTANG VUE ROUTER & SPA
========================================================================

1. KONSEP DASAR SPA (Single Page Application)
   Bayangkan website tradisional (MPA - Multi Page Application) seperti buku. 
   Setiap kali kita buka halaman baru, kita harus menutup halaman lama dan mengambil kertas baru (Reload Full Page).
   
   Sedangkan SPA (Single Page Application) seperti **Papan Tulis**.
   - Kita cuma punya SATU papan tulis utama (`index.html`).
   - Saat kita pindah halaman, kita TIDAK mengganti papan tulisnya.
   - Kita cuma menghapus tulisan di tengahnya, lalu menulis konten baru.
   - Pinggirannya (Header, Footer, Sidebar) tetap sama, tidak ikut dihapus.

   Alur Kerja SPA di Vue:
   1. **`index.html` (Wadah Besar)**
      - Ini satu-satunya file HTML yang dikirim server ke browser.
      - Isinya kosong, cuma ada `<div id="app"></div>`.
   
   2. **`main.js` (Penghubung / Saklar Utama)**
      - File ini yang pertama jalan.
      - Dia mencari `<div id="app">` di `index.html`.
      - Lalu dia "menempelkan" Aplikasi Vue kita ke situ.
      - Dia juga yang mendaftarkan Router (`app.use(router)`) supaya aplikasi tahu cara ganti-ganti halaman.

   3. **`App.vue` (Kerangka Utama / Layout)**
      - Ini adalah komponen induk paling atas.
      - Biasanya berisi Menu Navigasi (yang tidak pernah hilang).
      - Di dalamnya ada tag sakti: `<router-view />`.
      - **`<router-view />`** inilah "proyektor" atau "layar" yang isinya berubah-ubah sesuai URL.

   4. **`router/index.js` (Peta Navigasi)**
      - Di sini kita mengatur logika: "Kalau URL-nya A, tampilkan Komponen A di `<router-view />`".

   5. **`views/*.vue` (Halaman)**
      - Ini adalah komponen-komponen besar yang akan bergantian tampil di `<router-view />`.

2. MENGAPA BUTUH `createWebHistory()`?
   Karena kita cuma punya satu file HTML (`index.html`), secara default browser tidak tahu kalau kita "pindah halaman".
   Kalau URL berubah, browser normalnya akan minta file baru ke server (Reload).
   
   Di sinilah peran `createWebHistory()`:
   
   A. **Manipulasi URL tanpa Reload**
      - Dia menggunakan fitur browser modern (History API) untuk mengubah teks di Address Bar.
      - Seolah-olah kita pindah ke `website.com/about`, padahal kita masih di `index.html`.
      - Ini bikin aplikasi terasa **sangat cepat** (instan) karena tidak perlu loading ulang dari nol.

   B. **Tombol Back/Forward Berfungsi Normal (Undo)**
      - Tanpa ini, kalau user tekan Back button, mereka bisa terlempar keluar dari website kita.
      - Dengan `createWebHistory`, setiap perpindahan halaman dicatat dalam "stack" (tumpukan riwayat).
      - Jadi tombol Back berfungsi selayaknya "Undo" navigasi, kembali ke tampilan sebelumnya, bukan keluar web.

   C. **SEO Friendly (URL Cantik)**
      - Menghasilkan URL bersih: `website.com/user/123`.
      - Bandingkan dengan mode lama (Hash Mode): `website.com/#/user/123`.
      - URL bersih lebih disukai Google (SEO) dan terlihat lebih profesional.

3. RINGKASAN MATERI ROUTING
   A. **Routing Dasar**
      mapping: URL -> Komponen
      ```js
      { path: '/', name: 'home', component: HomeViews }
      ```
      - `path`: Alamat di browser.
      - `name`: Nama panggilan (biar kalau URL ganti, kodingan lain gak rusak).
      - `component`: File .vue yang dimuat.

   B. **Route Param (Parameter Dinamis)**
      Untuk URL yang pola-nya sama tapi isinya beda (contoh: ID user, Slug artikel).
      - Ditandai dengan titik dua `:`.
      - `path: '/student/:id'`
      - Menangkap `/student/1`, `/student/2`, `/student/budi`.
      - Akses data: `route.params.id`.

   C. **Matching Syntax (Validasi Regex)**
      Membatasi param supaya tidak sembarangan menerima input.
      - Contoh: `path: '/student/:id(\\d+)'`
      - `(\\d+)` artinya "Hanya Angka".
      - `/student/123` -> OK (Masuk).
      - `/student/budi` -> Gagal (404 Not Found), karena 'budi' bukan angka.

   D. **Query Param**
      Data tambahan di URL yang opsional (biasanya untuk filter/search).
      - Tidak perlu didaftarkan di `router/index.js`.
      - Format: `/search?kategori=laptop&sort=murah`
      - Akses: `route.query.kategori` (dapat 'laptop').

   E. **Nested Route (Rute Bersarang)**
      Konsep "Halaman di dalam Halaman".
      - Parent (`/student`) punya `<router-view>` sendiri.
      - Child (`/student/detail`) akan tampil di dalam `<router-view>` milik Parent, BUKAN milik App.vue.
      - Struktur:
        ```js
        {
          path: '/parent',
          component: ParentComp,
          children: [
            { path: '', component: ChildDefault }, // Tampil saat /parent
            { path: 'detail', component: ChildDetail } // Tampil saat /parent/detail
          ]
        }
        ```
*/

