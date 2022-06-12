<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
body {
  background-image: url('@/assets/bg_mojave.webp');
  background-size: cover;
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;
  user-select: none;
}

input {
  outline: none;
}

input[type="checkbox"] {
  vertical-align: text-bottom;
  cursor: pointer;
}

a {
  color: #3292ff;
  text-decoration: none;
}

img {
  vertical-align: top;
}

.btn {
  display: inline-block;
  min-width: 60px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
}

.btn-primary {
  color: #fff;
  background-color: #44b549;
  border-color: #3eac27;
}

.btn-primary:hover {
  background-color: #4aaf33;
}

.btn-default {
  color: #000;
  background-color: #f1f1f1;
  border-color: #e6e7ec;
}
</style>
