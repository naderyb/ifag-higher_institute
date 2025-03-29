<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="legal-page container py-5">
    <div class="fade-in">
      <h1 class="title mb-4">Politique de confidentialité</h1>

      <section class="legal-section">
        <h5 class="section-title">Collecte des données</h5>
        <p>
          Nous recueillons uniquement les informations nécessaires au bon fonctionnement de notre site.
          Ces données ne sont jamais revendues ni partagées à des tiers sans consentement.
        </p>
      </section>

      <div class="section-divider my-5"></div>

      <section class="legal-section">
        <h5 class="section-title">Utilisation des données</h5>
        <p>
          Les données collectées sont utilisées pour vous offrir une meilleure expérience utilisateur,
          améliorer nos services et vous contacter si nécessaire.
        </p>
      </section>

      <div class="section-divider my-5"></div>

      <section class="legal-section">
        <h5 class="section-title">Droits de l'utilisateur</h5>
        <p>
          Vous avez le droit d'accéder, de modifier ou de supprimer vos données personnelles à tout moment.
          Pour cela, vous pouvez nous contacter à : <strong>contact@insag.edu.dz</strong>
        </p>
      </section>
    </div>
  </div>
</template>

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
  font-weight: 700;
  border-bottom: 2px solid #d90000;
  display: inline-block;
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
