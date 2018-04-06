<template>
    <screen class="screen--projects">
        <div class="projects">
            <project :title="$t('projects.this')"
                     :tags="['HTML5','CSS3','JS','VueJS','Nuxt']"
                     image="/portfolio/1.png"
                     date="06.04.2018"
                     github="https://github.com/slexx1234/resume"></project>

            <project title="Icons enricher"
                     :tags="['WordPress','PHP','JS','VueJS']"
                     image="/portfolio/2.gif"
                     date="2017"
                     site="https://wordpress.org/plugins/icons-enricher/"></project>
        </div>
    </screen>
</template>

<style lang="scss">
    .projects {
        width: calc(100% - 4rem);
        column-count: 3;
        column-gap: 2rem;
        margin: auto;
        margin-bottom: 2rem;
        .project {
            break-inside: avoid;
        }
    }
</style>

<script>
    import Screen from './Screen';
    import Project from './Project';

    export default {
        components: {
            Screen,
            Project,
        },
    }
</script>