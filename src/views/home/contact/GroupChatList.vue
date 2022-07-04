<script setup lang="ts">
import Dropdown from "../components/Dropdown.vue";
import GroupListItem from "./GroupListItem.vue";

</script>

<template>
  <Dropdown title="群聊" :count="10">
    <GroupListItem avatar="/src/assets/avatar.jpg" name="秘密基地" />
  </Dropdown>
</template>

<style lang="scss">

</style>