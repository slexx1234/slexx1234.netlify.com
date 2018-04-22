<template>
    <page>
        <lang-switch/>
        <screen-profile/>
        <screen-skills/>
        <screen-companies/>
        <screen-projects/>
        <copyrights/>
    </page>
</template>

<script>
    import Page from '../../components/Page';
    import Copyrights from '../../components/Copyrights';
    import LangSwitch from '../../components/LangSwitch';
    import ScreenProfile from '../../components/ScreenProfile';
    import ScreenSkills from '../../components/ScreenSkills';
    import ScreenProjects from '../../components/ScreenProjects';
    import ScreenCompanies from '../../components/ScreenCompanies';

    export default {
        components: {
            Page,
            Copyrights,
            ScreenProfile,
            ScreenSkills,
            LangSwitch,
            ScreenProjects,
            ScreenCompanies,
        },
        head() {
            return {
                title: this.$t('seo.title'),
                htmlAttrs: {
                    lang: this.$store.state.locale,
                    prefix: 'og: http://ogp.me/ns#'
                },
                link: [
                    { rel: 'manifest', href: '/manifest-' + this.$store.state.locale + '.json', }
                ],
                meta: [
                    // Open Graph
                    { property: 'og:title', content: this.$t('open_graph.title') },
                    { property: 'og:description', content: this.$t('open_graph.description') },
                    { property: 'og:locale', content: this.$t('open_graph.locale') },
                    { property: 'og:locale:alternate', content: this.$t('open_graph.locale_alternate') },
                    { property: 'og:profile:first_name', content: this.$t('open_graph.first_name') },
                    { property: 'og:profile:last_name', content: this.$t('open_graph.last_name') },
                    { property: 'og:profile:username', content: this.$t('open_graph.username') },
                    { property: 'og:profile:gender', content: this.$t('open_graph.gender') },

                    // SEO
                    { name: 'author', content: this.$t('seo.author') },
                    { name: 'description', content: this.$t('seo.description') },
                ],
            };
        },
    }
</script>