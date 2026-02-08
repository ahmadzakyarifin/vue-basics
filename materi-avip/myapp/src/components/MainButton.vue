<script setup>
    const namanya = 'idan'
    const showname = () => console.log(namanya)

    // const disableButton = true
    // const styleDisableButton = 'text-3xl bg-black text-white'

    // bind multiple attribut
    const object = {
        id : 1,
        disabled : true,
        class : 'text-3xl bg-black text-white mt-10'
    }

    const isLoading = false

    const url = "/home"

    const dynamic = {
        attr : "href",
        url : "/home"
    }


    // 09.props
    // const props = defineProps(['title'])
    const props = defineProps({
        title : {
            type : String,
        },
        disabled : Boolean,
        total : Number,
        user : Object,
        menus : Array,
        onClick : Function
    })


</script>

<template>
    <!-- <button>Button</button> -->

    <!-- <h1>{{ namanya }}</h1> -->
    <!-- <button @click="showname">Show Name</button> -->

    <!-- 06 disable -->
    <!-- <button :disabled="disableButton" :class="styleDisableButton">Button Disable</button> -->
    <!-- <button v-bind="object">Button Disable</button> -->

    <!--  07 javascript expression -->
    <!-- <button :id="`ini id ke ${object.id}`" :disabled="isLoading" >{{ isLoading ? "masih loding" : "submit" }}</button> -->

    <!-- 08 directive -->
    <!-- <div>
        <a :href="url">
            <h1>haii</h1>
        </a>
    </div> -->

    <!-- 09 Dynamic argument -->
    <!-- <div>
        <a :[dynamic.attr]="dynamic.url">
            <h1>hallo</h1>
        </a>
    </div> -->


    <!-- 10 props dan condisional rendering -->
    <p v-if="props.total">Total barang : {{ props.total }} </p>
    <p v-if="props.user && props.user.nama">Nama : {{ props.user.nama }}</p>
    <p v-if="props.user && props.user.role">Role : {{ props.user.role }}</p>
    <!-- <ul v-if="props.menus">
        <li v-for="menu in props.menus" key="menu">{{ menu }}</li>
    </ul> -->
    <ul v-if="props.menus">
        <li v-for="menu in props.menus" key="menu.id">
            {{ menu.nama }} - Rp{{ menu.price }}
        </li>
    </ul>
    <button v-if="props.title" :disabled="props.disabled" @click="props.onClick">{{ props.title }}</button>


</template>

<!-- scoped artinya style css hanya berlaku di component ini saja -->
<style scoped>

</style>

<!-- 🧠 RINGKASAN
1️⃣ Tanpa setup (cara lama)
Pakai data()
Pakai methods
Harus return
Lebih panjang

2️⃣ Pakai setup (cara baru – Vue 3)
Semua ditulis di satu tempat
Tidak pakai return
Lebih singkat & rapi
Disarankan untuk Vue 3 -->


<!-- Props
Data dari parent ke child
Child tidak boleh mengubah
Bisa berupa text, angka, boolean, object, array, function
Bikin komponen fleksibel & reusable -->

<!-- 
1️⃣ ref untuk data
Digunakan untuk 1 nilai (number, string, boolean, dll)
Bersifat reaktif ( data langsung berubah di ui )
Di JavaScript pakai .value
Di template tidak pakai .value

2️⃣ ref untuk elemen
Digunakan untuk mengakses elemen DOM
Alternatif aman dari getElementById
Diakses lewat .value-->


<!-- 🧠 REF vs REACTIVE
1. ref
- Cocok buat data tunggal (angka, string, boolean)
- Di script wajib pakai .value (contoh: count.value)
- Di template langsung panggil (contoh: {{ count }})

2. reactive
- Cocok buat object atau array (data kompleks)
- Tidak perlu pakai .value sama sekali
- Langsung ubah propertinya (contoh: user.nama = 'Budi')
-->


<!-- 🧠 FORM & PREVENT CONCEPT -->
<!-- 
1. Kenapa butuh .prevent?
   - Form HTML secara default akan me-refresh halaman saat disubmit.
   - .prevent mencegah refresh itu, jadi data tidak hilang.
   - Kalau pakai <div>, tidak butuh .prevent karena div tidak punya aksi default refresh.

2. Kenapa harus <form> kalau <div> bisa?
   - <form> mendukung tombol ENTER di keyboard (UX lebih bagus).
   - <form> lebih semantik (dimengerti mesin/browser sebagai formulir).
   - Aksesibilitas lebih baik (untuk screen reader).

3. Alur Jalan (Flow):
   - User klik tombol "Simpan" (type="submit" default di dalam form).
   - Tombol "teriak" ke Form: "Woy form, aku diklik nih!".
   - Form menangkap teriakan itu lewat event @submit.
   - Karena ada .prevent, Form menahan refresh.
   - Lalu Form menjalankan fungsi tujuan (submitForm).
-->

<!-- 🧠 COMPUTED PROPERTY -->
<!-- 
1. Apa Itu?
   - Computed adalah data "TURUNAN". Bayangkan rumus Excel. Sel C = A + B.
   - Kalau A atau B berubah, C otomatis berubah.

2. Kenapa Gak Pakai Method Biasa?
   - Caching (Hemat Performa).
   - Computed hanya dihitung ulang kalau data sumbernya (dependencies) berubah.
   - Kalau data tidak berubah, dia pakai hasil hitungan terakhir.
   - Method akan dijalankan ulang SETIAP KALI ada update di layar, biarpun data gak berubah.

3. Kapan Harus Pakai?
   a. Validasi Form (Seperti tombol Simpan di atas):
      - Cek username, email, password sudah diisi belum?
   
   b. Filter Pencarian:
      - Punya list 1000 barang, user ketik "baju". 
      - Computed akan return array baru isinya cuma barang yang ada kata "baju".
   
   c. Total Keranjang Belanja:
      - Total = (Harga * Jumlah) - Diskon. 
      - Kalau user tambah jumlah barang, total otomatis berubah.

4. Rumus Dasar "Clean Code":
   - Gunakan COMPUTED untuk "MENGOLAH" data yang sudah ada (memfilter, menjumlah, memformat).
   - Gunakan METHODS untuk "AKSI" (klik tombol, simpan data ke server).
-->

<!-- 🧠 v-show & TOGGLE -->
<!-- 
1. Cara Vue (Declarative):
   - Kita hanya peduli DATA (isShow = true/false).
   - HTML otomatis ngikutin data.
   - Codingan super pendek: @click="isShow = !isShow"

2. Cara Manual / Vanilla JS (Imperative):
   - Kita harus cari elemennya dulu (querySelector).
   - Kita harus cek kondisi sekarang manual.
   - Kita harus ubah style manual.
   
   Contoh LENGKAP Vanilla JS:
   
   HTML:
   <button id="btnToggle">Toggle</button>
   <div id="boxDisplay">
       <p>ini v-show</p>
   </div>
   
   JavaScript:
   const tombol = document.getElementById('btnToggle');
   const box = document.getElementById('boxDisplay');
   
   tombol.addEventListener('click', () => {
       // Cek kondisi sekarang: Kalau box sedang sembunyi (display: none)
       if (box.style.display === 'none') {
           box.style.display = 'block';  // Munculkan (block = tampil)
       } else {
           box.style.display = 'none';   // Sembunyikan (none = hilang)
       }
   });
   
   Penjelasan:
   - display: none   → Elemen HILANG/SEMBUNYI
   - display: block  → Elemen MUNCUL/TAMPIL
   - Kita harus manual bolak-balik ubah value itu setiap kali klik
-->
