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

<script src="./app.js"></script>