<template>
    <div class="timeline">
        <slot></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .timeline {
        position: relative;
        &:before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 0.5rem;
            margin-left: -0.25rem;
            background: #f5f6fa;
            border-radius: 0.25rem;
            @media (max-width: 600px) {
                left: 1rem;
            }
        }
    }
</style>