<script setup lang="ts">
import Avatar from "../components/Avatar.vue";
import { useHomeStore } from "@/stores/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { activeFirstNav } = storeToRefs(homeStore);
</script>

<template>
  <div class="first-side-nav">
    <Avatar url="/src/assets/avatar.jpg" style="margin-top: 80px;" />

    <div class="nav-item" @click="activeFirstNav = 'chat'">
      <el-icon :size="30" color="#676A6A" v-show="activeFirstNav !== 'chat'">
        <ChatRound />
      </el-icon>
      <el-icon :size="30" color="#41B555" v-show="activeFirstNav === 'chat'">
        <ChatLineRound />
      </el-icon>
    </div>
    <div class="nav-item" @click="activeFirstNav = 'contact'">
      <el-icon :size="30" color="#676A6A" v-show="activeFirstNav !== 'contact'">
        <User />
      </el-icon>
      <el-icon :size="30" color="#41B555" v-show="activeFirstNav === 'contact'">
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
  background-color: rgba(200, 200, 200, 0.9);
  text-align: center;

  >.nav-item {
    margin: 20px 0;
  }
}
</style>