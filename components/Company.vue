<template>
    <div class="company">
        <div class="company__inner">
            <img v-if="logo" :src="logo" :alt="name" class="company__logo">
            <div class="company__info">
                <h3 class="company__name">
                    {{ name }}
                    <span class="company__dates" v-text="dates"></span>
                </h3>
                <p class="company__description" v-if="description" v-text="description"></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .company {
        &__inner {
            display: flex;
        }
        + .company:before {
            content: '';
            display: block;
            width: 100%;
            margin: 2rem 0;
            height: 1px;
            background: #b2bec3;
        }
        &__logo {
            width: 100px;
            height: 100px;
            margin-right: 1rem;
            flex: 1 1;
        }
        &__dates {
            float: right;
            font-weight: 400;
            color: #636e72;
        }
        &__description {
            margin: 0;
        }
    }
</style>

<script>
    export default {
        props: {
            logo: String,
            name: String,
            description: String,
            dates: String,
        }
    }
</script>
