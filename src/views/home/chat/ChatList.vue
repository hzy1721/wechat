<script setup lang="ts">
import ChatListItem from "./ChatListItem.vue";
import { useHomeStore } from "@/stores/home";
import { storeToRefs } from "pinia";

const chatSessions = [
  {
    name: '好友1',
    avatar: '/src/assets/avatar.jpg',
    time: new Date(2022, 5, 10, 18, 18),
    msg: '你好呀👋',
    mute: false
  },
  {
    name: '群聊1',
    avatar: '/src/assets/avatar.jpg',
    time: new Date(2022, 5, 10, 18, 4),
    msg: '路人乙：欢迎新人👏',
    mute: true
  },
  {
    name: '好友2',
    avatar: '/src/assets/avatar.jpg',
    time: new Date(2022, 5, 10, 17, 55),
    msg: '感谢🙏',
    mute: false
  },
];

const homeStore = useHomeStore();
const { activeChat } = storeToRefs(homeStore);
if (!activeChat.value) {
  activeChat.value = chatSessions[0].name;
}
</script>

<template>
  <div class="chat-list">
    <ChatListItem v-for="chat in chatSessions" :chat="chat" />
  </div>
</template>

<style lang="scss">
.chat-list {
  flex: 1;
  overflow-y: auto;
}
</style>