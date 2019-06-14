// TODO Сделать пуш уведомления

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { name: 'theme-color', content: '#0097e6' },
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
            { property: 'og:image', content: '/images/avatar.png' },
            { property: 'og:image:type', content: 'image/png' },
            { property: 'og:image:width', content: '200' },
            { property: 'og:image:height', content: '200' },
            { property: 'og:type', content: 'profile' },
            { property: 'og:url', content: 'https://slexx1234.netlify.com/' },

            // Поисковики
            { name: 'yandex-verification', content: '4e0eaed9675b963a' },
            { name: 'google-site-verification', content: 'j_6szK19CBprPSt4b5qxaLIvx7IitJWx6tyzkWgxFno' },
            { name: 'wmail-verification', content: '6eed32ac2f07e09a7c81048024a14f15' },
            { name: 'msvalidate.01', content: '7E04FF9455E17D24E4D53F0C881E418C' },
            { name: 'freelancehunt', content: '0352ee7369ecfed' },
        ],
        link: [
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
            { rel: 'mask-icon', href: '/images/favicons/favicon-black.svg', color: '#0097e6' },
            { rel: 'icon', type: 'image/svg+xml', href: '/images/favicons/favicon.svg' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap&subset=cyrillic' },
        ],
        script: [
            { charset: 'UTF-8', src: 'https://mc.yandex.ru/metrika/watch.js', async: true },
        ],
    },

    loading: 'components/Loading.vue',

    router: {
        middleware: 'i18n'
    },

    plugins: [
        { src: '~plugins/i18n.js', ssr: true },
        { src: '~plugins/sw.js', ssr: false },
        { src: '~plugins/metrika.js', ssr: false },
        { src: '~plugins/replain.js', ssr: false },
        { src: '~plugins/webp.js' },
    ],

    generate: {
        routes: ['/', '/en'],
        minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            minifyCSS: true,
            minifyJS: true,
            processConditionalComments: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeTagWhitespace: true,
            sortAttributes: true,
            sortClassName: true,
            trimCustomFragments: true,
            useShortDoctype: true,
        },
    },

    render: {
        gzip: { threshold: 9 },
        http2: { push: true },
        ssr: true,
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        },
    },
};
