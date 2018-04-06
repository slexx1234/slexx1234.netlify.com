<template>
    <screen class="screen--skills">
        <div class="skills">
            <h2 class="skills__header">{{ $t('skills.header') }}</h2>

            <skill :value="100" label="PHP, Laravel"/>
            <skill :value="80" label="SQL, Redis, Memcached"/>
            <skill :value="90" label="Vue, Vuex, Nuxt"/>
            <skill :value="90" label="JS, CoffeeScript, TypeScript"/>
            <skill :value="100" label="CSS, SASS, LESS"/>
            <skill :value="80" label="Nginx"/>
        </div>
    </screen>
</template>

<style lang="scss">
    .skills {
        background: #fff;
        max-width: 600px;
        min-width: 300px;
        width: 100%;
        margin: auto;
        padding: 2rem;
        &__header {
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