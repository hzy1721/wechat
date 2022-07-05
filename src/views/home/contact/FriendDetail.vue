<script setup lang="ts">
import Avatar from "../components/Avatar.vue";
import Divider from "../components/Divider.vue";
const user = {
  id: 'wxid_12345',
  name: '四月一日',
  gender: 'male',
  avatar: '/src/assets/avatar.jpg',
  remark: 'hzy',
};

const userInfo = {
  备注名: user.remark,
  微信号: user.id
};
</script>

<template>
  <div class="friend-detail">
    <div class="basic">
      <span>{{ user.name }}</span>
      <i class="uil uil-mars" v-if="user.gender === 'male'"></i>
      <i class="uil uil-venus" v-else-if="user.gender === 'female'"></i>
      <Avatar :url="user.avatar" :size="80" />
    </div>
    <Divider />
    <div class="info">
      <div class="info-item" v-for="(value, name) in userInfo">
        <span class="item-name">{{ name }}</span>
        <span class="item-value">{{ value }}</span>
      </div>
    </div>
    <button>发消息</button>
  </div>  
</template>

<style lang="scss">
.friend-detail {
  width: 100%;
  height: 100%;
  padding: 100px;
  
  >.basic {
    position: relative;
    height: 100px;

    >span {
      font-size: 20px;
      font-weight: 400;
    }

    >i {
      margin-left: 5px;
      font-size: 20px;
    }

    >i.uil-mars {
      color: var(--male-icon-color);
    }

    >i.uil-venus {
      color: var(--female-icon-color);
    }

    >.avatar {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  >.info {
    padding-top: 20px;

    >.info-item {
      margin: 10px 0;
      font-size: 15px;
      
      >.item-name {
        display: inline-block;
        width: 100px;
        color: var(--text-dark-color);
      }
    }
  }

  >button {
    display: block;
    width: 130px;
    height: 38px;
    margin: 0 auto;
    margin-top: 100px;
  }
}
</style>