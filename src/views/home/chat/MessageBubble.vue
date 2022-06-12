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
    <template v-if="!me">
      <div class="corner-left"></div>
      <div class="text">
        {{ msg }}
      </div>
    </template>
    <template v-else>
      <div class="corner-right"></div>
      <div class="text" style="background-color: #98E65F;">
        {{ msg }}
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.message-bubble {
  position: relative;
  $bg-color-defualt: #fff;
  $bg-color-me: #98E65F;

  >.corner-left {
    position: absolute;
    top: 10px;
    left: -10px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-right: 6px solid $bg-color-defualt;
  }

  >.corner-right {
    position: absolute;
    top: 10px;
    right: -10px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-left: 6px solid $bg-color-me;
  }

  >.text {
    max-width: 300px;
    font-size: 15px;
    line-height: 20px;
    color: #1B1B1B;
    padding: 10px;
    background-color: $bg-color-defualt;
    border-radius: 5px;
    user-select: text;
  }
}
</style>