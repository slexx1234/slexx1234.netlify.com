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
            <div class="project__tags">
                <span class="project__tag" v-for="tag in tags" v-text="tag" :key="tag"></span>
            </div>
            <p class="project__description" v-if="description" v-text="description"></p>

            <ul class="project__links">
                <li v-if="github">
                    <a  target="_blank" :href="github">
                        <icon>github</icon>
                        {{ $t('social.github') }}
                    </a>
                </li>
                <li v-if="site">
                    <a target="_blank" :href="site">
                        <icon>globe</icon>
                        {{ $t('social.site') }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    $lg-path-fonts: '../node_modules/lightgallery/src/fonts';
    $lg-path-images: '../node_modules/lightgallery/src/img';
    @import "../node_modules/lightgallery/src/sass/lightgallery";

    .project {
        margin-bottom: 2rem;
        &__image {
            cursor: pointer;
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 1rem;
            > img {
                max-width: 100%;
                height: auto;
            }
        }
        &__screenshots {
            position: absolute;
            right: 0;
            top: 0;
            background: #fff;
            padding: 0.5rem 1rem;
            border-bottom-left-radius: 10px;
        }
        &__title {
            margin: 0;
            color: #333;
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.5;
        }
        &__date {
            float: right;
            color: #636e72;
            font-weight: 400;
        }
        &__tags {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 1rem;
        }
        &__tag {
            background: #f5f6fa;
            font-size: 0.7rem;
            padding: 0.15rem 0.3rem;
            margin-right: 0.5rem;
            display: inline-block;
        }
        &__gallery {
            display: none;
        }
        &__description {
            color: #333;
            line-height: 1.5;
            margin: 0;
            margin-bottom: 1rem;
            font-size: 1rem;
        }
        &__links {
            margin: 0;
            list-style: none;
            padding: 0;
            color: #333;
            li {
                margin-bottom: 1rem;
                &:last-child {
                    margin-bottom: 0;
                }
            }
            .fa {
                margin-right: 0.5rem;
            }
            a {
                color: #0097e6;
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

    import Icon from './Icon'

    export default {
        components: {
            Icon,
        },
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