<template>
    <screen class="screen--projects">
        <div class="projects">
            <project :title="$t('projects.this')"
                     :tags="['HTML5','CSS3','JS','VueJS','Nuxt','PWA','SPA','SEO']"
                     :image="'/images/portfolio/this.' + ($webp ? 'webp' : 'png')"
                     date="06.04.2018"
                     site="https://slexx1234.netlify.com"
                     github="https://github.com/slexx1234/slexx1234.netlify.com"></project>

            <project title="Icons enricher"
                     :tags="['WordPress','PHP','JS','VueJS']"
                     :images="[
                        '/images/portfolio/icons-enricher/1.gif',
                        '/images/portfolio/icons-enricher/2.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/icons-enricher/3.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/icons-enricher/4.gif',
                     ]"
                     date="2017"
                     :description="$t('projects.icons-enricher')"
                     site="https://wordpress.org/plugins/icons-enricher/"></project>

            <project title="CRM BeSmarter"
                     :tags="['Laravel','PHP','JS','Bootstrap 4','jQuery','Sockets']"
                     :images="[
                        '/images/portfolio/crm-besmarter/1.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/crm-besmarter/2.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/crm-besmarter/3.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/crm-besmarter/4.' + ($webp ? 'webp' : 'png'),
                     ]"
                     :description="$t('projects.crm-besmarter')"
                     date="2017 - 2018"></project>

            <project title="Author BeSmarter"
                     :tags="['Laravel','PHP','JS','Vue','Vuex','Sockets','Vuetify','SPA']"
                     :images="[
                        '/images/portfolio/author-besmarter/1.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/author-besmarter/2.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/author-besmarter/3.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/author-besmarter/4.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/author-besmarter/5.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/author-besmarter/6.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/author-besmarter/7.' + ($webp ? 'webp' : 'png'),
                     ]"
                     :description="$t('projects.author-besmarter')"
                     site="https://avtor.besmarter.ru"
                     date="2018"></project>

            <project title="Bid Manager"
                     :tags="['Laravel','PHP','MySql','Cron']"
                     :images="[
                        '/images/portfolio/bid-manager/1.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/bid-manager/2.' + ($webp ? 'webp' : 'png'),
                        '/images/portfolio/bid-manager/3.' + ($webp ? 'webp' : 'png'),
                     ]"
                     :description="$t('projects.bid-manager')"
                     date="2017"></project>
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