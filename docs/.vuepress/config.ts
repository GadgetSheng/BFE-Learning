import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { gitPlugin } from '@vuepress/plugin-git'
import { palettePlugin } from '@vuepress/plugin-palette'
import { tocPlugin } from '@vuepress/plugin-toc'
import { navbar } from './navbar';

// https://v2.vuepress.vuejs.org/reference/config.html
export default defineUserConfig({
    title: 'Gadget-BFE',
    base: '/BFE-Learning/',
    description: 'Learning',
    theme: defaultTheme({
        navbar
    }),
    // To add a custom favicon:
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    plugins: [
        searchPlugin({ maxSuggestions: 8 }),
        mediumZoomPlugin(),
        externalLinkIconPlugin(),
        nprogressPlugin(),
        prismjsPlugin(),
        activeHeaderLinksPlugin(),
        gitPlugin({
            contributors: false
        }),
        palettePlugin({ preset: 'sass' }),
        tocPlugin()
    ]
})

