<template>
  <div class="dashboard-layout">
    <div class="sidebar-area">
      <router-view name="sidebar" />
    </div>
    <div class="content-area">
      <main>
        <router-view name="main" />
      </main>
      <footer>
        <router-view name="footer" />
      </footer>
    </div>
  </div>
</template>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  font-family: sans-serif;
  margin-top: 30px;
}

.sidebar-area {
  width: 250px;
  background-color: #d70c0c; 
  border-right: 1px solid #ccc;
}

.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  
}

main {
  flex: 1;
  padding: 20px;
  background-color: #1bbb1b; 
  
  display: flex;
  justify-content: center; 
  align-items: center;     
  flex-direction: column; 
}

footer {
  padding: 15px;
  text-align: center;
  background-color: #2e2e8e;
  border-top: 1px solid #2b768f;
}
</style>