<template>
    <screen class="screen--skills">
        <div class="about">
            <h2 class="about__header">{{ $t('about.header') }}</h2>
            <p class="about__description">{{ $t('about.description_1') }}</p>
            <p class="about__description">{{ $t('about.description_2') }}</p>
            <p class="about__description">{{ $t('about.description_3') }}</p>
        </div>
        <div class="skills">
            <h2 class="skills__header">{{ $t('skills.header') }}</h2>

            <skill :value="100" label="PHP, Laravel"/>
            <!--
            <skill :value="80" label="SQL, Redis, Memcached"/>
            -->
            <skill :value="90" label="Vue, Vuex, Nuxt"/>
            <skill :value="90" label="JS, CoffeeScript, TypeScript"/>
            <skill :value="100" label="CSS, SASS, LESS"/>
            <!--
            <skill :value="80" label="Nginx"/>
            -->
        </div>
    </screen>
</template>

<style lang="scss">
    .screen--skills {
        padding: 2rem 0;
        background: #fff;
        @media (max-width: 800px) {
            display: block;
        }
    }

    .about {
        margin-left: auto;
        max-width: 450px;
        width: 100%;
        text-align: right;
        padding: 0 2rem;
        @media (max-width: 800px) {
            margin: auto;
            text-align: left;
            max-width: none;
            margin-bottom: 2rem;
        }
        &__header {
            font-size: 2rem;
            text-transform: uppercase;
            font-weight: 700;
            margin: 0;
            margin-bottom: 2rem;
        }
        &__description {
            font-size: 1rem;
            margin-bottom: 1rem;
            line-height: 1.5;
            color: #333;
        }
    }

    .skills {
        max-width: 450px;
        width: 100%;
        margin-right: auto;
        padding: 0 2rem;
        @media (max-width: 800px) {
            margin: auto;
            max-width: none;
        }
        &__header {
            font-size: 2rem;
            text-transform: uppercase;
            font-weight: 700;
            margin: 0;
            margin-bottom: 2rem;
        }
    }
</style>

<script>
    import Screen from './Screen';
    import Skill from './Skill';

    export default {
        components: {
            Screen,
            Skill,
        },
    }
</script>
