<script setup lang="ts">
import Avatar from "../components/Avatar.vue";

const props = defineProps<{
  avatar: string,
  name: string
}>();
</script>

<template>
  <div class="group-list-item">
    <Avatar :url="avatar" />
    <div class="name">{{ name }}</div>
  </div>
</template>

<style lang="scss">
.group-list-item {
  display: flex;
  align-items: center;
  margin: 10px 0;

  >.name {
    margin-left: 10px;
    font-size: 16px;
  }
}
</style>