import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { gitPlugin } from '@vuepress/plugin-git'
import { palettePlugin } from '@vuepress/plugin-palette'
import { tocPlugin } from '@vuepress/plugin-toc'

// https://v2.vuepress.vuejs.org/reference/config.html
export default defineUserConfig({
    title: 'Gadget-BFE',
    base: '/BFE-Learning/',
    plugins: [
        searchPlugin({ maxSuggestions: 8 }),
        mediumZoomPlugin(),
        externalLinkIconPlugin(),
        nprogressPlugin(),
        prismjsPlugin(),
        activeHeaderLinksPlugin(),
        gitPlugin(),
        palettePlugin({ preset: 'sass' }),
        tocPlugin()
    ]
})

