<template>
    <div class="skill">
        <div class="skill__label" v-text="label"></div>
        <div class="skill__wrap">
            <div class="skill__indicator" :style="{ width: value + '%', background: color }"></div>
        </div>
    </div>
</template>

<style lang="scss">
    .skill {
        &__indicator {
            display: block;
            height: 100%;
        }
        &__wrap {
            background: #dfe6e9;
            display: block;
            height: 1rem;
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
            color: {
                type: String,
                default: '#0984e3',
            },
        }
    }
</script>
