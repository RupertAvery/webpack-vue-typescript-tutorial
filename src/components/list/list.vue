<template>
  <div class="container mt-3">
    <ul class="no-bullets">
      <li v-for="item in items" :key="item">
        <div class="d-inline-block item-text">{{item}}</div>
        <div class="d-inline-block button-contaimer">
          <button class="btn" @click="remove(item)">x</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style src="./list.css"></style>
<script src="./list.ts"></script>

