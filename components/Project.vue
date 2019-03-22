<template>
    <div class="project">
        <div class="project__inner">
            <template v-if="images && images.length">
                <div class="project__image" @click="openGallery">
                    <img :src="images[0]" :alt="title">
                    <span class="project__screenshots" v-if="screenshots" v-text="screenshots"></span>
                </div>
                <div ref="gallery" class="project__gallery">
                    <div class="item" v-for="(image, i) in images" :key="i" :data-src="image">
                        <img :src="image" :alt="title">
                    </div>
                </div>
            </template>
            <div class="project__image" v-else>
                <img :src="image" :alt="title">
            </div>
            <h3 class="project__title">
                {{ title }}
                <span v-if="date" class="project__date" v-text="date"></span>
            </h3>
            <p class="project__description" v-if="description" v-text="description"></p>
            <div class="project__tags">
                <span class="project__tag" v-for="tag in tags" v-text="tag" :key="tag"></span>
            </div>
        </div>
        <div class="project__links" v-if="github || site">
            <a v-if="github" target="_blank" :href="github">
                <img src="/images/github.svg" :alt="$t('social.github')">
            </a>
            <a v-if="site" target="_blank" :href="site">
                <img src="/images/site.svg" :alt="$t('social.site')">
            </a>
        </div>
    </div>
</template>

<style lang="scss">
    $lg-path-fonts: '../node_modules/lightgallery/src/fonts';
    $lg-path-images: '../node_modules/lightgallery/src/img';
    @import "../node_modules/lightgallery/src/sass/lightgallery";

    .project {
        background: #fff;
        margin-bottom: 2rem;
        &__image {
            cursor: pointer;
            position: relative;
            > img {
                max-width: 100%;
                height: auto;
            }
        }
        &__screenshots {
            position: absolute;
            right: 0;
            font-weight: bold;
            top: 0;
            background: #fff;
            padding: 0.5rem 1rem;
        }
        &__inner {
            padding: 1rem;
            padding-bottom: 0;
        }
        &__title {
            margin: 1rem 0;
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
            background: #096ec5;
            padding: 0.5rem 1rem;
            color: #fff;
            font-weight: bold;
            margin-bottom: 1rem;
            margin-right: 1rem;
            &::selection {
                background: #fff;
                color: #096ec5;
            }
        }
        &__gallery {
            display: none;
        }
        &__links {
            background: #096ec5;
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
    if (process.browser) {
        window.$ = window.jQuery = require('jquery');
        require('lightgallery');
        require('lightgallery/modules/lg-zoom');
        require('lightgallery/modules/lg-share');
    }

    export default {
        props: {
            title: String,
            tags: Array,
            image: String,
            description: String,
            date: String,
            github: String,
            site: String,
            images: Array,
            screenshots: String,
        },
        mounted() {
            if (process.browser && this.$refs.gallery) {
                $(this.$refs.gallery).lightGallery();
            }
        },
        methods: {
            openGallery() {
                if (process.browser && this.$refs.gallery) {
                    $(this.$refs.gallery).find('img').click();
                }
            },
        }
    }
</script>