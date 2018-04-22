<template>
    <screen class="screen--profile">
        <div class="profile">
            <div class="profile__inner">
                <img class="profile__avatar" src="/images/avatar.png" :alt="$t('profile.avatar')">
                <div class="profile__info">
                    <span class="profile__hello">{{ $t('profile.hello')}}</span>
                    <h1 class="profile__header">{{ $t('profile.name_prefix')}} <span>{{ $t('profile.name') }}</span></h1>
                    <p class="profile__job">{{ $t('profile.job') }}</p>

                    <div class="profile__divider"></div>

                    <table class="profile__info">
                        <tbody>
                            <tr>
                                <th>{{ $t('profile.age') }}</th>
                                <td>19</td>
                            </tr>
                            <tr>
                                <th>{{ $t('profile.city') }}</th>
                                <td>{{ $t('profile.moscow') }}</td>
                            </tr>
                            <tr>
                                <th>E-Mail</th>
                                <td><a href="mailto:slexx1234@gmail.com">slexx1234@gmail.com</a></td>
                            </tr>
                            <tr>
                                <th>{{ $t('profile.phone') }}</th>
                                <td><a href="tel:+79670144226">+7 967 014 42 26</a></td>
                            </tr>
                            <tr>
                                <th>Skype</th>
                                <td><a href="skype:+79510234561?chart">+7 951 023 45 61</a></td>
                            </tr>
                            <tr>
                                <th>{{ $t('profile.freelance') }}</th>
                                <td>{{ $t('profile.available') }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="profile__description">{{ $t('profile.description') }}</div>
            <nav class="profile__links">
                <a href="https://github.com/slexx1234">
                    <img src="/images/github.svg" :alt="$t('social.github')">
                </a>
                <a href="https://ru.stackoverflow.com/users/293390/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%A9%D0%B5%D0%BF%D0%BA%D0%B8%D0%BD?tab=profile">
                    <img src="/images/stackoverflow.svg" :alt="$t('social.stackoverflow')">
                </a>
            </nav>
        </div>
    </screen>
</template>

<style lang="scss">
    .profile {
        background: #fff;
        max-width: 600px;
        @media (max-width: 600px) {
            max-width: 400px;
        }
        margin: auto;
        width: 100%;

        &__hello {
            display: inline-block;
            background: #0984e3;
            color: #fff;
            font-weight: bold;
            line-height: 1;
            padding: 0.5rem 1rem;
            margin-bottom: 1rem;
            position: relative;
            &:after {
                content: '';
                width: 0;
                height: 0;
                display: block;
                position: absolute;
                top: 100%;
                left: 0;
                border: 0.5rem solid transparent;
                border-top-color: #0984e3;
            }
        }
        &__inner {
            display: flex;
            @media (max-width: 600px) {
                flex-direction: column;
            }
        }
        &__avatar {
            width: 200px;
            height: 200px;
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
            }
        }
        &__header {
            font-weight: 200;
            margin: 0;
            span {
                font-weight: 600;
            }
        }
        &__job {
            color: #636e72;
            margin: 0;
        }
        &__divider {
            display: block;
            margin: 1rem 0;
            width: 100%;
            height: 1px;
            background: #b2bec3;
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
            text-align: center;
            padding: 2rem;
            padding-top: 0;
        }
        &__links {
            background: #0984e3;
            padding: 1rem;
            text-align: center;
            color: #fff;
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
    import Screen from './Screen';

    export default {
        components: {
            Screen,
        },
    }
</script>