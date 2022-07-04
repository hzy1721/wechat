<script setup lang="ts">
import FriendListItem from "./FriendListItem.vue";
const props = defineProps<{
  alpha: string,
  list: {
    avatar: string,
    name: string
  }[]
}>();
</script>

<template>
  <div class="friend-alpha-group">
    <div class="alpha">{{ alpha }}</div>
    <FriendListItem v-for="item in list" :avatar="item.avatar" :name="item.name" />
  </div>
</template>

<style lang="scss">
.friend-alpha-group {

  .alpha {
    padding-bottom: 5px;
    padding-left: 5px;
    margin-bottom: 10px;
    color: var(--text-light-color);
    border-bottom: 1px solid var(--border-color);
  }
}
</style>