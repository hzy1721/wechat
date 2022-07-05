<script setup lang="ts">
import FriendDetail from './FriendDetail.vue';
import { useHomeStore } from '@/stores/home';
import { storeToRefs } from 'pinia';
import GroupDetail from './GroupDetail.vue';

const homeStore = useHomeStore();
const { activeContact } = storeToRefs(homeStore);
</script>

<template>
  <div class="contact-detail">
    <FriendDetail v-if="activeContact.startsWith('user')" />
    <GroupDetail v-else-if="activeContact.startsWith('group')" />
  </div>
</template>

<style>
.contact-detail {
  flex: 1;
  background-color: var(--contact-detail-bg-color);
  border-radius: 0 10px 10px 0;
}
</style>