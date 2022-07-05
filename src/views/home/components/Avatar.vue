<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 40
  }
});
</script>

<template>
  <div class="avatar">
    <img :src="url" :style="{ width: size + 'px', height: size + 'px' }" />
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  display: inline-block;
  vertical-align: middle;

  >img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
}
</style>