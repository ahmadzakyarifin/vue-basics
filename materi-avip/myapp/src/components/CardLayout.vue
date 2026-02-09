<script setup>

</script>

<template>
  <div class="card">
    
    <!-- NAMED SLOT (Slot Bernama) -->
    <!-- Gunanya: Untuk menaruh konten spesifik di 'rak' tertentu (header) -->
    <div class="card-header">
      <slot name="header">
        <!-- FALLBACK CONTENT (Konten Cadangan) -->
        <!-- Ini akan muncul KALO parent tidak mengisi slot header -->
        <h3>Default Title</h3>
      </slot>
    </div>

    <!--  DEFAULT SLOT (Slot Utama) -->
    <!-- Gunanya: Untuk konten utama yang tidak diberi nama -->
    <div class="card-body">
      <slot>
        <p>Isi konten default jika tidak ada yang dikirim.</p>
      </slot>
    </div>

    <!-- NAMED SLOT (Footer) -->
    <div class="card-footer">
      <slot name="footer">
        <button>Close</button>
      </slot>
    </div>

  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  max-width: 300px;
  
  display: flex;
  flex-direction: column;
  min-height: 200px;
}

.card-header {
  background-color: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-weight: bold;
}

.card-body {
  padding: 15px;
  /* Body akan membesar (grow) mengisi ruang kosong, mendorong footer ke bawah */
  flex: 1;
}

.card-footer {
  background-color: #f8f9fa;
  padding: 10px;
  border-top: 1px solid #eee;
  text-align: right;
}


</style>

<!-- 
    1. APA ITU SLOT?
       - Slot adalah "LUBANG" atau "TEMPAT KOSONG" di komponen child.
       - Tujuannya: Biar PARENT bisa "MENGISI" konten HTML ke dalam Child.
       - Kalau Props kirim DATA (String, Number, Boolean).
       - Kalau Slot kirim UI / ELEMENT HTML (Button, Image, Div, dll).

    2. DEFAULT SLOT (<slot>)
       - Lubang utama. Apapun yang ditaruh di antara tag <CardLayout>...</CardLayout> masuk kesini.

    3. NAMED SLOT (<slot name="header">)
       - Lubang pesanan khusus.
       - Parent harus bilang "Ini buat header ya" pakai <template #header>.

    4. FALLBACK CONTENT
       - Isi default di dalam tag <slot>...</slot>.
       - Kalau Parent tidak mengisi slotnya, maka konten default ini yang muncul.
-->
