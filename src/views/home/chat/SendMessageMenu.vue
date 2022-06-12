<script setup lang="ts">
import IconSmile from "../../icon/IconSmile.vue";

</script>

<template>
  <div class="send-message-menu">
    <IconSmile style="width: 25px; height: 25px; fill: #747474; margin-right: 15px;" />
    <el-icon :size="25" color="#747474">
      <ChatDotRound />
    </el-icon>
  </div>
</template>

<style lang="scss">
.send-message-menu {
  height: 25px;
  margin-bottom: 15px;
}
</style>