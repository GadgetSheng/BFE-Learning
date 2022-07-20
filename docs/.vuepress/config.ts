import { defineUserConfig, defaultTheme } from 'vuepress'
// import { mixTheme } from 'vuepress-theme-mix'
import { searchPlugin } from '@vuepress/plugin-search'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { mdPlusPlugin } from "@renovamen/vuepress-plugin-md-plus"
import { gitPlugin } from '@vuepress/plugin-git'
import { tocPlugin } from '@vuepress/plugin-toc'
import { gungnirTheme } from "vuepress-theme-gungnir"
import { navbar } from './navbar';
import { sidebar } from './sidebar';

// https://v2.vuepress.vuejs.org/reference/config.html
export default defineUserConfig({
    base: '/BFE-Learning/',
    title: 'Gadget Docs',
    description: 'Study N Stops',
    // To add a custom favicon:
    head: [['link', { rel: 'icon', href: '/BFE-Learning/favicon.ico', type: 'image/x-icon' }]],
    theme: defaultTheme({
        logo: '/logo.jpg',
        navbar,
        sidebar,
    }),
    plugins: [
        searchPlugin({ maxSuggestions: 8 }),
        mediumZoomPlugin(),
        externalLinkIconPlugin(),
        nprogressPlugin(),
        activeHeaderLinksPlugin(),
        gitPlugin({ contributors: false }),
        mdPlusPlugin({ all: true }),
        tocPlugin()
    ],
})

