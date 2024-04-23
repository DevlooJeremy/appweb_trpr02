import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Revue de code TP2",
  description: "Revue de code du TP2 de Hugo Larochelle et Jeremy Devloo",
  base: "/appweb_trpr02/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Revue de Hugo', link: '/hugo-larochelle' },
      { text: 'Revue de Jérémy', link: '/jeremy-devloo' }
    ],

    sidebar: [
      {
        text: 'Pages',
        items: [
          { text: 'Revue de Hugo', link: '/hugo-larochelle' },
          { text: 'Revue de Jérémy', link: '/jeremy-devloo' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
