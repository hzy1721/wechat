<script setup lang="ts">
import { useHomeStore } from "@/stores/home";
import { storeToRefs } from "pinia";
import Avatar from "../components/Avatar.vue";

const props = defineProps<{
  avatar: string,
  name: string,
  remark: string
}>();

const homeStore = useHomeStore();
const { activeContact } = storeToRefs(homeStore);
</script>

<template>
  <div class="new-friend-list-item" @click="activeContact = `user_wxid_12345`">
    <Avatar :url="avatar" />
    <aside>
      <div class="title">
        <span class="name">{{ name }}</span>
        <span class="status">已添加</span>
      </div>
      <div class="remark">{{ remark }}</div>
    </aside>
  </div>
</template>

<style lang="scss">
.new-friend-list-item {
  display: flex;

  .avatar {
    margin-right: 10px;
  }
  
  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    >.title {
      display: flex;
      justify-content: space-between;

      .name {
        font-size: 16px;
      }

      .status {
        font-size: 14px;
        color: var(--text-light-color);
      }
    }

    >.remark {
      font-size: 14px;
      color: var(--text-light-color);
    }
  }
}
</style>