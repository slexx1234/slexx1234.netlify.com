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
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
    ** Customize the progress bar color
    */
    loading: {
        color: '#0984e3'
    },

    router: {
        middleware: 'i18n'
    },

    plugins: ['~/plugins/i18n.js'],

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
