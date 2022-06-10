<script setup lang="ts">
const props = defineProps<{
  url: string
}>();
</script>

<template>
  <div class="avatar">
    <img :src="url" />
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