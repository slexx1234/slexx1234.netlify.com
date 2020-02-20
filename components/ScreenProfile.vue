<template>
    <screen class="screen--profile">
        <particles/>
        <div class="profile" itemscope itemtype="http://schema.org/Person">
            <div class="profile__inner">
                <img class="profile__avatar" itemprop="image" src="/images/rick.svg" :alt="$t('profile.avatar')">
                <div class="profile__info">
                    <h6 class="profile__hello">{{ $t('profile.hello')}}</h6>
                    <h1 class="profile__header">{{ $t('profile.name_prefix')}} <span itemprop="name">{{ $t('profile.name') }}</span></h1>
                    <p class="profile__job" itemprop="jobTitle">{{ $t('profile.job') }}</p>

                    <ul class="profile__contacts">
                        <li>
                            <icon>home</icon>
                            {{ $t('profile.moscow') }}
                        </li>
                        <li>
                            <a href="mailto:slexx1234@gmail.com" itemprop="email">
                                <icon>envelope</icon>
                                slexx1234@gmail.com
                            </a>
                        </li>
                        <!--
                        <li>
                            <a href="tel:+79777724219" itemprop="telephone">
                                <icon>phone</icon>
                                +7 977 709 26 71
                            </a>
                        </li>
                        -->
                        <li>
                            <a href="skype:+79510234561?chart">
                                <icon>skype</icon>
                                +7 951 023 45 61
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://t.me/slexx12342">
                                <icon>telegram</icon>
                                @slexx12342
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/slexx1234">
                                <icon>github</icon>
                                {{ $t('social.github') }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </screen>
</template>

<style lang="scss">
    .screen--profile {
        padding: 2rem;
        min-height: 100vh;
        @media (max-width: 600px) {
            min-height: auto;
            padding: 0;
        }
    }

    .profile {
        background: #fff;
        max-width: 800px;
        box-shadow: 0 20px 30px 0 rgba(50, 50, 50, .25);
        border-radius: 15px;
        overflow: hidden;
        @media (max-width: 600px) {
            border-radius: 0;
            box-shadow: none;
            margin: 0;
        }
        margin: auto;
        width: 100%;

        &__hello {
            line-height: 1;
            font-size: 1rem;
            font-weight: 400;
            margin: 0;
            position: relative;
        }
        &__inner {
            display: flex;
            @media (max-width: 600px) {
                flex-direction: column;
            }
        }
        &__avatar {
            width: 200px;
            height: auto;
            margin: 2rem;
            @media (max-width: 600px) {
                margin-left: auto;
                margin-right: auto;
            }
        }
        &__info {
            padding: 2rem;
            padding-left: 0;
            @media (max-width: 600px) {
                padding-left: 2rem;
                padding-bottom: 0;
            }
        }
        &__header {
            font-weight: 400;
            font-size: 2rem;
            color: #333;
            line-height: 1;
            text-transform: uppercase;
            margin: 0.5rem 0 0.3rem;
            span {
                font-weight: 700;
            }
        }
        &__job {
            color: #333;
            font-size: 1.3rem;
            margin: 0;
            font-weight: 700;
            margin-bottom: 2rem;
        }
        &__info {
            margin: 0;
            th {
                text-transform: uppercase;
                padding-right: 1rem;
            }
            td {
                color: #636e72;
                a {
                    color: #636e72;
                    text-decoration: underline;
                }
            }
        }
        &__description {
            text-align: left;
            margin: 0;
            margin-bottom: 2rem;
        }
        &__contacts {
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
    import Screen from './Screen';
    import Icon from "./Icon";
    import Particles from "./Particles";

    export default {
        components: {
            Particles,
            Icon,
            Screen,
        },
    }
</script>
