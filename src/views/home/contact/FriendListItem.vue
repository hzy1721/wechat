<script setup lang="ts">
import { useHomeStore } from "@/stores/home";
import { storeToRefs } from "pinia";
import Avatar from "../components/Avatar.vue";

const props = defineProps<{
  avatar: string,
  name: string
}>();

const homeStore = useHomeStore();
const { activeContact } = storeToRefs(homeStore);
</script>

<template>
  <div class="friend-list-item" @click="activeContact = `user_wxid_12345`">
    <Avatar :url="avatar" />
    <div class="name">{{ name }}</div>
  </div>
</template>

<style lang="scss">
.friend-list-item {
  display: flex;
  align-items: center;
  margin: 10px 0;

  >.name {
    margin-left: 10px;
    font-size: 16px;
  }
}
</style>