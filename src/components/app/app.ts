import Vue from 'vue';
import { Component } from 'vue-property-decorator'


@Component({
    components: {
        NavBar: require('../navbar/navbar.vue').default
    }
})
export default class App extends Vue {

}