<script setup lang="ts">
import Dropdown from "../components/Dropdown.vue";
import FriendAlphaGroup from "./FriendAlphaGroup.vue";

const alphaGroups = {
  A: [
    { avatar: '/src/assets/avatar.jpg', name: 'AAA-卖茶叶' },
    { avatar: '/src/assets/avatar.jpg', name: 'AAAAAA-卖水果' },
  ],
  B: [
    { avatar: '/src/assets/avatar.jpg', name: 'BUAA本手' },
    { avatar: '/src/assets/avatar.jpg', name: 'BUAA妙手' },
  ]
};
</script>

<template>
  <Dropdown title="联系人" :count="500">
    <FriendAlphaGroup v-for="(list, alpha) in alphaGroups" :alpha="alpha" :list="list" />
  </Dropdown>
</template>

<style lang="scss">

</style>