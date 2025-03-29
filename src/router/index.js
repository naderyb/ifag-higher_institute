import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Recrutement from '../views/Recrutement.vue'
import MentionsLegales from '@/views/MentionsLegales.vue'
import Confidentialite from '@/views/Confidentialite.vue'
import Conditions from '@/views/Conditions.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/recrutement',
    name: 'Recrutement',
    component: Recrutement
  },
  { path: '/mentions-legales',
    name: 'MentionsLegales',
    component: MentionsLegales
  },
  {
    path: '/confidentialite',
    name: 'Confidentialite',
    component: Confidentialite
  },
  {
    path: '/conditions',
    name: 'Conditions',
    component: Conditions
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
