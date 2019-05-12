import Vue from 'vue';

new Vue({
    el: '#app',
    render: h => h(require('./components/app/app.vue').default),
});
