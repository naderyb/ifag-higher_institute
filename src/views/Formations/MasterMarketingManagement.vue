<template>
  <section class="formation-detail position-relative text-white">
    <div class="bg-overlay"></div>
    <div class="container py-5 position-relative" data-aos="fade-up">
      <h2 class="text-center mb-4 text-danger fw-bold">Master Marketing & Management</h2>

      <div class="row g-5">
        <!-- LEFT SIDE: Summary Info -->
        <div class="col-md-5">
          <div class="p-4 glass-card rounded" data-aos="fade-right">
            <h4 class="mb-3 text-danger">Informations Clés</h4>
            <ul class="list-unstyled">
              <li v-for="(item, index) in infos" :key="index">
                <strong>{{ item.label }} :</strong> {{ item.value }}
              </li>
            </ul>
            <button class="btn btn-outline-light mt-4 w-100" @click="showForm = true">
              Télécharger la brochure
            </button>
          </div>
        </div>

        <!-- RIGHT SIDE: Description -->
        <div class="col-md-7" data-aos="fade-left">
          <div class="glass-card p-4 rounded">
            <h4 class="text-danger mb-3">À propos de cette formation</h4>
            <p>{{ description }}</p>
            <div class="mt-4" v-for="(section, i) in sections" :key="i">
              <h5 class="section-title">{{ section.title }}</h5>
              <ul v-if="section.list">
                <li v-for="(item, j) in section.content" :key="j">{{ item }}</li>
              </ul>
              <p v-else>{{ section.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal-backdrop" v-if="showForm" @click="closeForm">
      <div class="modal-content bg-white p-4 rounded shadow" @click.stop data-aos="zoom-in">
        <h5 class="mb-3 text-danger">Télécharger la brochure</h5>
        <form @submit.prevent="submitForm">
          <div class="mb-2">
            <input type="text" v-model="form.nom" class="form-control" placeholder="Nom" required />
          </div>
          <div class="mb-2">
            <input
              type="text"
              v-model="form.prenom"
              class="form-control"
              placeholder="Prénom"
              required
            />
          </div>
          <div class="mb-2">
            <input
              type="email"
              v-model="form.email"
              class="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div class="mb-3">
            <select v-model="form.niveau" class="form-select" required>
              <option disabled value="">Niveau d'études</option>
              <option>Je suis en Terminale</option>
              <option>Je viens d'avoir mon Bac</option>
              <option>Bac +2</option>
              <option>Bac +3</option>
            </select>
          </div>
          <div class="text-end">
            <button type="button" class="btn btn-secondary me-2" @click="closeForm">Annuler</button>
            <button type="submit" class="btn btn-danger">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="successMessage" class="success-toast" data-aos="fade-down">
      {{ successMessage }}
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ActionCommerciale',
  data() {
    return {
      showForm: false,
      form: {
        nom: '',
        prenom: '',
        email: '',
        niveau: '',
      },
      infos: [
        { label: 'Durée', value: '2 ans' },
        { label: 'Niveau', value: 'Bac +5' },
        { label: 'Type de diplôme', value: 'Master' },
        { label: 'Rythme', value: '3j/mois' },
        { label: 'Langue', value: 'Français' },
      ],
      description:
        'Le Master en Marketing Management allie théorie et pratique pour préparer aux défis actuels et futurs de l’entreprise. Il offre des outils modernes, des études de cas et des mises en situation avec des professionnels, favorisant une insertion réussie dans tous secteurs.',
      sections: [
        {
          title: 'Objectifs pédagogiques',
          list: true,
          content: [
            'Bases solides en gestion, stratégie commerciale et marketing.',
            'Maîtrise du marketing digital et des outils modernes.',
            'Adaptabilité à tous les secteurs d’activité.',
            'Vision 360° du marketing.',
          ],
        },
        {
          title: 'Débouchés',
          list: true,
          content: [
            'Managers-entrepreneurs en mesure d’exercer des responsabilités.',
            'Experts et consultants en marketing et management au sein des entreprises, cabinets de conseil et autres organisations.',
            'Cadres d’entreprises spécialisés dans la gestion stratégique ou dans les politiques et stratégies marketing.',
            'Responsables opérationnels chargés de la mise en œuvre de politiques marketing.',
            'Responsable digital, e-marketer, etc',
          ],
        },
      ],
    }
  },
  methods: {
    closeForm() {
      this.showForm = false
    },
    isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(email)
    },
    submitForm() {
      const { nom, prenom, email, niveau } = this.form

      if (!nom || !prenom || !email || !niveau) {
        Swal.fire({
          icon: 'error',
          title: 'Champs manquants',
          text: 'Veuillez remplir tous les champs obligatoires.',
          confirmButtonColor: '#d90000',
        })
        return
      }

      if (!this.isValidEmail(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Email invalide',
          text: 'Veuillez entrer une adresse email valide.',
          confirmButtonColor: '#d90000',
        })
        return
      }

      // ✅ Success message
      Swal.fire({
        icon: 'success',
        title: 'Brochure envoyée !',
        html: `Merci <span style="color: #d90000; text-shadow: 0 0 5px #d90000;">${nom} ${prenom}</span>,nous vous contacterons bientôt.`,
        confirmButtonColor: '#d90000',
      })

      // Reset & close form
      this.form = {
        nom: '',
        prenom: '',
        email: '',
        niveau: '',
      }

      setTimeout(() => {
        this.closeForm()
      }, 800)
    },
  },
}
</script>

<style scoped>
.formation-detail {
  background: url('/MasterMktMgt/Master.png') center bottom / 100% no-repeat fixed;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  position: relative;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  z-index: 0;
  margin-bottom: -50px;
  transition: background-size 0.3s ease;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.formation-detail h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}
.formation-detail h4 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #dc3545;
}

.section-title {
  color: #ffb3b3; /* Light red/pinkish for better visibility */
  font-weight: 600;
  font-size: 1.25rem;
  display: inline-block;
  padding-bottom: 5px;
  border-bottom: 2px solid #dc3545; /* Underline */
  margin-bottom: 1rem;
}

.formation-detail p {
  font-size: 1rem;
  line-height: 1.6;
}

.formation-detail ul {
  list-style-type: none;
  padding-left: 0;
}

.formation-detail ul li {
  margin-bottom: 10px;
}

.formation-detail .btn-outline-light {
  border-color: rgba(255, 255, 255, 0.5);
}

.formation-detail .btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.7);
  z-index: 1;
}

.formation-detail .container {
  position: relative;
  z-index: 2;
}

.formation-detail .row {
  position: relative;
  z-index: 2;
}

.glass-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  will-change: transform;
  transform: translateZ(0);
}

.stats h3 {
  font-size: 2rem;
  margin-bottom: 0;
}
.stats p {
  font-size: 0.9rem;
  margin: 0;
}

.modal-backdrop {
  position: fixed;
  z-index: 1050;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-content h5 {
  color: #dc3545;
}

.modal-content form {
  display: flex;
  flex-direction: column;
}

.modal-content {
  width: 100%;
  max-width: 500px;
}

.modal-content input,
.modal-content select {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.modal-content input:focus,
.modal-content select:focus {
  border-color: #dc3545;
  outline: none;
}

.success-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(40, 167, 69, 0.95); /* Bootstrap green with transparency */
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 1rem;
  z-index: 9999;
  animation: slideFade 0.5s ease;
}

@keyframes slideFade {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@media (max-width: 991px) {
  .formation-detail {
    background-size: cover; /* Zoom moins fort */
    background-position: center bottom; /* Toujours focus sur le bas */
    background-attachment: scroll; /* Fixé crée parfois des bugs sur mobile */
    backdrop-filter: none;
  }
  .formation-detail .bg-overlay {
    background: rgba(20, 20, 20, 0.5);
  }
  .formation-detail .container {
    padding: 20px;
  }
  .formation-detail h2 {
    font-size: 2rem;
  }
  .formation-detail h4 {
    font-size: 1.5rem;
  }
  .formation-detail h5 {
    font-size: 1.2rem;
  }
  .formation-detail p {
    font-size: 0.9rem;
  }
  .formation-detail .btn {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
  .formation-detail .modal-content {
    width: 90%;
  }
  .formation-detail .modal-content input,
  .formation-detail .modal-content select {
    padding: 8px;
  }
  .formation-detail .modal-content input:focus,
  .formation-detail .modal-content select:focus {
    border-color: #dc3545;
    outline: none;
  }
  .formation-detail .modal-content form {
    display: flex;
    flex-direction: column;
  }
}
</style>
