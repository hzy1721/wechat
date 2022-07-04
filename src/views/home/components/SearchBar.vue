<script setup lang="ts">
import { useHomeStore } from '@/stores/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore();
const { searchText } = storeToRefs(homeStore);
</script>

<template>
  <div class="search-bar">
    <el-icon :size="16" color="#AEAEAE" class="search-icon">
      <Search />
    </el-icon>
    <input type="text" placeholder="搜索" v-model="searchText" />
    <el-icon :size="16" color="#AEAEAE" class="cancel-icon" v-show="searchText" @click="searchText = ''">
      <CircleCloseFilled />
    </el-icon>
  </div>
</template>

<style lang="scss">
.search-bar {
  position: relative;
  width: 190px;

  .search-icon {
    position: absolute;
    top: 7px;
    left: 7px;
  }

  input {
    width: 190px;
    height: 30px;
    padding: 0 30px;
    border: none;
    border-radius: 5px;
    background-color: #e9e9e9;
  }

  .cancel-icon {
    position: absolute;
    top: 7px;
    right: 7px;
  }
}
</style>