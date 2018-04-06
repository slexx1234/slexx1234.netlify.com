<template>
    <canvas class="rain"></canvas>
</template>

<script>
    export default {
        data() {
            return {
                window: {
                    width: 0,
                    height: 0,
                }
            }
        },

        mounted() {
            if (process.browser) {
                window.addEventListener('resize', this.updateCanvasSize);
                this.animate();
            }
        },

        destroyed() {
            window.removeEventListener('resize', this.updateCanvasSize);
        },

        methods: {
            updateCanvasSize() {
                this.$el.width = window.innerWidth;
                this.$el.height = window.innerHeight;
            },

            animate() {
                let w = this.$el.width = window.innerWidth;
                let h = this.$el.height = window.innerHeight;
                let ctx = this.$el.getContext('2d');

                //parameters
                let total = w;
                let accelleration = .1;

                //afterinitial calculations
                let size = w/total;
                let occupation = w/total;
                let repaintColor = 'rgba(0, 0, 0, .04)';
                let colors = [];
                let dots = [];
                let dotsVel = [];

                //setting the colors' hue
                //and y level for all dots
                let portion = 360/total;
                for(let i = 0; i < total; ++i){
                    colors[i] = portion * i;
                    dots[i] = h;
                    dotsVel[i] = 10;
                }

                function anim(){
                    window.requestAnimationFrame(anim);

                    ctx.fillStyle = repaintColor;
                    ctx.fillRect(0, 0, w, h);

                    for(let i = 0; i < total; ++i){
                        let currentY = dots[i] - 1;
                        dots[i] += dotsVel[i] += accelleration;

                        ctx.fillStyle = '#0984e3';
                        ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);

                        if(dots[i] > h && Math.random() < .001){
                            dots[i] = dotsVel[i] = 0;
                        }
                    }
                }

                anim();
            },
        },
    }
</script>