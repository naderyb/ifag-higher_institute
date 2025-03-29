<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="legal-page container py-5">
    <div class="fade-in">
      <h1 class="title mb-4">Conditions générales d'utilisation</h1>

      <section class="legal-section">
        <h5 class="section-title">Acceptation des conditions</h5>
        <p>
          En accédant à ce site, vous acceptez sans réserve les présentes conditions générales
          d'utilisation.
        </p>
      </section>

      <div class="section-divider my-5"></div>

      <section class="legal-section">
        <h5 class="section-title">Accès au site</h5>
        <p>
          Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
          Tous les frais liés à l'accès (matériel, logiciels, connexion Internet...) sont à la
          charge de l'utilisateur.
        </p>
      </section>

      <div class="section-divider my-5"></div>

      <section class="legal-section">
        <h5 class="section-title">Modification des CGU</h5>
        <p>
          L'IFAG se réserve le droit de modifier les présentes conditions à tout moment. Les
          utilisateurs sont donc invités à les consulter régulièrement.
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
