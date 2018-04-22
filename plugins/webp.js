import Vue from 'vue';
import VueWebP from 'v-webp';

if (process.browser && process.env.NODE_ENV !== 'development') {
    Vue.use(VueWebP);
} else {
    Vue.prototype.$webp = false;
}

