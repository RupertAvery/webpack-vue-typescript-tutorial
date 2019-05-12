<template>
  <div>
    <ul class="no-bullets">
      <li v-for="item in items" :key="item">{{item}} <button v-on:click="remove(item)">x</button></li>
    </ul>
  </div>
</template>

<style>
.no-bullets {
    list-style: none;
    padding-left: 0;
}
</style>

<script src="./list.js"></script>

