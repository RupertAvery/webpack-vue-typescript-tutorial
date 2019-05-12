<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="item" @keypress.enter="addItem">
    <button @click="addItem">Add</button>
    <list :items="items"></list>
    <div>
      <button-counter></button-counter>
    </div>
  </div>
</template>

<script>
module.exports = {
  components: {
    ButtonCounter: require("../button-counter/button-counter").default,
    List: require("../list/list.vue").default
  },
  data: function() {
    return {
      item: "",
      items: [],
      message: "Hello Vue"
    };
  },
  methods: {
    addItem: function() {
      this.items.push(this.item);
      this.item = "";
    }
  }
};
</script>