<script setup lang="ts">
import SendMessageMenu from "./SendMessageMenu.vue";

</script>

<template>
  <div class="send-message-bar">
    <SendMessageMenu />
    <textarea class="message-input"></textarea>
  </div>
</template>

<style lang="scss">
.send-message-bar {
  box-sizing: border-box;
  padding: 15px;
  height: 100%;

  >.message-input {
    outline: none;
    resize: none;
    border: none;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    line-height: 20px;
    background-color: #F1F1F1;
  }
}
</style>