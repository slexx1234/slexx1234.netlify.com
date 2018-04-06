<template>
    <screen class="screen--companies">
        <div class="companies">
            <h2 class="companies__header">{{ $t('companies.header') }}</h2>

            <company logo="/logos/besmarter.png" name="BeSmarter" :description="$t('companies.besmarter.description')" dates="2017 - 2018"/>
            <company :name="$t('companies.freelance.name')" :description="$t('companies.freelance.description')" dates="2016 - 2017"/>
        </div>
    </screen>
</template>

<style lang="scss">
    .companies {
        background: #fff;
        max-width: 600px;
        min-width: 300px;
        @media (max-width: 600px) {
            max-width: 400px;
        }
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
    import Company from './Company';

    export default {
        components: {
            Screen,
            Company,
        },
    }
</script>