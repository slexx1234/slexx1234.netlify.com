<template>
    <div class="project" @click="onClick">
        <div class="project__inner">
            <img class="project__image" :src="image">
            <h3 class="project__title">
                {{ title }}
                <span v-if="date" class="project__date" v-text="date"></span>
            </h3>
            <div class="project__tags">
                <span class="project__tag" v-for="tag in tags" v-text="tag" :key="tag"></span>
            </div>
            <p class="project__description" v-if="description" v-text="description"></p>
        </div>
        <div class="project__links">
            <a v-if="github" :href="github">
                <img src="/github.svg">
            </a>
            <a v-if="site" :href="site">
                <img src="/site.svg">
            </a>
        </div>
    </div>
</template>

<style lang="scss">
    .project {
        background: #fff;
        margin-bottom: 2rem;
        cursor: pointer;
        &__image {
            max-width: 100%;
            height: auto;
            margin-bottom: 1rem;
        }
        &__inner {
            padding: 1rem;
            padding-bottom: 0;
        }
        &__title {
            margin-bottom: 1rem;
        }
        &__date {
            float: right;
            color: #636e72;
            font-weight: 400;
        }
        &__tags {
            display: flex;
            flex-wrap: wrap;
        }
        &__tag {
            background: #0984e3;
            padding: 0.5rem 1rem;
            color: #fff;
            margin-bottom: 1rem;
            margin-right: 1rem;
        }
        &__links {
            background: #0984e3;
            padding: 1rem;
            img {
                width: 2rem;
                height: 2rem;
            }
            a + a {
                margin-left: 2rem;
            }
            a {
                opacity: 0.5;
                transition: 0.3s linear opacity;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
</style>

<script>
    export default {
        props: {
            title: String,
            tags: Array,
            image: String,
            description: String,
            date: String,
            github: String,
            site: String,
        },

        methods: {
            onClick() {
                window.open(this.site || this.github);
            },
        },
    }
</script>