<template>
    <screen class="screen--projects">
        <div class="projects">
            <h2 class="projects__header">{{ $t('projects.header') }}</h2>
            <div class="projects__list">
                <project title="adbobr.com"
                         :tags="['PHP', 'Laravel', 'MySQL']"
                         :preview="'/images/portfolio/adbobr.com/preview.' + ($webp ? 'webp' : 'png')"
                         :images="[
                            '/images/portfolio/adbobr.com/1.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/2.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/3.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/4.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/5.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/6.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/7.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/8.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/9.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/10.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/11.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/12.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/13.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/14.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/15.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/16.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/17.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/18.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/19.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/20.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/21.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/22.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/adbobr.com/23.' + ($webp ? 'webp' : 'png'),
                         ]"
                         date="23.04.2019"
                         :description="$t('projects.adbobr_com')"
                         site="https://adbobr.com"></project>

                <project title="grushik.ru"
                         :tags="['VueJS','Nuxt','PWA','SPA','WordPress']"
                         :preview="'/images/portfolio/grushik.ru/preview.' + ($webp ? 'webp' : 'png')"
                         :images="[
                            '/images/portfolio/grushik.ru/1.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/grushik.ru/2.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/grushik.ru/3.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/grushik.ru/4.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/grushik.ru/5.' + ($webp ? 'webp' : 'png'),
                         ]"
                         date="10.02.2019"
                         :description="$t('projects.grushik_ru')"
                         site="http://grushik.ru"></project>

                <project title="tictactoee.netlify.com"
                         :tags="['VueJS','Game','Tic Tac Toe','Pet project']"
                         :preview="'/images/portfolio/tictactoee.netlify.com/preview.' + ($webp ? 'webp' : 'png')"
                         :images="[
                            '/images/portfolio/tictactoee.netlify.com/1.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/tictactoee.netlify.com/2.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/tictactoee.netlify.com/3.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/tictactoee.netlify.com/4.' + ($webp ? 'webp' : 'png'),
                         ]"
                         date="28.04.2018"
                         :description="$t('projects.tictactoee_netlify_com')"
                         github="https://github.com/slexx1234/tic-tac-toe"
                         site="http://tictactoee.netlify.com"></project>

                <project :title="$t('projects.this')"
                         :tags="['HTML5','CSS3','JS','VueJS','Nuxt','PWA','SPA','SEO','Pet project']"
                         :preview="'/images/portfolio/this/preview.' + ($webp ? 'webp' : 'png')"
                         :images="[
                            '/images/portfolio/this/1.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/this/2.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/this/3.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/this/4.' + ($webp ? 'webp' : 'png'),
                         ]"
                         date="06.04.2018"
                         site="https://slexx1234.netlify.com"
                         github="https://github.com/slexx1234/slexx1234.netlify.com"></project>

                <project title="Icons enricher"
                         :tags="['WordPress','PHP','JS','VueJS']"
                         :preview="'/images/portfolio/icons-enricher/preview.gif'"
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
                         :preview="'/images/portfolio/crm-besmarter/preview.' + ($webp ? 'webp' : 'png')"
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
                         :preview="'/images/portfolio/author-besmarter/preview.' + ($webp ? 'webp' : 'png')"
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
                         :preview="'/images/portfolio/bid-manager/preview.' + ($webp ? 'webp' : 'png')"
                         :images="[
                            '/images/portfolio/bid-manager/1.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/bid-manager/2.' + ($webp ? 'webp' : 'png'),
                            '/images/portfolio/bid-manager/3.' + ($webp ? 'webp' : 'png'),
                         ]"
                         :description="$t('projects.bid-manager')"
                         date="2017"></project>
            </div>
        </div>
    </screen>
</template>

<style lang="scss">
    .projects {
        width: calc(100% - 4rem);
        margin: auto;
        margin-bottom: 2rem;
        &__header {
            font-size: 2rem;
            text-transform: uppercase;
            font-weight: 600;
            text-align: center;
            margin: 0;
            margin-bottom: 2rem;
            @media (max-width: 600px) {
                text-align: left;
            }
        }
        &__list {
            column-count: 2;
            column-gap: 2rem;
            max-width: 1000px;
            margin: auto;

            .project {
                break-inside: avoid;
            }

            @media (max-width: 700px) {
                column-count: 1;
            }
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
