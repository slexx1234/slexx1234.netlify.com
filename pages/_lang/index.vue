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
                title: this.$t('profile.name'),
                htmlAttrs: {
                    lang: this.$store.state.locale
                },
            };
        },
    }
</script>