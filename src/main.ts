import Vue from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'jquery';

import BootstrapVue from 'bootstrap-vue';
import router from './router';

//tell Vue to use BootstrapVue components
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router: router,
    render: h => h(require('./components/app/app.vue').default),
});