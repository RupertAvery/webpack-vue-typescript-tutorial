<template>
  <div class="container">
    <h2>{{ message }}</h2>
    <input v-model="item" @keypress.enter="addItem">
    <button class="btn" @click="addItem">Add</button>
    <list :items="items"></list>
    <div>
      <button-counter></button-counter>
    </div>
  </div>
</template>

<script src="./app.ts"></script>