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
      <img src="/logo-ifag.jpg" class="me-3" style="width: 20vh" alt="Logo IFAG" />
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
            <a class="nav-link" href="#hero" @click.prevent="scrollToHero">Accueil</a>
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
          </li>

          <li class="nav-item"><a class="nav-link" href="#alumni">Nos Alumni</a></li>
          <li class="nav-item"><a class="nav-link" href="#actu">Actu IFAG</a></li>
          <li class="nav-item"><a class="nav-link" href="#vie-etudiante">Vie Étudiante</a></li>
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

<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

/**
 * Close the mobile navbar if it's open (Bootstrap collapse)
 */
const closeNavbar = () => {
  const navbarCollapse = document.querySelector('.navbar-collapse')
  if (navbarCollapse?.classList.contains('show')) {
    import('bootstrap/js/dist/collapse').then(({ default: Collapse }) => {
      const bsCollapse = Collapse.getInstance(navbarCollapse)
      bsCollapse?.hide()
    })
  }
}

/**
 * Scroll smoothly to the #hero section
 */
const scrollToHero = () => {
  const scroll = () => {
    const hero = document.querySelector('#hero')
    if (hero) {
      requestAnimationFrame(() => {
        hero.scrollIntoView({ behavior: 'smooth' })
        closeNavbar()
      })
    }
  }

  if (route.path === '/') {
    scroll()
  } else {
    router.push('/').then(() => {
      // Wait for DOM to update
      setTimeout(() => {
        scroll()
      }, 150)
    })
  }
}

/**
 * Initialize dropdowns and smooth scrolling
 */
onMounted(async () => {
  const { default: Dropdown } = await import('bootstrap/js/dist/dropdown')

  // Initialize all Bootstrap dropdowns
  document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(triggerEl => {
    new Dropdown(triggerEl)
  })

  // Smooth scroll for anchor links + close menu on link click
  const links = document.querySelectorAll('.navbar .nav-link, .dropdown-item')

  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href')

      if (href && href.startsWith('#')) {
        e.preventDefault()

        const target = document.querySelector(href)
        if (target) {
          requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: 'smooth' })
          })
        }
      }

      closeNavbar()
    })
  })
})
</script>

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
  content: '';
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
