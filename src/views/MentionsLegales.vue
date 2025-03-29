<template>
  <div class="legal-page container py-5">
    <div class="fade-in">
      <h1 class="title mb-4">Mentions légales</h1>

      <section class="legal-section">
        <h5 class="section-title">Éditeur du site</h5>
        <p>
          <strong>Institut de Formation en Assurances et Gestion (IFAG)</strong><br />
          Adresse: 1 Rue Belle Vue, Lot Djnane Boursas, Hydra 16035<br />
          Téléphone: 023 48 01 01 <br />
          Email: contact@insag.edu.dz
        </p>
      </section>

      <div class="section-divider my-5"></div>

      <section class="legal-section">
        <h5 class="section-title">Développeur</h5>
        <p>Nexus Club</p>
      </section>

      <div class="section-divider my-5"></div>

      <section class="legal-section">
        <h5 class="section-title">Propriété intellectuelle</h5>
        <p>
          Le contenu du site (textes, images, graphismes, logo...) est la propriété exclusive de
          l'IFAG sauf mention contraire. Toute reproduction, distribution ou utilisation sans
          autorisation est strictement interdite.
        </p>
      </section>

      <div class="section-divider my-5"></div>

      <section class="legal-section">
        <h5 class="section-title">Responsabilité</h5>
        <p>
          Nous faisons de notre mieux pour fournir des informations fiables, mais des erreurs
          peuvent survenir. L'IFAG ne peut être tenue responsable de l'utilisation faite des
          informations présentes sur ce site.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
// Nothing here for now – add SEO/meta later if needed
</script>

<style scoped>
.legal-page {
  color: #444;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  animation: fadeInUp 0.7s ease;
}

.title {
  color: #d90000;
  font-weight: 700;
  font-size: 2.5rem;
  border-bottom: 2px solid #d90000;
  display: inline-block;
  padding-bottom: 0.3rem;
}

.section-title {
  color: #d90000;
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: #d90000;
  font-weight: 700;
  border-bottom: 2px solid #d90000;
  display: inline-block;
  padding-bottom: 0.3rem;
}

.legal-section p {
  line-height: 1.7;
  margin: 0;
}

.section-divider {
  height: 2px;
  background: linear-gradient(to right, transparent, #d90000, transparent);
  width: 80%;
  border-radius: 2px;
  opacity: 0.6;
}

/* Smooth fade-in animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeInUp 0.7s ease forwards;
}
</style>
