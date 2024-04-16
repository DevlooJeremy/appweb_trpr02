import type { RouteRecordRaw } from  'vue-router'
import HomePageView from '../views/HomePageView.vue'
import gameView from '../views/GameView.vue'
import scoreView from '../views/ScoreView.vue'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'home',
      component: HomePageView
    },
    {
      path: '/game',
      name: 'game',
      component: gameView
    },
    {
        path: '/score',
        name: 'score',
        component: scoreView
    }
  ]

export default routes;