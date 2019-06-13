<template>
    <main class="page">
        <particles/>
        <slot/>
    </main>
</template>

<style lang="scss">
    .rain {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        width: 100%;
        height: 100vh;
    }
</style>

<script>
    import Particles from './Particles';

    export default {
        components: {
            Particles,
        },
    }
</script>