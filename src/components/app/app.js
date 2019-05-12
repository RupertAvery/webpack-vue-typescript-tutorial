export default {
    components: {
        ButtonCounter: require("../button-counter/button-counter.vue").default,
        List: require("../list/list.vue").default
    },
    data: function () {
        return {
            item: "",
            items: [],
            message: "Hello Vue"
        };
    },
    methods: {
        addItem: function () {
            this.items.push(this.item);
            this.item = "";
        }
    }
};