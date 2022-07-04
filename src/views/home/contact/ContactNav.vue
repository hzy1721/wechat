<script setup lang="ts">
import SearchBar from '../components/SearchBar.vue';
import AddFriendButton from './AddFriendButton.vue';
import NewFriendList from './NewFriendList.vue';
import GroupChatList from './GroupChatList.vue';
import FriendList from './FriendList.vue';
</script>

<template>
  <div class="contact-nav second-nav">
    <div class="header">
      <SearchBar />
      <AddFriendButton />
    </div>

    <NewFriendList />
    <GroupChatList />
    <FriendList />
  </div>
</template>