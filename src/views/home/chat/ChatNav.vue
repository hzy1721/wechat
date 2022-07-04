<script setup lang="ts">
import SearchBar from "../components/SearchBar.vue";
import StartGroupChat from "./StartGroupChat.vue";
import ChatList from "./ChatList.vue";

</script>

<template>
  <div class="second-nav">
    <div class="header">
      <SearchBar />
      <StartGroupChat />
    </div>
    <ChatList/>
  </div>
</template>