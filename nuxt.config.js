// TODO Сделать пуш уведомления

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'resume',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { name: 'theme-color', content: '#0984e3' },
            { name: 'HandheldFriendly', content: true },
            { name: 'MobileOptimized', content: 320 },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
            { name: 'msapplication-config', content: 'browserconfig.xml' },

            // Twitter Card
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@slexx1234' },
            { name: 'twitter:creator', content: '@slexx1234' },

            // Open Graph
            { name: 'og:image', content: '/images/avatar.png' },
            { name: 'og:image:type', content: 'image/png' },
            { name: 'og:image:width', content: '200' },
            { name: 'og:image:height', content: '200' },
            { name: 'og:type', content: 'profile' },
        ],
        link: [
            { href: 'https://fonts.googleapis.com/css?family=Scada', rel: 'stylesheet' },

            // Icons
            { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/favicons/ios-57.png' },
            { rel: 'apple-touch-icon', sizes: '60x60', href: '/images/favicons/ios-60.png' },
            { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/favicons/ios-72.png' },
            { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/favicons/ios-76.png' },
            { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/favicons/ios-114.png' },
            { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/favicons/ios-120.png' },
            { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/favicons/ios-144.png' },
            { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/favicons/ios-152.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicons/ios-180.png' },
            { rel: 'icon', type: 'image/png', href: '/images/favicons/favicon.png' },
            { rel: 'mask-icon', href: '/images/favicons/favicon-black.svg', color: '#0984e3' },
            { rel: 'icon', type: 'image/svg+xml', href: '/images/favicons/favicon.svg' },
        ],
    },

    loading: 'components/Loading.vue',

    router: {
        middleware: 'i18n'
    },

    plugins: [
        { src: '~plugins/i18n.js', ssr: true },
        { src: '~plugins/lightbox.js', ssr: false },
        { src: '~plugins/sw.js', ssr: false },
    ],

    generate: {
        routes: ['/', '/ru'],
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
};
