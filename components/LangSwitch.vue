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
        background: #f5f6fa;
        color: #2f3640;
        font-weight: 800;
        box-shadow: 0 20px 30px 0 rgba(50, 50, 50, .25);
        border-radius: 5px;
        overflow: hidden;

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
                if (this.$store.state.locale === 'en') return '/';
                else return '/en/';
            },
        },
    }
</script>
