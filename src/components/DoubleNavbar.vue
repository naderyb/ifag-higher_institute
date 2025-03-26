<template>
  <!-- 🔝 Mini navbar -->
  <div class="bg-dark text-white py-1 small-navbar">
    <div class="container d-flex justify-content-between">
      <div>
        <a href="/Recrutement" class="text-white me-3 text-decoration-none">Recrutement</a>
        <a href="/Contact" class="text-white text-decoration-none">Contact</a>
      </div>
    </div>
  </div>

  <!-- 🔻 Navbar principale -->
  <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top custom-navbar">
    <div class="container">
      <img src="/logo-ifag.jpg" class="me-3" style="width: 20vh;" alt="Logo IFAG" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Accueil</router-link>
          </li>

          <!-- ✅ Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#formations"
              role="button"
              id="formationsDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Nos Formations
            </a>
            <ul class="dropdown-menu" aria-labelledby="formationsDropdown">
              <li><a class="dropdown-item" href="#formation">Licence Action Commerciale</a></li>
              <li><a class="dropdown-item" href="#formation">Licence Informatique</a></li>
              <li><a class="dropdown-item" href="#formation">Licence Finance & Comptabilité</a></li>
            </ul>
          </li>

          <li class="nav-item"><a class="nav-link" href="#alumni">Nos Alumni</a></li>
          <li class="nav-item"><a class="nav-link" href="#actu">Actu IFAG</a></li>
          <li class="nav-item"><a class="nav-link" href="#vie">Vie Étudiante</a></li>
          <li class="nav-item"><a class="nav-link" href="#chiffres">IFAG en chiffres</a></li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
        <img src="/logo-ifag.jpg" alt="Logo IFAG" height="40" />
      </div>
    </div>
  </nav>
</template>
//problem: dropdown menu of formation doesnt work,
//the section of the navbar doesnt work correctly
//and i need to focus tomorow on formation thing
//mzl endi problem m3a la video size t3ha kbir bah ndirha f github
//du coup lzm nchouf solution khlaf mn ghir youtub psq nn bonwi
<style scoped>
.small-navbar {
  font-size: 14px;
}

.custom-navbar .nav-link {
  color: #d90000 !important;
  font-weight: 500;
  position: relative;
  padding: 10px 15px;
  transition: color 0.3s ease;
}

.custom-navbar .nav-link::after {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 15px;
  width: 0;
  height: 2px;
  background-color: #d90000;
  transition: width 0.3s ease;
}

.custom-navbar .nav-link:hover,
.custom-navbar .nav-link:focus {
  color: #aa0000 !important;
}

.custom-navbar .nav-link:hover::after {
  width: calc(100% - 30px);
}

/* Dropdown */
.dropdown-menu {
  border: 1px solid #eee;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
}

.dropdown-item {
  padding: 10px 15px;
  transition: background 0.3s ease;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}
</style>

<script setup>
import { onMounted } from 'vue'
import * as bootstrap from 'bootstrap'

onMounted(() => {
  // Active dropdown
  const dropdownTriggerList = document.querySelectorAll('[data-bs-toggle="dropdown"]')
  dropdownTriggerList.forEach(triggerEl => {
    new bootstrap.Dropdown(triggerEl)
  })

  // Scroll to top + auto-close menu
  const links = document.querySelectorAll('.navbar .nav-link, .dropdown-item')
  links.forEach(link => {
    link.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })

      const navbarCollapse = document.querySelector('.navbar-collapse')
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse)
        if (bsCollapse) bsCollapse.hide()
      }
    })
  })
})
</script>
