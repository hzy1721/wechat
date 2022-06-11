<script setup lang="ts">
import type { ChatSession } from "@/models/ChatSession";
import TimeDivider from "./TimeDivider.vue";
import MessageItem from "./MessageItem.vue";
import type { Message } from "@/models/Message";

const chat: ChatSession = {
  name: '群聊1',
  avatar: '/src/assets/avatar.jpg',
  time: new Date(2022, 5, 10, 18, 4),
  msg: '路人乙：欢迎新人👏',
  mute: true,
  member: 11
};

const message: Message = {
  userId: '123',
  avatar: '/src/assets/avatar.jpg',
  name: '好友1',
  text: '谁还没打卡',
  me: false
};
</script>

<template>
  <div class="chat-tab">
    <div class="header">
      <div class="name">
        {{ chat.name }}<span v-if="chat.member">({{ chat.member }})</span>
      </div>
      <el-icon :size="20" color="#181818" class="menu">
        <MoreFilled />
      </el-icon>
    </div>

    <div class="content">
      <TimeDivider :time="new Date(2022, 6, 7, 17, 59, 3)" />
      <MessageItem :message="message" />
    </div>

    <div class="footer">
      
    </div>
  </div>
</template>

<style lang="scss">
.chat-tab {
  display: inline-block;
  vertical-align: top;
  width: 649px;
  height: 100%;
  border-radius: 0 10px 10px 0;
  background-color: #F1F1F1;

  >.header {
    height: 30px;
    padding: 20px;
    border-bottom: 1px solid #DEDEDE;
    display: flex;
    align-items: center;

    >.name {
      flex: auto;
      font-size: 18px;
      line-height: 30px;
    }

    >.menu {
      padding: 5px;
    }
  }

  >.content {
    box-sizing: border-box;
    height: 458px;
    overflow: auto;
    padding: 10px 20px
  }

  .footer {
    height: 170px;
    border-top: 1px solid #DEDEDE;
  }
}
</style>