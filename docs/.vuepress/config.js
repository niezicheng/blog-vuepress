const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vue Analysis',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#base
   */
  base: '/blog-vuepress/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    subSidebar: 'auto',
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '博客',
        items: [
            { text: 'Github', link: 'https://github.com/niezicheng' },
            { text: '掘金', link: 'https://juejin.cn/user/2946346894759319' }
        ]
      },
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/guide/',
        collapsable: false, // 不折叠
        children: [
          { title: "介绍", path: "/guide/" },
          { title: "vue 用法", path: "/guide/using-vue" }
        ]
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  // 主题配置
  theme: 'reco',
  // 语言配置
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
}
