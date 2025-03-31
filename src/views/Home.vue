<!-- eslint-disable vue/multi-word-component-names -->
<!-- views/Home.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section
      id="hero"
      class="hero-section position-relative text-center d-flex align-items-center justify-content-center"
      style="height: 100vh"
    >
      <video
        autoplay
        muted
        loop
        playsinline
        class="hero-video position-absolute w-100 h-100 object-fit-cover"
      >
        <source src="/ifag-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>

      <div class="glass-container text-white p-5 rounded" style="z-index: 2">
        <h1 class="display-4 fw-bold">Bienvenue à l'IFAG</h1>
        <p class="lead">Une école d'excellence pour votre avenir</p>
        <button @click="scrollToSection" class="btn btn-danger">Commençons</button>
      </div>
    </section>

    <div class="section-divider my-5"></div>
    <!-- DG Section -->
    <section ref="dgSection" class="py-5 bg-white">
      <div data-aos="fade-up" class="container d-flex flex-column flex-md-row align-items-center">
        <img
          src="/src/assets/nassim-lounes_DG.jpg"
          class="img-fluid rounded shadow me-md-4"
          alt="DG"
          style="max-width: 300px"
        />
        <div>
          <h2>Mot du Directeur Général</h2>
          <p>"Bref apres nchouf mr lounes wsh ygoul"</p>
        </div>
      </div>
    </section>
    <div class="section-divider my-5"></div>

    <!-- Nos Formations -->
    <section class="py-5 bg-light" id="formations">
      <div class="container">
        <h2 class="text-center mb-5">Nos Formations</h2>
        <div class="row g-4">
          <div
            class="col-md-6 col-lg-3"
            v-for="(formation, index) in formations"
            :key="index"
            data-aos="zoom-in"
          >
            <div class="card border-0 shadow-sm position-relative">
              <img :src="formation.image" class="card-img-top" :alt="formation.title" />
              <div class="card-body text-center">
                <h5 class="card-title">{{ formation.title }}</h5>
                <router-link
                  :to="`/formations/${formation.route}`"
                  class="btn btn-outline-danger mt-2"
                >
                  Découvrir la formation
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section-divider my-5"></div>

    <!-- Alumni Section -->
    <section class="py-5 bg-white" id="alumni">
      <div class="container">
        <h2 class="text-center mb-4">Ce que nos alumni pensent de nous</h2>
        <div class="d-flex overflow-auto gap-3 pb-3">
          <div
            class="card flex-shrink-0 shadow-sm"
            style="min-width: 250px; max-width: 250px"
            v-for="(alumni, index) in alumniList"
            :key="index"
            data-aos="fade-up"
          >
            <img :src="alumni.photo" class="card-img-top" :alt="alumni.name" />
            <div class="card-body">
              <h5 class="card-title">{{ alumni.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Promo {{ alumni.promo }} - {{ alumni.job }}
              </h6>
              <p class="card-text">{{ alumni.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section-divider my-5"></div>

    <!-- Actu IFAG Section -->
    <section class="py-5 bg-light" id="actu">
      <div class="container">
        <h2 class="text-center mb-4">Actu IFAG</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(post, index) in blogPosts" :key="index" data-aos="fade-up">
            <div class="card h-100 shadow-sm">
              <!-- Check if it's a video -->
              <video
                v-if="isVideo(post.image)"
                class="card-img-top"
                :src="post.image"
                autoplay
                muted
                loop
                playsinline
                style="height: 250px; object-fit: cover"
              ></video>

              <!-- Otherwise show an image -->
              <img v-else :src="post.image" class="card-img-top" :alt="post.title" />

              <div class="card-body">
                <h2>{{ post.date }}</h2>
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text" v-html="post.description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section-divider my-5"></div>

    <!-- Vie Étudiante Section -->
    <section class="py-5 bg-white" id="vie-etudiante">
      <div class="container">
        <h2 class="text-center mb-5">Notre Vie Étudiante</h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="club in clubs" :key="club.name" data-aos="zoom-in">
            <div class="card text-center shadow-sm">
              <img :src="club.logo" class="card-img-top mx-auto mt-3" style="max-width: 150px" />
              <div class="card-body">
                <h5 class="card-title">{{ club.name }}</h5>
                <p class="card-text">Fondé le {{ club.date }}</p>
                <a :href="club.instagram" target="_blank">
                  <button class="btn btn-outline-danger">Découvrez-le</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider my-5"></div>
    <!-- IFAG en CHIFFRES -->
    <section class="py-5 bg-light" id="chiffres" ref="chiffresSection">
      <div class="container text-center">
        <h2 class="mb-4">IFAG en Chiffres</h2>
        <div class="row justify-content-center">
          <div class="col-md-3" data-aos="fade-up">
            <h3 v-if="chiffresVisible"><CountUp :end-val="32" duration="3" />+</h3>
            <p>ans d'expérience & d'expertise</p>
          </div>
          <div class="col-md-3" data-aos="fade-up" data-aos-delay="100">
            <h3 v-if="chiffresVisible"><CountUp :end-val="8000" duration="3" />+</h3>
            <p>Anciens diplômés</p>
          </div>
          <div class="col-md-3" data-aos="fade-up" data-aos-delay="200">
            <h3 v-if="chiffresVisible"><CountUp :end-val="600" duration="3" />+</h3>
            <p>Étudiants actuels</p>
          </div>
          <div class="col-md-3" data-aos="fade-up" data-aos-delay="300">
            <h3 v-if="chiffresVisible"><CountUp :end-val="48" duration="3" />+</h3>
            <p>Entreprises partenaires</p>
          </div>
        </div>
      </div>
    </section>
    <div class="section-divider my-5"></div>
  </div>

  <!-- Partenaires Académiques -->
  <section class="py-5 bg-white">
    <div class="container">
      <h2 class="text-center mb-4">Nos Partenaires Académiques</h2>
      <div class="scroll-container d-flex align-items-center gap-5">
        <img
          src="/partenaires-academiques/mesrs.png"
          alt="ministere des études supérieures et de la recherche scientifique"
          class="partner-logo"
        />
        <img src="/partenaires-academiques/GAAN.png" alt="GAAN" class="partner-logo" />
        <img src="/partenaires-academiques/ENSSEA.png" alt="ENSSEA" class="partner-logo" />
        <img src="/partenaires-academiques/ensm.png" alt="ensm" class="partner-logo" />
      </div>
    </div>
  </section>
  <div class="section-divider my-5"></div>
  <!-- Partenaires Entreprises -->
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">Nos Partenaires Entreprises</h2>
      <div class="scroll-container d-flex align-items-center gap-5">
        <img src="/partenaires-entreprises/ALRIM.png" alt="ALRIM" class="partner-logo" />
        <img src="/partenaires-entreprises/ABC.png" alt="Bank ABC" class="partner-logo" />
        <img
          src="/partenaires-entreprises/cnma.png"
          alt="CNMA Mutualité Agricole"
          class="partner-logo"
        />
        <img src="/partenaires-entreprises/danone.png" alt="DANONE" class="partner-logo" />
        <img src="/partenaires-entreprises/hikma.png" alt="hikma" class="partner-logo" />
        <img src="/partenaires-entreprises/kpmg.png" alt="KPMG" class="partner-logo" />
        <img src="/partenaires-entreprises/pfizer.png" alt="PFIZER" class="partner-logo" />
        <img src="/partenaires-entreprises/saa.png" alt="saa Assurances" class="partner-logo" />
        <img
          src="/partenaires-entreprises/sonelgaz.png"
          alt="sonelgaz - سونلغاز"
          class="partner-logo"
        />
        <img
          src="/partenaires-entreprises/yalidine.png"
          alt="YALIDINE EXPRESS"
          class="partner-logo"
        />
      </div>
    </div>
  </section>

  <div class="section-divider my-5"></div>
  <!-- Foire Aux Questions -->
  <section id="faq" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4 fw-bold" style="color: #d90000">FAQ</h2>

      <div class="accordion" id="faqAccordion">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="accordion-item mb-3 border-0 shadow-sm rounded-3"
        >
          <h2 class="accordion-header">
            <button
              class="accordion-button fw-semibold fs-5 collapsed"
              type="button"
              :data-bs-toggle="'collapse'"
              :data-bs-target="'#faq-' + index"
            >
              {{ item.question }}
            </button>
          </h2>
          <div
            :id="'faq-' + index"
            class="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div class="accordion-body">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <button
    v-if="showBackToTop"
    @click="scrollToTop"
    class="btn btn-danger position-fixed"
    style="bottom: 30px; right: 30px; z-index: 999; border-radius: 50%; width: 50px; height: 50px"
  >
    ↑
  </button>
</template>

<style scoped>
body {
  overflow-x: hidden;
}

.hero-section {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.glass-container {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 700px;
}

.hero-video {
  top: 0;
  left: 0;
  z-index: 1;
  object-fit: cover;
}

.section-divider {
  height: 2px;
  background: linear-gradient(to right, transparent, #d90000, transparent);
  width: 60%;
  margin: 0 auto;
  border-radius: 2px;
  opacity: 0.6;
}

h2 {
  color: #d90000;
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

h2::after {
  content: '';
  display: block;
  height: 3px;
  width: 60px;
  background-color: #d90000;
  margin: 8px auto 0;
  border-radius: 3px;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1.5s ease-in-out forwards;
}

.scroll-container {
  overflow-x: auto;
  white-space: nowrap;
  padding: 1rem 0;
  scroll-behavior: smooth;
  max-width: 100%;
}

.partner-logo {
  max-height: 80px;
  object-fit: contain;
  flex-shrink: 0;
  max-width: 100%;
}

.scroll-container::-webkit-scrollbar {
  height: 6px;
}
.scroll-container::-webkit-scrollbar-thumb {
  background-color: #d90000;
  border-radius: 10px;
}

.container {
  overflow-x: hidden;
}

.accordion-button {
  background-color: #ffffff;
  color: #333;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  border-radius: 10px !important;
}

.accordion-button:focus {
  box-shadow: none;
}

.accordion-button:hover {
  background-color: #f8f9fa;
  transform: scale(1.02);
}

.accordion-body {
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  padding: 1rem 1.25rem;
  color: #555;
}
.accordion-item {
  border: none;
}
.accordion-item::before {
  content: '';
  display: block;
  height: 2px;
  background: linear-gradient(to right, transparent, #d90000, transparent);
  width: 100%;
  margin: 0 auto;
  border-radius: 2px;
}
.accordion-item::after {
  content: '';
  display: block;
  height: 2px;
  background: linear-gradient(to right, transparent, #d90000, transparent);
  width: 100%;
  margin: 0 auto;
  border-radius: 2px;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .glass-container {
    max-width: 85%;
    padding: 1rem;
    backdrop-filter: blur(8px);
    font-size: 0.5rem;
  }
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CountUp from 'vue-countup-v3'

const dgSection = ref(null)
const chiffresVisible = ref(false)
const chiffresSection = ref(null)
const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        chiffresVisible.value = true
        observer.disconnect()
      }
    },
    {
      threshold: 0.3,
    },
  )

  if (chiffresSection.value) {
    observer.observe(chiffresSection.value)
  }
})

function scrollToSection() {
  dgSection.value.scrollIntoView({ behavior: 'smooth' })
}

// Check if the post media is a video
function isVideo(filePath) {
  return filePath.endsWith('.mp4') || filePath.endsWith('.webm') || filePath.endsWith('.ogg')
}

const formations = [
  {
    title: 'Licence Commerciale & Marketing -Bac+3-',
    image: '/formations/actionCommercial.png',
    route: 'action-commerciale',
  },
  {
    title: 'Licence Informatique -Bac+3-',
    image: '/formations/informatique.png',
    route: 'informatique',
  },
  {
    title: 'Licence en Finance & Comptabilité -Bac+3-',
    image: '/formations/financeComptabilite.png',
    route: 'finance-et-comptabilite',
  },
  {
    title: 'Master Marketing & Management -Bac+5-',
    image: '/formations/MasterMarketingMarketing.png',
    route: 'master-marketing-management',
  },
]

const alumniList = [
  {
    name: 'alumni',
    photo: '/alumni/alumni.png',
    promo: '2021',
    job: '#',
    message: 'apres nchouf wsh ygoulo hedou tni',
  },
  {
    name: 'alumni',
    photo: '/alumni/alumni.png',
    promo: '2022',
    job: '#',
    message: 'apres nchouf wsh ygoulo hedou tni',
  },
  {
    name: 'alumni',
    photo: '/alumni/alumni.png',
    promo: '2020',
    job: '#',
    message: 'apres nchouf wsh ygoulo hedou tni',
  },
]

const blogPosts = [
  {
    date: '08/10/2024',
    title: 'Journée Intégration et Orientation',
    image: '/actu/integrationOrientation.png',
    description:
      "Programme d'intégration conçu pour préparer les nouveaux étudiants au mieux à leur parcours académique et à leur immersion dans la vie de notre établissement.",
  },
  {
    date: '24/11/2024',
    title: "Journée de l'Entrepreneuriat",
    image: '/actu/Journée-Entreprenariat.jpeg',
    description:
      'Nous avons eu le plaisir d\'accueillir le co-fondateur et CEO de <span style="color: #FBBE0D; text-shadow: 0 0 10px #FBBE0D; font-weight: bold;">Oued</span><span style="color: #4889F4; text-shadow: 0 0 10px #4889F4; font-weight: bold;">Kniss</span> Monsieur <span style="font-weight: bold;">BOUZID Mehdi Mounis</span> qui à partager avec nous et nos étudiants son expérience et son parcours professionnel.',
  },
  {
    date: '13/03/2025',
    title: "لَمَّةْ l'ifag",
    image: '/actu/lemma-video.mp4',
    description:
      'Une لَمَّةْ conviviale et festive et une collecte de dons pour les orphelins en collaboration avec <span style="color: #050DEB; text-shadow: 0 0 10px #050DEB; font-weight: bold;">Nexus Club</span>, <span style="color: #274199; text-shadow: 0 0 10px #274199; font-weight: bold;">MS Club</span> et <span style="color: brown; text-shadow: 0 0 10px brown; font-weight: bold;">in2art</span> réunissant étudiants, professeurs et personnels pour un iftar, une sahra et une cérémonie de récompense des majeurs.',
  },
]

const clubs = [
  {
    name: 'MS Club',
    date: '03/12/2022',
    logo: '/clubs/logo-ms.png',
    instagram: 'https://www.instagram.com/msclub.insag/',
  },
  {
    name: 'Nexus Club',
    date: '18/12/2023',
    logo: '/clubs/logo-nexus.png',
    instagram: 'https://www.instagram.com/nexus.club_/',
  },
  {
    name: 'in2art',
    date: '17/09/2024',
    logo: '/clubs/logo-in2art.png',
    instagram: 'https://www.instagram.com/in2.art_insag/',
  },
]

const faqItems = ref([
  {
    question: 'Est-ce que vos formations sont agrées par le MESRS?',
    answer:
      "Oui, toutes nos formations sont agrées par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique (arrêté n° 341 du 11 avril 2018).",
  },
  {
    question: "Est-ce que le diplôme est reconnu a l'étranger?",
    answer:
      "Oui, nos diplômes sont reconnus à l'international et vous ouvrent des portes dans de nombreux pays.",
  },
  {
    question: "Quelles sont les conditions d'admission?",
    answer: 'Il faut avoir le baccalauréat ou un diplôme équivalent.',
  },
  {
    question: 'Quels sont les frais de scolarité?',
    answer:
      "Les frais de scolarité varient selon la formation choisie. Pour plus d'informations, veuillez nous contacter directement.",
  },
])
</script>
