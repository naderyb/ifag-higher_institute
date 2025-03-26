<template>
  <div>
    <DoubleNavbar />
    <!-- Main content -->
    <router-view />

    <!-- 👣 Footer -->
    <Footer />
  </div>
</template>

<style scoped>
body {
  background-color: white;
  color: #212529;
  font-family: 'poppins';
}

.btn-danger {
  background-color: #d90000;
  border: none;
}

.btn-danger:hover {
  background-color: #b80000;
}

h1,
h2,
h3,
h4 {
  color: #d90000;
  font-weight: 700;
}

</style>
<script setup>
import DoubleNavbar from './components/DoubleNavbar.vue'
import Footer from './components/Footer.vue'
</script>
