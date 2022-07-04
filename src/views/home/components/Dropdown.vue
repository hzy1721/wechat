<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  }
});

const showList = ref(false);
</script>

<template>
  <div class="drop-down">
    <div class="header" @click="showList = !showList">
      <el-icon class="icon" v-show="!showList"><ArrowRightBold /></el-icon>
      <el-icon class="icon" v-show="showList"><ArrowDownBold /></el-icon>
      <span class="title">{{ title }}</span>
      <span class="count" v-show="count > 0">{{ count }}</span>
    </div>
    <div class="list" v-show="showList">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.drop-down {
  padding: 0 15px;
  margin: 10px 0;

  >.header {
    display: flex;
    position: relative;

    .icon {
      font-size: 18px;
      color: var(--icon-color);
      margin-right: 10px;
    }

    .title {
      font-size: 15px;
    }

    .count {
      position: absolute;
      top: 0;
      right: 0;
      text-align: right;
      color: var(--text-dark-color);
    }
  }

  >.list {
    margin-top: 20px;
    margin-left: 20px;
  }
}
</style>