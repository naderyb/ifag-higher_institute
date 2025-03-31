import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Recrutement from '../views/Recrutement.vue'
import MentionsLegales from '@/views/MentionsLegales.vue'
import Confidentialite from '@/views/Confidentialite.vue'
import Conditions from '@/views/Conditions.vue'
import ActionCommerciale from '@/views/Formations/ActionCommerciale.vue'
import FinanceComptabilite from '@/views/Formations/FinanceComptabilite.vue'
import ComputerScience from '@/views/Formations/ComputerScience.vue'
import MasterMarketingManagement from '@/views/Formations/MasterMarketingManagement.vue'

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
  {
    path: '/Formations/action-commerciale',
    name: 'ActionCommerciale',
    component: ActionCommerciale
  },
  {
    path: '/Formations/finance-et-comptabilite',
    name: 'FinanceComptabilite',
    component: FinanceComptabilite
  },
  {
    path: '/Formations/Informatique',
    name: 'Informatique',
    component: ComputerScience
  },
  {
    path: '/Formations/master-marketing-management',
    name: 'MasterMarketingmanagement',
    component: MasterMarketingManagement
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
