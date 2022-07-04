<script setup lang="ts">
import Avatar from "../components/Avatar.vue";
import { useHomeStore } from "@/stores/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { activeNav } = storeToRefs(homeStore);
</script>

<template>
  <div class="first-side-nav">
    <Avatar url="/src/assets/avatar.jpg" style="margin-top: 80px;" />

    <div class="nav-item" @click="activeNav = 'chat'">
      <el-icon :size="30" color="#676A6A" v-show="activeNav !== 'chat'">
        <ChatRound />
      </el-icon>
      <el-icon :size="30" color="#41B555" v-show="activeNav === 'chat'">
        <ChatLineRound />
      </el-icon>
    </div>
    <div class="nav-item" @click="activeNav = 'contact'">
      <el-icon :size="30" color="#676A6A" v-show="activeNav !== 'contact'">
        <User />
      </el-icon>
      <el-icon :size="30" color="#41B555" v-show="activeNav === 'contact'">
        <UserFilled />
      </el-icon>
    </div>
  </div>
</template>

<style lang="scss">
.first-side-nav {
  display: inline-block;
  vertical-align: top;
  width: 70px;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background-color: var(--first-nav-bg-color);
  text-align: center;

  >.nav-item {
    margin: 20px 0;
  }
}
</style>