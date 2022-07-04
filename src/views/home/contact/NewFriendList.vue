<script setup lang="ts">
import Dropdown from '../components/Dropdown.vue';
import NewFriendListItem from './NewFriendListItem.vue';
</script>

<template>
  <Dropdown title="新的朋友">
    <NewFriendListItem avatar="/src/assets/avatar.jpg" name="Kevin Durant" remark="Hello, I'm KD" />
  </Dropdown>
</template>