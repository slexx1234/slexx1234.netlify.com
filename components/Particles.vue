<template>
    <div id="particles-js" class="particles"></div>
</template>

<style>
    .particles {
        background: linear-gradient(0.25turn, #487eb0, #273c75);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
</style>

<script>
    export default {
        data() {
            return {}
        },

        mounted() {
            if (process.browser) {
                require('particles.js')
                this.$nextTick(() => this.animate())
            }
        },

        methods: {
            animate() {
                if (process.browser) {
                    particlesJS({
                        particles: {
                            number: {
                                value: 80,
                                density: {
                                    enable: true,
                                    value_area: 500
                                }
                            },
                            color: {
                                value: '#ffffff'
                            },
                            shape: {
                                type: 'circle',
                                stroke: {
                                    width: 0,
                                    color: '#000000'
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                            },
                            opacity: {
                                value: 0.25,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 5,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 80,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: false,
                            },
                            move: {
                                enable: true,
                                speed: 12,
                                direction: 'none',
                                random: false,
                                straight: false,
                                out_mode: 'out',
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                        interactivity: {
                            detect_on: 'canvas',
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: 'repulse'
                                },
                                onclick: {
                                    enable: true,
                                    mode: 'push'
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 800,
                                    line_linked: {
                                        opacity: 1
                                    }
                                },
                                bubble: {
                                    distance: 800,
                                    size: 80,
                                    duration: 2,
                                    opacity: 0.8,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 400,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                        retina_detect: true
                    })
                }
            },
        },
    }
</script>