<template>
  <div class="container mt-3">
    <div class="shadow card bg-white rounded">
      <div class="card-body">
        <h5 class="card-title">Shopping List ({{items.length}} items)</h5>
        <input placeholder="Add an item" class="form-control" v-model="item" @keypress.enter="addItem">
        <list :items="items"></list>
      </div>
    </div>
  </div>
</template>
<style src="./app.css"></style>
<script src="./app.ts"></script>