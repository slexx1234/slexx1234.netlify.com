<template>
    <font-awesome-icon :icon="icon" class="fa-fw fa"/>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faHome, faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'
    import { faSkype, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(faHome)
    library.add(faSkype)
    library.add(faTelegram)
    library.add(faGlobe)
    library.add(faGithub)
    library.add(faEnvelope)
    library.add(faPhone)

    export default {
        components: {
            FontAwesomeIcon,
        },
        computed: {
            icon() {
                if (typeof this.$slots.default === 'undefined' || typeof this.$slots.default[0] === 'undefined') {
                    return null;
                }

                let name = this.$slots.default[0].text;

                if (['skype', 'telegram', 'github'].includes(name)) {
                    return ['fab', name]
                }

                return ['fas', name]
            },
        }
    }
</script>