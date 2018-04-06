module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'resume',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            { rel: 'mask-icon', href: '/favicon-black.svg', color: '#0984e3' },
            { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        ]
    },

    loading: 'components/Loading.vue',

    router: {
        middleware: 'i18n'
    },

    plugins: [
        '~/plugins/i18n.js',
        '~/plugins/lightbox.js',
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
}
