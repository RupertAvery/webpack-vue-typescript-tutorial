export default {
    props: [ 'items' ],
    methods: {
        remove: function(item) {
            const index = this.items.indexOf(item);
            this.items.splice(index, 1);
        }
    }
}