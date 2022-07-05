<script setup lang="ts">
import Avatar from '../components/Avatar.vue';

const group = {
  id: 'wxgroup_12345',
  name: '秘密基地',
  avatar: '/src/assets/avatar.jpg'
};
</script>

<template>
  <div class="group-detail">
    <Avatar :url="group.avatar" :size="130" />
    <div class="name">{{ group.name }}</div>
    <button>进入群聊</button>
  </div>
</template>

<style lang="scss">
.group-detail {
  text-align: center;
  padding: 100px;

  >.avatar {
    margin-top: 50px;
  }

  >.name {
    margin: 20px 0;
    font-size: 20px;
    font-weight: 400;
  }

  >button {
    width: 130px;
    height: 38px;
    margin-top: 80px;
  }
}
</style>