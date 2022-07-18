import { defineUserConfig } from 'vuepress'
import { mixTheme } from 'vuepress-theme-mix'
import { searchPlugin } from '@vuepress/plugin-search'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { gitPlugin } from '@vuepress/plugin-git'
import { tocPlugin } from '@vuepress/plugin-toc'
import { copyCodePlugin } from "vuepress-plugin-copy-code2"
import { navbar } from './navbar';
import { sidebar } from './sidebar';

// https://v2.vuepress.vuejs.org/reference/config.html
export default defineUserConfig({
    base: '/BFE-Learning/',
    title: 'Gadget Docs',
    theme: mixTheme({
        title: 'just Gadget!',
        collapsible: true, // 可折叠
        navbar,
        sidebar,
    }),
    markdown: { code: { lineNumbers: 4 } },
    description: 'Study N Stops',
    // To add a custom favicon:
    head: [['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]],
    plugins: [
        searchPlugin({ maxSuggestions: 8 }),
        mediumZoomPlugin(),
        externalLinkIconPlugin(),
        nprogressPlugin(),
        activeHeaderLinksPlugin(),
        gitPlugin({ contributors: false }),
        // use special theme 
        copyCodePlugin({ selector: '.theme-mix-content div[class*="language-"] pre' }),
        tocPlugin()
    ]
})

