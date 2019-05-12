import Vue from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'jquery';

import BootstrapVue from 'bootstrap-vue';

//tell Vue to use BootstrapVue components
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    render: h => h(require('./components/app/app.vue').default),
});