<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message">
    <button-counter></button-counter>
    <list></list>
  </div>
</template>

<script>
module.exports = {
    components: {
        ButtonCounter: require('../button-counter/button-counter').default,
        List: require('../list/list.vue').default
    },
    data: function() {
        return {
            message: 'Hello Vue'
        }
    }
}
</script>