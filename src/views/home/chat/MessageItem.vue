<script setup lang="ts">
import type { Message } from '@/models/Message';
import Avatar from '../components/Avatar.vue';
import MessageBubble from './MessageBubble.vue';

const props = defineProps<{
  message: Message
}>();
</script>

<template>
  <div class="message-item">
    <Avatar url="/src/assets/avatar.jpg" />
    <div class="right-part">
      <div class="name">
        {{ message.name }}
      </div>
      <MessageBubble :msg="message.text" :me="message.me" />
    </div>
  </div>
</template>

<style lang="scss">
.message-item {

  margin: 10px 0;

  >.right-part {
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;

    >.name {
      color: #A6A6A6;
      margin-bottom: 5px;
    }
  }
}
</style>