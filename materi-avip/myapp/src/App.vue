<script setup>
import { reactive, ref, computed, provide } from 'vue';
import MainButton from './components/MainButton.vue';
import CardLayout from './components/CardLayout.vue';
import GrandChild from './components/GrandChild.vue';

// const nama = 'Ida Laila'

const bodyBlogPost = '<p style="color:red">Ini BlogPost</p>'
const id = "idSatu"
const blogClass = 'text-3xl flex-coll'

const makanan = [
  {id:1, nama:'ayam bakar', price:'Rp. 25.000'},
  {id:2, nama:'ayam goreng', price:'Rp. 20.000'},
  {id:3, nama:'lele goreng', price:'Rp. 18.000'}
]

function simpanData(){
  alert("simpan data berhasil")
}

// 11 ref
const isShow = ref(true)

const count = ref(1)

function increment() {
  count.value++
}

function decrement(){
  if (count.value > 0){
  count.value--
  }
}

// 12 reactive
const user = reactive({
  nama : 'zaky',
  umur : 20
})

function tambahUmur(){
  user.umur++
}

const form = reactive({
  username : '',
  email : '',
  password : ''
})

const dataRel = reactive({
  username : '',
  email : '',
  password : ''
})

function submitForm() {
  // Salin data dari form ke dataRel saat tombol diklik
  dataRel.username = form.username
  dataRel.email = form.email
  dataRel.password = form.password
  alert('Data berhasil disimpan!')
}

const isValid = computed(() => {
  return form.username !== '' && form.email !== '' && form.password.length >= 6
})

// ========================= computed =================


const author = reactive({
  name : 'zaky',
  books : ['bumi','bulan']
})

//  ini kan terus di render padahal tidak ada perubahan 
const  publishedBooksMessageSatu = () => {
  console.log("ini function")
   return author.books.length > 0 ? 'published yes' : 'published no'
}


//  ini tidaka da perubahan , kecuali data berubah 180 derajat
//  kita uji dengan push buku , dengan gini akan di render ulang , kita lihat di console
const publishedBooksMessageDua = computed(() => {
    console.log("ini computed")
    console.log(author.books)
    return author.books.length > 0 ? 'published yes' : 'published no'
})

const newBook = ref('')

function tambahBuku(){
  if (newBook.value) {
    author.books.push(newBook.value)
    newBook.value = ''
  }
}

// condisional rendering
const ujian = reactive({
  username : '',
  nilai : ''
})

const hasil = reactive({
  username : '',
  nilai : ''
})

const adaIsi = computed(() => {
  return ujian.username !== '' && ujian.nilai !== ''
})

function simpanHasil(){
  hasil.username = ujian.username
  hasil.nilai = ujian.nilai
  alert("Data berhasil di simpan")
}

// 13. list rendering
const manusia = reactive({
  nama : 'zaky',
  umur : 25,
  books : [
    {
      id: 1,
      title : 'Novel Bumi',
      karya : 'tereliye',
      rating: 4.8,
      reviews: [
        { user: 'Ahmad', comment: 'Sangat bagus!', rating: 5 },
        { user: 'Budi', comment: 'Menarik sekali', rating: 4 },
        { user: 'Siti', comment: 'Recommended!', rating: 5 }
      ]
    },
    {
      id: 2,
      title : 'Novel Bulan',
      karya : 'tereliye',
      rating: 4.9,
      reviews: [
        { user: 'Dewi', comment: 'Ceritanya keren', rating: 5 },
        { user: 'Andi', comment: 'Bikin nangis', rating: 4 }
      ]
    },    
    {
      id: 3,
      title : 'Novel Matahari',
      karya : 'tereliye',
      rating: 4.7,
      reviews: [
        { user: 'Rini', comment: 'Ending nya epic!', rating: 5 },
        { user: 'Joko', comment: 'Seru banget', rating: 5 },
        { user: 'Lina', comment: 'Worth it', rating: 4 }
      ]
    },
  ]
})

// 14 class dan style binding
const pencet = ref(false)


const silahkanPencet = () => {
  pencet.value  = !pencet.value
}

// =============== active dan nonactive ========
const isActive = ref(true)

function toggleStatus(){
  isActive.value = !isActive.value
}
const statusText = computed(()=>{
  return isActive.value ? 'Active' : 'Nonactive'
})

const buttonText = computed(()=>{
  return isActive.value ? 'Nonactive' : 'Active'
})

// === LOGIC UNTUK STUDI KASUS TOGGLE ===
const statusUser = ref(false) // Default false (biasanya user baru non-aktif atau props default false)

function gantiStatusUser() {
  // Logic toggle: membalikkan nilai true jadi false, false jadi true
  statusUser.value = !statusUser.value
  console.log("Status user sekarang:", statusUser.value)
}

// === 16 V-MODEL MODIFIERS & VALUE BINDING ===
const pendaftaran = reactive({
  // .trim
  nama: '',     
  // .number   
  umur: null, 
  // .lazy     
  deskripsi: '',
  // value binding (radio)   
  paket: '', 
  syarat: false    // checkbox bool
})

// === 18 PROVIDE & INJECT ===
const themeApp = ref('light') 
provide('themeApp', themeApp) 

function ubahTheme(){
  themeApp.value = themeApp.value == 'light' ? 'dark' : 'light'
}

provide('userLogin', 'Zaky Arifin') 

function kirimPesan() {
  alert('Halo! Ini function dari App.vue yang dipanggil via Inject!')
}
provide('kirimPesan', kirimPesan) 

</script>

<template>
  <!-- <MainButton></MainButton> -->
  <!-- <MainButton/> -->
  <br>

  <!-- <h1>Ahmad Zaky Arifin</h1> -->
  <!-- <br> -->


  <!-- 03 text interpolation 'Mustache syntax' -->
  <!-- <h1>{{ nama }}</h1> -->
  <div>
    <!-- {{ bodyBlogPost }} -->
  </div>
  <!-- 04 Row Html supaya tag html itu bekerja -->
  <!-- <div v-html="bodyBlogPost"></div> -->

  <!-- 05 v-bind -->
  <!-- <div v-bind:id="idSatu"></div> -->
  <!-- <div :id="id" :class="blogClass"></div> -->
  <!-- <div :id :class="blogClass"></div> -->

  <!-- 10 Props -->
  <MainButton :title="'submit'"/>
  <MainButton :title="'login'"/>
  <MainButton :title="'logout'" disabled/>
  <MainButton  :total="5"/>
  <MainButton :user="{nama:'admin',role:'admin'}"/>
  <!-- <MainButton :menus="['ayam','sapi','unta']"/> -->
  <MainButton :menus="makanan"/>
  <MainButton :title="'simpan'" :onClick="simpanData"/>

  <!-- 11 ref -->
  <div id="bungkus">
    <p id="nilai">{{ count }}</p>
    <div id="tombol">
      <button @click="increment">Tambah</button>
      <button @click="decrement">Kurang</button>
    </div>
  </div>

  <!-- 12 reactive, prevent dan computed-->
   <div style="margin-top: 24px;">
      <p>Nama : {{ user.nama }}</p>
      <p>Umur : {{ user.umur }}</p>
      <button @click="tambahUmur">Tambah Umur</button>
   </div>

   <div style="margin-top: 30px;">
    <p><span class="label">Username</span> : {{ dataRel.username }}</p>
    <p><span class="label">Email</span> : {{ dataRel.email }}</p>
    <p><span class="label">Password</span> : {{ dataRel.password }}</p>
   </div>
  
   <form id="form" @submit.prevent="submitForm">
      <label for="username">Username : </label>
      <input style="border-radius: 8px; padding: 5px;" id="username" v-model="form.username">

      <label for="email">Email : </label>
      <input style="border-radius: 8px;padding: 5px;"  id="email" v-model="form.email">

      <label for="password">Password : </label>
      <input style="border-radius: 8px; padding: 5px;"  id="password" v-model="form.password">
      
      <div style="display: flex; justify-content: center;">
         <button :disabled="!isValid"  style="margin-top: 20px; width: 50%;padding: 10px; ">Simpan</button>
      </div>
   </form>

   <div>
    <!-- ini sulit di Maintainability,Reusability,html jadi kotor -->
    <p>Apakah sudah terbit? {{ author.books.length ? 'published yes' : 'published no'}}</p>
    <!-- html jadi bersih -->
    <p>Apakah sudah terbit? {{ publishedBooksMessageSatu() }}</p>
    <p>Apakah sudah terbit? {{ publishedBooksMessageDua }}</p>

    <!--  buat test apakah function dan computed di render atau tidak di console -->
    <button @click="increment">{{ count }}</button>
    <input type="text" v-model="newBook" placeholder="Judul buku baru" />
    <button @click="tambahBuku">tambah buku</button>
   </div>
   <div>

   </div>

   <!-- condisional redering -->
    <form action="" style="margin-top: 50px;" @submit.prevent="simpanHasil">
        <div style="display: flex; flex-direction: column; width: 150px;">
          <label for="inputUsername">Username : </label>
          <input type="text" v-model="ujian.username" id="inputUsername" >
          <label for="inputNilai">nilai : </label>
          <input type="number" v-model="ujian.nilai" id="inputNilai" >
        </div>
        <button style="margin-top: 15px;" :disabled="!adaIsi">simpan</button>
    </form>

    <div v-if="hasil.username">
      <p>Nama : {{ hasil.username }}</p>
      <p>
        Nilai : 
        <span v-if="hasil.nilai >= 80">A</span>
        <span v-else-if="hasil.nilai >= 70">B</span>
        <span v-else>C</span>
      </p>
    </div>

    <!-- v-show -->
    <div style="margin-top: 50px;">
        <button @click="isShow = !isShow">Toggle</button>
        <div v-show="isShow">
            <p>ini v-show</p>
        </div>
    </div>


    <!-- 13. list rendering -->
    <h2 style="margin-top: 50px;">V-FOR EXAMPLES</h2>
    
    <!-- Contoh 1: Loop Array of Objects -->
    <div >
      <h3>1. Loop Array of Objects</h3>
      <ul>
        <li v-for="book in manusia.books" :key="book.id">
          {{ book.title }} oleh {{ book.karya }}
        </li>
      </ul>
    </div>

    <!-- Contoh 2: Loop dengan Index -->
    <div >
      <h3>2. Loop dengan Index</h3>
      <ul>
        <li v-for="(book, index) in manusia.books" :key="book.id">
          Buku ke-{{ index + 1 }}: {{ book.title }}
        </li>
      </ul>
    </div>

    <!-- Contoh 3: Nested Loop -->
    <div >
      <h3>3. Nested Loop (Loop di dalam Loop)</h3>
      <div v-for="book in manusia.books" :key="book.id" style="margin-bottom: 15px;">
        <strong>{{ book.title }}</strong>
        <ul>
          <li v-for="(review, idx) in book.reviews" :key="idx">
            {{ review.user }}: {{ review.comment }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Contoh 4: Loop dengan Range -->
    <div >
      <h3>4. Loop dengan Range (1-10)</h3>
      <p>
        <!-- <span v-for="n of 10" :key="n" style="margin-right: 10px; font-weight: bold;"> -->
        <span v-for="n in 10" :key="n" style="margin-right: 10px; font-weight: bold;">
          {{ n }}
        </span>
      </p>
    </div>

    <!-- Contoh 5: Loop dengan v-if -->
    <div>
      <h3>5. Loop dengan Kondisi (v-if)</h3>
      <p>Buku dengan rating tinggi (>= 4.8):</p>
      <ul>
        <li v-for="book in manusia.books" :key="book.id">
          <span v-if="book.rating >= 4.8">{{ book.title }} - Rating: {{ book.rating }}</span>
        </li>
      </ul>
    </div>

    <!--14 class dan style binding -->

    <MainButton :onClick="silahkanPencet" :title="'test'" :disabled="pencet"/>

    <!-- ===== staus active dan nonactive -->
    <div style="margin-top: 50px;">
      <p>Status: <strong>{{ statusText }}</strong></p>
      <MainButton :title="buttonText" :active="isActive" @click="toggleStatus"/>
    </div>

    <!-- 15. STUDI KASUS: TOGGLE & ATTRIBUTES INHERITANCE -->
    <div style="margin-top: 50px; border-top: 2px dashed black; padding-top: 20px;">
      
      <p>Status User: <strong>{{ statusUser ? 'AKTIF' : 'NON-AKTIF' }}</strong></p>
      
      <!-- 
        CONTOH INHERIT ATTRS:
        Kita kirim class="custom-margin" dan id="btn-spesial".
        Karena di MainButton sudah di set inheritAttrs: false dan v-bind="$attrs" di button,
        maka class dan id ini akan nempel di BUTTON nya, bukan di DIV pembungkusnya.
      -->
      <MainButton 
        :title="statusUser ? 'Non-aktifkan User' : 'Aktifkan User'" 
        :active="statusUser" 
        @click="gantiStatusUser"
        class="custom-shadow"
        id="btn-user-toggle"
      />

      <p style="font-size: 12px; color: gray; margin-top: 10px;">
        *Coba inspect element button diatas. Perhatikan id="btn-user-toggle" nempel di button, bukan di div wrapper.
      </p>
    </div>

    <!-- 16. V-MODEL MODIFIERS -->
    <div style="margin-top: 50px; border-top: 2px dashed black; padding-top: 20px;">

      <form @submit.prevent="alert('Terkirim!')" style="display: flex; flex-direction: column; gap: 10px;">
        
        <!-- TRIM: Otomatis hapus spasi di awal/akhir -->
        <div>
          <label>Nama: </label>
          <input v-model.trim="pendaftaran.nama" placeholder="Coba ketik spasi di awal..." />
          <p style="font-size: 16px; color: blue;">Hasil: "{{ pendaftaran.nama }}"</p>
        </div>

        <!-- NUMBER: Otomatis ubah string jadi number -->
        <div>
          <label>Umur: </label>
          <input v-model.number="pendaftaran.umur" type="number" placeholder="Umur anda..." />
          <p style="font-size: 16px; color: blue;">Tipe Data: {{ typeof pendaftaran.umur }}</p>
        </div>

        <!-- LAZY: Update data HANYA setelah kursor keluar (change event), bukan saat ngetik (input event) -->
        <div>
          <label>Deskripsi Diri: </label>
          <textarea v-model.lazy="pendaftaran.deskripsi" placeholder="Ketik lalu klik diluar..." style="width: 100%;"></textarea>
          <p style="font-size: 12px; color: blue;">Preview (Update saat blur): {{ pendaftaran.deskripsi }}</p>
        </div>

        <!--  VALUE BINDING (Radio) -->
        <div>
          <label>Pilih Paket:</label>
          <div style="display: flex; gap: 10px;">
            <label>
              <input type="radio" v-model="pendaftaran.paket" value="basic" /> Basic
            </label>
            <label>
              <input type="radio" v-model="pendaftaran.paket" value="premium" /> Premium
            </label>
            <!-- Value Binding Dinamis -->
            <label>
              <input type="radio" v-model="pendaftaran.paket" :value="'gold_member'" /> Gold (Dynamic Value)
            </label>
          </div>
          <p style="font-size: 12px; color: blue;">Paket terpilih: {{ pendaftaran.paket }}</p>
        </div>

      </form>
    </div>

    <!-- 17. slot -->
    <div style="margin-top: 50px; border-top: 2px dashed black; padding-top: 20px;">

      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        
        <!--  Default (Tidak ngirim apa-apa, pakai Fallback Content) -->
        <CardLayout />

        <!--  Mengisi Slot Utama (Default Slot) -->
        <CardLayout>
          <p>Ini adalah konten yang dikirim dari <strong>App.vue</strong> lewat Slot Utama!</p>
          <button>Klik Saya</button>
        </CardLayout>

        <!--  Mengisi Named Slots (Header, Footer) -->
        <CardLayout>
          <template #header>
            <h3 style="color: blue; margin: 0;">Judul Custom</h3>
          </template>

          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>

          <template #footer>
            <div style="display: flex; gap: 10px; ">
              <button style="background: red; color: white;">Hapus</button>
              <button style="background: blue; color: white;">Simpan</button>
            </div>
          </template>
        </CardLayout>

      </div>
    </div>

    <!-- 18. PROVIDE & INJECT -->
    <div style="margin-top: 50px; border-top: 2px dashed black; padding-top: 20px; padding-bottom: 50px;">
      
      <p>Theme : <strong>{{ themeApp }}</strong></p>
      <button @click="ubahTheme">Ganti</button>

      <div style="margin-top: 20px;">
        <p>Kotak dibawah ini adalah komponen <strong>GrandChild</strong>.</p>
        <p>Dia menerima data Theme & User langsung dari App.vue tanpa lewat Props!</p>
        
        <GrandChild />
      </div>
    </div>
    
</template>


<style>
#bungkus {
  background-color: gray;
  width: 200px;
  padding: 20px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;   
  gap: 10px;
  margin-top: 10px;
}

#tombol {
  background-color: aqua;        
  padding: 10px;
  border-radius: 5px;

  display: flex;
  gap: 10px;      
}
#nilai {
  background-color: black;
  padding: 3px 8px;
}

#form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 10px;
  background-color: green;
  padding: 20px;
  border-radius: 10px;
}

</style>

<style>
.label {
  display: inline-block;
  width: 80px; 
  font-weight: bold;
}
</style>


