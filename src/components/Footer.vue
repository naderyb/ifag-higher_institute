<!-- eslint-disable vue/multi-word-component-names -->
<!-- components/Footer.vue -->
<template>
  <footer class="footer-custom text-white pt-4 pb-2 mt-5 shadow-lg">
    <div class="container d-flex justify-content-between flex-wrap gap-4">
      <!-- Infos IFAG -->
      <div class="footer-col">
        <img src="/ifag-logo-blanc.png" alt="IFAG Logo" height="60" class="mb-3" />
        <h5 class="fw-bold mb-2">Contact IFAG</h5>
        <p class="mb-1">📞 023 48 01 01</p>
        <p class="mb-1">📱 +213 770 24 18 55</p>
        <p class="mb-1">📱 +213 770 51 20 64</p>
        <p class="mb-1">📱 +213 770 76 11 65</p>
      </div>

      <!-- INSAG + Map -->
      <div class="footer-col text-end ps-lg-4 border-start border-light">
        <a href="https://insag-group-link.com" class="text-white d-block mb-2">
          <img src="/insag-logo.png" alt="INSAG" height="50" />
        </a>
        <p class="mb-1">📧 contact@insag.edu.dz</p>
        <p class="mb-2">📍 Notre emplacement :</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12787.238311649604!2d3.012273819860672!3d36.75114155802229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadd77880d2cf%3A0x9d708318b0ee3541!2sIFAG%20-%20Universit%C3%A9%20priv%C3%A9e%20-%20Groupe%20INSAG!5e0!3m2!1sen!2sdz!4v1742757240170!5m2!1sen!2sdz"
          width="300"
          height="200"
          style="border: 0; border-radius: 12px; box-shadow: 0 0 10px rgba(255, 255, 255, 0.3)"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <!-- Réseaux sociaux -->
    <div class="text-center my-3">
      <p class="mb-2">Suivez-nous sur les réseaux sociaux</p>
      <div class="d-flex justify-content-center gap-3">
        <a href="https://www.facebook.com/ifagdz" target="_blank" class="text-white fs-4 social-icon">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/ifagdz" target="_blank" class="text-white fs-4 social-icon">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@ifagdz" target="_blank" class="text-white fs-4 social-icon">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://www.tiktok.com/@ifagdz" target="_blank" class="text-white fs-4 social-icon">
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="https://www.linkedin.com/school/ifagdz" target="_blank" class="text-white fs-4 social-icon">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center pt-3 border-top border-light mt-3 text-white-50 small">
      © {{ new Date().getFullYear() }} <strong>IFAG</strong>. Tous droits réservés.
    </div>
  </footer>
</template>

<style scoped>
.footer-custom {
  background-color: #d90000;
}
.social-icon:hover {
  color: #ffffff;
  background-color: #ffffff33;
  border-radius: 50%;
  padding: 5px;
  transition: all 0.3s ease;
}

</style>
