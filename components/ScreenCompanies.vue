<template>
    <screen class="screen--companies">
        <div class="companies">
            <h2 class="companies__header">{{ $t('companies.header') }}</h2>

            <timeline class="companies__timeline">
                <timeline-item :header="$t('companies.freelance.name')" dates="2019"/>
                <timeline-item header="BeSmarter" :description="$t('companies.besmarter.description')" dates="2017 - 2018"/>
                <timeline-item :header="$t('companies.freelance.name')" :description="$t('companies.freelance.description')" dates="2016 - 2017"/>
            </timeline>
        </div>
    </screen>
</template>

<style lang="scss">
    .screen--companies {
        padding: 2rem;
        padding-top: 0;
    }
    .companies {
        max-width: 800px;
        margin: auto;
        &__header {
            font-size: 2rem;
            text-transform: uppercase;
            font-weight: 600;
            text-align: center;
            margin: 0;
            margin-bottom: 2rem;
            @media (max-width: 600px) {
                text-align: left;
            }
        }
        &__timeline {
            @media (max-width: 800px) {
                margin-left: -40%;
            }
            @media (max-width: 600px) {
                margin: 0;
            }
        }
    }
</style>

<script>
    import Screen from './Screen';
    import Timeline from './Timeline';
    import TimelineItem from './TimelineItem';

    export default {
        components: {
            Screen,
            TimelineItem,
            Timeline,
        },
    }
</script>
