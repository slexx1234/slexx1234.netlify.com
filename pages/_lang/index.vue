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
                },
                link: [
                    { rel: 'manifest', href: '/manifest-' + this.$store.state.locale + '.json', }
                ],
                meta: [
                    // Open Graph
                    { name: 'og:title', content: this.$t('open_graph.title') },
                    { name: 'og:description', content: this.$t('open_graph.description') },
                    { name: 'og:locale', content: this.$t('open_graph.locale') },
                    { name: 'og:locale:alternate', content: this.$t('open_graph.locale_alternate') },
                    { name: 'og:profile:first_name', content: this.$t('open_graph.first_name') },
                    { name: 'og:profile:last_name', content: this.$t('open_graph.last_name') },
                    { name: 'og:profile:username', content: this.$t('open_graph.username') },
                    { name: 'og:profile:gender', content: this.$t('open_graph.gender') },

                    // SEO
                    { name: 'author', content: this.$t('seo.author') },
                    { name: 'description', content: this.$t('seo.description') },
                ],
            };
        },
    }
</script>