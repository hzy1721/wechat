<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    required: true
  },
  me: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="message-bubble">
    <div class="corner">

    </div>
    <div class="text">
      {{ msg }}
    </div>
  </div>
</template>

<style lang="scss">
.message-bubble {
  position: relative;

  >.corner {
    position: absolute;
    top: 10px;
    left: -10px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-right: 6px solid white;
  }

  >.text {
    font-size: 15px;
    line-height: 15px;
    color: #1B1B1B;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
  }
}
</style>