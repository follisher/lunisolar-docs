import { hopeTheme } from 'vuepress-theme-hope'
import { enNavbar, zhNavbar } from './navbar/index.js'
import { enSidebar, zhSidebar } from './sidebar/index.js'

export default hopeTheme({
  hostname: 'https://waterbeside.github.com',

  author: {
    name: 'Waterbeside',
    url: 'https://github.com/waterbeside'
  },

  // iconAssets: "iconfont",
  iconAssets: '//at.alicdn.com/t/c/font_3869282_ny7n4o2fu3g.css',

  logo: '/logo.png',

  repo: 'waterbeside/lunisolar',

  docsRepo: 'waterbeside/lunisolar-docs',

  docsDir: '/src',

  // navbar
  navbar: zhNavbar,

  // sidebar
  sidebar: zhSidebar,

  footer: 'lunisolar.js',

  displayFooter: true,

  pure: true,
  backToTop: false,

  // page meta
  metaLocales: {
    editLink: '在 GitHub 上编辑此页'
  },

  plugins: {
    // Disable features you don’t want here
    mdEnhance: {
      align: false,
      attrs: true,
      chart: false,
      codetabs: true,
      container: true,
      demo: false,
      echarts: false,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: false,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      },
      // stylize: [
      //   {
      //     matcher: "Recommended",
      //     replacer: ({ tag }) => {
      //       if (tag === "em")
      //         return {
      //           tag: "Badge",
      //           attrs: { type: "tip" },
      //           content: "Recommended",
      //         };
      //     },
      //   },
      // ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: false,
      vuePlayground: false
    }

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
})
