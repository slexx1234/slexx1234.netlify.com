import Vue from 'vue';
import Lightbox from 'vue-pure-lightbox';

if (process.browser) {
    Vue.use(Lightbox);
}
