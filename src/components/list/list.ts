import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class List extends Vue {

    @Prop()
    items!: string[];

    remove(item: string) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
}