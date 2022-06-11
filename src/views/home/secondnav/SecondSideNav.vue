<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
import StartGroupChat from "./StartGroupChat.vue";
import ChatList from "./ChatList.vue";

</script>

<template>
  <div class="second-side-nav">
    <div class="header">
      <SearchBar />
      <StartGroupChat />
    </div>
    <ChatList/>
  </div>
</template>

<style lang="scss">
.second-side-nav {
  display: inline-block;
  vertical-align: top;
  width: 280px;
  border-right: 1px solid #DEDEDE;
  height: 100%;
  background-color: #F6F6F6;

  >.header {
    box-sizing: border-box;
    height: 70px;
    padding: 20px;
  }
}
</style>