<script setup lang="ts">
import SideNav from "./sidenav/FirstSideNav.vue";
import ChatNav from "./chat/ChatNav.vue";
import ChatDetail from "./chat/ChatTab.vue";
import ContactNav from "./contact/ContactNav.vue";
import ContactDetail from "./contact/ContactDetail.vue";
import { useHomeStore } from "@/stores/home";
import { storeToRefs } from "pinia";
import { fetchAllMessages } from "@/api";
import { db } from "@/stores/db";

import "@/styles/second_nav.scss";
import { onMounted } from "vue";

const homeStore = useHomeStore();
const { activeNav } = storeToRefs(homeStore);

onMounted(async () => {
  const userId = Number(localStorage.getItem('userId')) || undefined;
  if (!userId) {
    console.log('userId not defined');
    return;
  }
  const afterTime = new Date(localStorage.getItem('lastFetchTime') || '20000101000000');
  try {
    const messages = await fetchAllMessages(userId, afterTime);
    await db.messages.bulkAdd(messages);
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <div class="home-view">
    <SideNav />

    <template v-if="activeNav === 'chat'">
      <ChatNav />
      <ChatDetail />
    </template>

    <template v-else-if="activeNav === 'contact'">
      <ContactNav />
      <ContactDetail />
    </template>
  </div>
</template>

<style lang="scss">
.home-view {
  display: flex;
  width: 1000px;
  height: 700px;
  margin: 100px auto;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
}
</style>
