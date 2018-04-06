<template>
    <page>
        <lang-switch/>
        <screen-profile/>
        <screen-skills/>
        <screen-companies/>
        <screen-projects/>
    </page>
</template>

<script>
    import Page from '../../components/Page';
    import LangSwitch from '../../components/LangSwitch';
    import ScreenProfile from '../../components/ScreenProfile';
    import ScreenSkills from '../../components/ScreenSkills';
    import ScreenProjects from '../../components/ScreenProjects';
    import ScreenCompanies from '../../components/ScreenCompanies';

    export default {
        components: {
            Page,
            ScreenProfile,
            ScreenSkills,
            LangSwitch,
            ScreenProjects,
            ScreenCompanies,
        }
    }
</script>