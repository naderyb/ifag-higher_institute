<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer-modern text-white pt-5 pb-3 mt-5">
    <div class="container">
      <div class="row gy-5 align-items-start">
        <!-- IFAG Contact -->
        <div class="col-md-4">
          <img src="/ifag-logo-blanc.png" alt="IFAG Logo" height="100" class="mb-3" />
          <h6 style="font-size: larger" class="text-uppercase fw-semibold mb-3">Contact IFAG</h6>
          <ul class="list-unstyled small">
            <li>
              <i style="font-size: larger" class="fas fa-phone-alt me-2"></i
              ><a href="tel:023480101" class="footer-link">023 48 01 01</a>
            </li>
            <li>
              <i style="font-size: larger" class="fas fa-mobile-alt me-2"></i
              ><a href="tel:+213770241855" class="footer-link">+213 770 24 18 55</a>
            </li>
            <li>
              <i style="font-size: larger" class="fas fa-mobile-alt me-2"></i
              ><a href="tel:+213770512064" class="footer-link">+213 770 51 20 64</a>
            </li>
            <li>
              <i style="font-size: larger" class="fas fa-mobile-alt me-2"></i
              ><a href="tel:+213770761165" class="footer-link">+213 770 76 11 65</a>
            </li>
          </ul>
        </div>

        <!-- School Description Center + Map -->
        <div class="col-md-4 text-center">
          <p class="school-description px-3 mb-4">
            IFAG est un établissement privé d'enseignement supérieur Agrée par le Ministère de
            l'Enseignement Supérieur et de la Recherche Scientifique(arrêté n° 341 du 11 avril
            2018). Il forme les leaders de demain, en mettant l'accent sur la pratique, l'excellence
            académique et l'ouverture à l'international.
          </p>

          <div class="map-container mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12787.238311649604!2d3.012273819860672!3d36.75114155802229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadd77880d2cf%3A0x9d708318b0ee3541!2sIFAG%20-%20Universit%C3%A9%20priv%C3%A9e%20-%20Groupe%20INSAG!5e0!3m2!1sen!2sdz!4v1742757240170!5m2!1sen!2sdz"
              width="100%"
              height="180"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <!-- INSAG Info -->
        <div class="col-md-4 text-md-end">
          <a href="https://insag.edu.dz/" target="_blank">
            <img src="/insag-logo.png" alt="INSAG" height="80" class="mb-2" />
          </a>
          <p style="font-size: larger" class="mb-2">
            <i class="fas fa-envelope me-1"></i
            ><a href="mailto:contact@insag.edu.dz" class="footer-link">contact@insag.edu.dz</a>
          </p>
        </div>
      </div>

      <!-- Divider -->
      <hr class="my-4 border-white opacity-25" />

      <!-- Social -->
      <div class="text-center mb-3">
        <p class="small text-uppercase mb-2 text-white-50">Suivez-nous</p>
        <div class="d-flex justify-content-center gap-3">
          <a href="https://www.facebook.com/ifagdz" target="_blank" class="social-icon"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="https://www.instagram.com/ifagdz" target="_blank" class="social-icon"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="https://www.youtube.com/@ifagdz" target="_blank" class="social-icon"
            ><i class="fab fa-youtube"></i
          ></a>
          <a href="https://www.tiktok.com/@ifagdz" target="_blank" class="social-icon"
            ><i class="fab fa-tiktok"></i
          ></a>
          <a href="https://www.linkedin.com/school/ifagdz" target="_blank" class="social-icon"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
      </div>
      <!-- Divider -->
      <hr class="my-4 border-white opacity-25" />
      <!-- Legal -->
      <div class="text-center mb-3">
        <p class="small text-uppercase mb-2 text-white-50">Mentions légales</p>
        <a href="/mentions-legales" class="footer-link">Mentions légales</a>
        <span class="text-white-50"> | </span>
        <a href="/confidentialite" class="footer-link">Politique de confidentialité</a>
        <span class="text-white-50"> | </span>
        <a href="/conditions" class="footer-link">Conditions générales</a>
        <span class="text-white-50"> | </span>
      </div>

      <!-- Copyright -->
      <div class="text-center small text-white-50">
        © {{ new Date().getFullYear() }} <strong>IFAG Higher Institute</strong> - INSAG Education
        Group. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-modern {
  background-color: #d90000;
  font-family: 'Inter', sans-serif;
}

.footer-link {
  color: #ffffffcc;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #fff;
  text-decoration: underline;
}

.social-icon {
  font-size: 1.1rem;
  color: #ffffffcc;
  background-color: transparent;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
}

.map-container {
  width: 100%;
  max-width: 320px;
  margin-left: auto;
  margin-right: 0;
  border-radius: 10px;
  overflow: hidden;
}

.school-description {
  font-size: 0.95rem;
  color: #ffffffcc;
  max-width: 600px;
  line-height: 1.6;
  margin: 0 auto;
}

.footer-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .school-description {
    text-align: center;
  }
  .map-container {
    width: 90%;
    max-width: 90%;
    margin-left: 0;
    margin-right: 0;
  }
  .footer-modern {
    padding: 2rem 1rem;
  }
  .footer-modern .row {
    flex-direction: column;
    align-items: center;
  }
  .footer-modern .col-md-4 {
    text-align: center;
    margin-bottom: 2rem;
  }
}
</style>
