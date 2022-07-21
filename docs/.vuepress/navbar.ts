export const navbar = [
    {
        text: '通用',
        children: [
            { text: '网络', link: '/common/network/' },
            { text: '浏览器', link: '/common/browser/' },
            { text: '安全', link: '/common/safe/' },
        ]
    },
    {
        text: '前端基础',
        children: [
            { text: 'JS基础', link: '/front/js/context' },
            { text: 'CSS基础', link: '/front/css' },
        ]
    },
    {
        text: '[React]',
        children: [
            { text: 'react', link: '/framework/react/' },
        ]
    },
    // {
    //     text: '[Vue]',
    //     children: [
    //         { text: 'vue', link: '/framework/vue/' }
    //     ]
    // },
    {
        text: '全栈',
        children: [
            { text: 'Node', link: '/fullstack/node/' },
            { text: '模块化', link: '/fullstack/module/' },
            { text: 'webpack', link: '/fullstack/webpack/' },
        ]
    },
    {
        text: '数据+算法',
        children: [
            { text: '设计模式', link: '/data/desgin/' },
            { text: '数据结构', link: '/data/structure/' },
            { text: '算法', link: '/data/algorithm/' }
        ]
    },
    {
        text: '其他',
        children: [
            { text: ' 项目/业务', link: '/others/project/' },
            { text: ' 性能优化', link: '/others/performance/' },
            { text: 'Nginx', link: '/others/nginx' },
            { text: '刷题', link: '/others/exams/' },
        ]
    },
    { text: 'Repo', link: 'https://github.com/steven7sheng/BFE-Learning' }
];

