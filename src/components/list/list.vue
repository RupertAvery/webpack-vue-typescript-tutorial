<template>
  <div>
    <ul>
      <li v-for="item in items">{{item}} <button v-on:click="remove(item)">x</button></li>
    </ul>
  </div>
</template>
<script src="./list.js"></script>
