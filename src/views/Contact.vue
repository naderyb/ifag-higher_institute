<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="contact-section py-5 bg-light text-dark min-vh-100 d-flex align-items-center">
    <div class="container">
      <div class="text-center mb-5 animate__animated animate__fadeInDown">
        <h2 class="fw-bold mb-2">📬 Contactez-nous</h2>
        <div class="underline mx-auto"></div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="p-5 rounded-4 shadow-lg bg-white animate__animated animate__fadeInUp">
            <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
              <div class="mb-4">
                <label class="form-label fw-semibold">Nom complet</label>
                <input
                  v-model="form.name"
                  type="text"
                  class="form-control form-control-lg rounded-pill shadow-sm input-style"
                  placeholder="Nom et prénom"
                  required
                />
              </div>
              <div class="mb-4">
                <label class="form-label fw-semibold">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control form-control-lg rounded-pill shadow-sm input-style"
                  placeholder="Nom d'utilisateur@domain"
                  required
                />
              </div>
              <div class="mb-4">
                <label class="form-label fw-semibold">Sujet</label>
                <input
                  v-model="form.subject"
                  type="text"
                  class="form-control form-control-lg rounded-pill shadow-sm input-style"
                  placeholder="Pourquoi souhaitez-vous nous contacter?"
                  required
                />
              </div>
              <div class="mb-4">
                <label class="form-label fw-semibold">Message</label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  class="form-control form-control-lg rounded-4 shadow-sm input-style"
                  placeholder="Expliquez-nous en détail votre demande"
                  required
                ></textarea>
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-lg px-5 py-2 rounded-pill text-white btn-style"
                >
                  Envoyer ✉️
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = () => {
  const { name, email, subject, message } = form

if (!name || !email || !subject || !message ) {
  Swal.fire({
    icon: 'error',
    title: 'Champs requis manquants',
    text: 'Veuillez remplir tous les champs obligatoires.',
    confirmButtonColor: '#d90000'
  })
  return
}

  if (!isValidEmail(form.email)) {
    Swal.fire({
      icon: 'error',
      title: 'Email invalide',
      text: 'Veuillez entrer une adresse email valide.',
      confirmButtonColor: '#d90000'
    })
    return
  }

  Swal.fire({
    icon: 'success',
  title: 'Message envoyé !',
  html: `Merci <span style="color: #d90000; text-shadow: 0 0 5px #d90000;">${form.name}</span>, votre demande a bien été envoyée.`,
  confirmButtonColor: '#d90000'
})
}
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

h2 {
  color: #d90000;
}

.underline {
  width: 60px;
  height: 5px;
  background-color: #d90000;
  border-radius: 999px;
  transition: 0.3s ease;
}

.input-style {
  transition: all 0.3s ease;
}

.input-style:focus {
  border-color: #d90000;
  box-shadow: 0 0 10px rgba(217, 0, 0, 0.2);
}

::placeholder {
  color: #999;
  font-style: italic;
  opacity: 0.9;
  transition: color 0.3s ease;
  font-size: medium;
}

input:focus::placeholder,
textarea:focus::placeholder {
  color: #ccc;
}

input::placeholder,
textarea::placeholder {
  color: #999;
  font-style: italic;
  font-size: 0.95rem;
}

textarea {
  resize: none;
}

input[type="file"]::file-selector-button {
  background-color: #d90000;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-right: 10px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease;
}

input[type="file"]::file-selector-button:hover {
  background-color: #b00000;
  box-shadow: 0 0 10px rgba(217, 0, 0, 0.3);
}

.btn-style {
  background-color: #d90000;
  transition: all 0.3s ease;
}

.btn-style:hover {
  background-color: #b00000;
  box-shadow: 0 0 15px rgba(217, 0, 0, 0.4);
  transform: translateY(-2px);
}
</style>
