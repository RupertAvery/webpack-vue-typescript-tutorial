import Vue from 'vue';
import { Component } from 'vue-property-decorator'


@Component({
    components: {
        ButtonCounter: require("../button-counter/button-counter.vue").default,
        List: require("../list/list.vue").default
    }
})
export default class App extends Vue {

    item = "";
    items: string[] = [];
    message = "Hello Vue Typescript";

    addItem() {
        this.items.push(this.item);
        this.item = "";
    }
}