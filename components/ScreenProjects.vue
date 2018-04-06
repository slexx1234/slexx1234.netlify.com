<template>
    <screen class="screen--projects">
        <div class="projects">
            <project :title="$t('projects.this')"
                     :tags="['HTML5','CSS3','JS','VueJS','Nuxt']"
                     image="/portfolio/this.png"
                     date="06.04.2018"
                     github="https://github.com/slexx1234/resume"></project>

            <project title="Icons enricher"
                     :tags="['WordPress','PHP','JS','VueJS']"
                     :images="[
                        '/portfolio/icons-enricher/1.gif',
                        '/portfolio/icons-enricher/2.png',
                        '/portfolio/icons-enricher/3.png',
                        '/portfolio/icons-enricher/4.gif',
                     ]"
                     date="2017"
                     site="https://wordpress.org/plugins/icons-enricher/"></project>

            <project title="CRM BeSmarter"
                     :tags="['Laravel','PHP','JS','Bootstrap 4','jQuery','Sockets']"
                     :images="[
                        '/portfolio/crm-besmarter/1.png',
                        '/portfolio/crm-besmarter/2.png',
                        '/portfolio/crm-besmarter/3.png',
                        '/portfolio/crm-besmarter/4.png',
                     ]"
                     date="2017 - 2018"></project>
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
        @media (max-width: 1500px) {
            column-count: 2;
        }
        @media (max-width: 1000px) {
            column-count: 1;
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