<template>
    <a class="lang-switch" :href="url">
        <img :src="src" class="lang-switch__icon" :alt="name">
        <span class="lang-switch__name" v-text="name"></span>
    </a>
</template>

<style lang="scss">
    .lang-switch {
        cursor: pointer;
        position: fixed;
        top: 20px;
        height: 50px;
        right: 20px;
        z-index: 1000;
        background: #dfe6e9;
        color: #2d3436;
        font-weight: 800;

        &:hover {
            text-decoration: none;
            color: #2d3436;
        }

        &__icon {
            width: 75px;
            height: 50px;
        }
        &__name {
            padding: 0 1rem;
            @media (max-width: 600px) {
                display: none;
            }
        }
    }
</style>

<script>
    export default {
        computed: {
            src() {
                if (this.$store.state.locale === 'en') return '/images/ru.svg';
                return '/images/en.svg';
            },
            name() {
                if (this.$store.state.locale === 'en') return 'Русский';
                return 'English';
            },
            url() {
                if (this.$store.state.locale === 'en') return '/ru/';
                else return '/';
            },
        },
    }
</script>
