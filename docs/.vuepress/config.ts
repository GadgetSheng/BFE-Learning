import { defineUserConfig } from 'vuepress'
import { mixTheme } from 'vuepress-theme-mix'
import { searchPlugin } from '@vuepress/plugin-search'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { gitPlugin } from '@vuepress/plugin-git'
import { tocPlugin } from '@vuepress/plugin-toc'
import { navbar } from './navbar';
import { sidebar } from './sidebar';

// https://v2.vuepress.vuejs.org/reference/config.html
export default defineUserConfig({
    base: '/BFE-Learning/',
    theme: mixTheme({
        title: 'Gadget Docs',
        collapsible: true, // 可折叠
        navbar,
        sidebar,
    }),
    // hero area setting
    title: 'just Gadget!',
    description: 'Study N Stops',
    // To add a custom favicon:
    head: [['link', { rel: 'icon', href: '/images/logo.ico' }]],
    plugins: [
        searchPlugin({ maxSuggestions: 8 }),
        mediumZoomPlugin(),
        externalLinkIconPlugin(),
        nprogressPlugin(),
        activeHeaderLinksPlugin(),
        gitPlugin({ contributors: false }),
        tocPlugin()
    ]
})

