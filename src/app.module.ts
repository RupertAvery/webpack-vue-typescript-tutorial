import Vue from 'vue';


var app = new Vue({
    el: '#app',
    render: h => h(require('./components/app/app.vue').default),
});

export default app;