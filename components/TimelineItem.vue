<template>
    <div class="timeline__item">
        <div class="timeline__dates" v-text="dates"></div>
        <div class="timeline__content">
            <h3 class="timeline__header">{{ header }}</h3>
            <p class="timeline__description" v-if="description" v-text="description"></p>
        </div>
    </div>
</template>

<style lang="scss">
    .timeline {
        &__item {
            display: flex;
            position: relative;
            @media (max-width: 600px) {
                display: block;
            }

            &:before,
            &:after {
                content: '';
                display: block;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                @media (max-width: 600px) {
                    left: 1rem;
                }
            }

            &:before {
                width: 0.6rem;
                height: 0.6rem;
                background: #00a8ff;
                margin-left: -0.3rem;
                margin-top: -0.3rem;
            }

            &:after {
                width: 1rem;
                height: 1rem;
                margin-left: -0.5rem;
                margin-top: -0.5rem;
                border: 1px solid #0097e6;
            }

            + .timeline__item {
                margin-top: 2rem;
            }
        }
        &__dates {
            margin: auto 0 auto auto;
            width: 50%;
            text-align: right;
            padding-right: 2rem;
            color: #333;
            @media (max-width: 600px) {
                width: 100%;
                text-align: left;
                padding-left: 4rem;
                padding-right: 0;
                margin-bottom: 0.5rem;
            }
        }
        &__content {
            padding-left: 2rem;
            margin: auto auto auto 0;
            width: 50%;

            > *:last-child {
                margin-bottom: 0;
            }

            @media (max-width: 600px) {
                width: 100%;
                padding-left: 4rem;
            }
        }
        &__header {
            font-size: 1rem;
            text-transform: uppercase;
            color: #333;
            margin-bottom: 1rem;
            @media (max-width: 600px) {
                margin-bottom: 0.5rem;
            }
        }
        &__description {
            font-size: 1rem;
            color: #333;
            margin-bottom: 1rem;
        }
    }
</style>

<script>
    export default {
        props: {
            header: String,
            description: String,
            dates: String,
        }
    }
</script>
