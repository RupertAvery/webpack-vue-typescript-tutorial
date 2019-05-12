<template>
  <div>
    <ul class="no-bullets">
      <li v-for="item in items" :key="item">{{item}} <button v-on:click="remove(item)">x</button></li>
    </ul>
  </div>
</template>

<style src="./list.css"></style>
<script src="./list.ts"></script>

