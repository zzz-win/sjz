import { defineConfig } from 'vitepress'
import nav from './config/nav.ts'
import sidebar from './config/nav.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "三角洲行动",
  description: "公共Wiki网站",
  srcDir: "./docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '本页内容', // 大纲标题
    outline: 'deep', 
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
