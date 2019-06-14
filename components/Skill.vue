<template>
    <div class="skill">
        <div class="skill__label" v-text="label"></div>
        <div class="skill__wrap">
            <div class="skill__indicator" :style="{ width: value + '%' }"></div>
        </div>
    </div>
</template>

<style lang="scss">
    .skill {
        &__indicator {
            display: block;
            background: linear-gradient(0.25turn, #8c7ae6, #00a8ff);
            border-radius: 0.5rem;
            height: 1rem;
        }
        &__label {
            margin-bottom: 0.5rem;
            color: #333;
        }
        &__wrap {
            background: #f5f6fa;
            display: block;
            height: 2rem;
            padding: 0.5rem;
            border-radius: 1rem;
        }
        + .skill {
            margin-top: 1rem;
        }
    }
</style>

<script>
    export default {
        props: {
            value: Number,
            label: String,
        }
    }
</script>
