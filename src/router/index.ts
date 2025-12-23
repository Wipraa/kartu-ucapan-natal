import { i18n } from '@/utils/i18n'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CardPage from '@/pages/CardPage.vue'
import ChristmasPage from '@/pages/ChristmasPage.vue'

export function updateMeta(to = router.currentRoute.value) {
  const { t } = i18n.global

  if (to.meta.titleKey) {
    document.title = t(to.meta.titleKey as string)
  }

  const description = document.querySelector('meta[name="description"]') as HTMLMetaElement

  if (description && to.meta.descKey) {
    description.setAttribute('content', t(to.meta.descKey as string))
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        titleKey: 'meta.home.title',
        descKey: 'meta.home.description',
      },
    },
    {
      path: '/card',
      name: 'card',
      component: CardPage,
      meta: {
        titleKey: 'meta.card.title',
        descKey: 'meta.card.description',
      },
    },
    {
      path: '/christmas',
      name: 'christmas',
      component: ChristmasPage,
      meta: {
        titleKey: 'meta.christmas.title',
        descKey: 'meta.christmas.description',
      },
    },
  ],
})

router.afterEach((to) => {
  updateMeta(to)

  const { t } = i18n.global

  if (to.meta.titleKey) {
    document.title = t(to.meta.titleKey as string)
  }

  const description = document.querySelector('meta[name="description"]') as HTMLMetaElement

  if (description && to.meta.descKey) {
    description.setAttribute('content', t(to.meta.descKey as string))
  }
})

export default router
