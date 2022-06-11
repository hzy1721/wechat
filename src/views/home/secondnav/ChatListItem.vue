<script setup lang="ts">
import Avatar from "../components/Avatar.vue";
import { readableTime } from "@/assets/ts/time";
import { useHomeStore } from "@/stores/home";
import { storeToRefs } from "pinia";

const props = defineProps<{
  chat: ChatSession
}>();

const homeStore = useHomeStore();
const { activeChatName } = storeToRefs(homeStore);
</script>

<template>
  <div :class="['chat-list-item', {'active': activeChatName === chat.name}]" @click="activeChatName = chat.name">
    <Avatar :url="chat.avatar" />
    <div class="right-content">
      <div class="title">
        <div class="name">
          {{ chat.name }}
        </div>
        <div class="time">
          {{ readableTime(chat.time) }}
        </div>
      </div>
      <div class="subtitle">
        <div class="msg">
          {{ chat.msg }}
        </div>
        <el-icon :size="14" color="#A6A6A6" class="mute" v-show="chat.mute">
          <MuteNotification />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.chat-list-item {
  height: 40px;
  padding: 15px;

  >.right-content {
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;

    >.title {
      display: flex;
      align-items: center;
      width: 200px;
      line-height: 16px;

      >.name {
        display: inline-block;
        font-size: 16px;
        flex: auto;
      }

      >.time {
        display: inline-block;
        font-size: 10px;
        color: #A6A6A6;
      }
    }

    >.subtitle {
      line-height: 18px;
      margin-top: 6px;
      display: flex;
      align-items: center;

      >.msg {
        display: inline-block;
        flex: auto;
        font-size: 14px;
        color: #A6A6A6;
      }

      >.mute {
        display: inline-block;
      }
    }
  }
}

.chat-list-item.active {
  background-color: #DDDDDD;
}
</style>