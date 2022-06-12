<script setup lang="ts">
import type { Message } from '@/models/Message';
import Avatar from '../components/Avatar.vue';
import MessageBubble from './MessageBubble.vue';

const props = defineProps<{
  message: Message
}>();
</script>

<template>
  <div class="message-item" :class="{ me: message.me }">
    <template v-if="!message.me">
      <Avatar :url="message.avatar" />
      <div class="right-part">
        <div class="name">
          {{ message.name }}
        </div>
        <MessageBubble :msg="message.text" :me="message.me" />
      </div>
    </template>
    <template v-else>
      <div class="left-part">
        <MessageBubble :msg="message.text" :me="message.me" />
      </div>
      <Avatar :url="message.avatar" />
    </template>
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

.message-item.me {

  text-align: right;

  >.left-part {
    display: inline-block;
    vertical-align: top;
    margin-right: 10px;
  }
}
</style>