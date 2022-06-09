<script setup lang="ts">
import { ref } from 'vue';

const rememberMe = ref(false);
const errorMessage = ref('');
</script>

<template>
  <div class="login-container">
    <div class="title">登录</div>

    <div class="form">
      <div class="input-box">
        <div class="label">邮箱</div>
        <input type="text" placeholder="请填写登录邮箱" style="border-radius: 5px 5px 0 0;" />
      </div>
      <div class="input-box">
        <div class="label">密码</div>
        <input type="password" placeholder="请填写密码" style="border-radius: 0 0 5px 5px; border-top-color: transparent;" />
      </div>
      <div class="options">
        <div class="checkbox-box">
          <input type="checkbox" id="remember-me" v-model="rememberMe" />
          <label for="remember-me">记住账号</label>
        </div>
        <a href="/forget" class="forget-password">忘记密码</a>
      </div>
      <div class="error-message" v-show="errorMessage">
        {{ errorMessage }}
      </div>
      <div class="button-group">
        <a class="btn btn-primary btn-login">登录</a>
        <a class="btn btn-default btn-register">注册</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.login-container {
  width: 500px;
  margin: 200px auto;
  border-radius: 10px;
  background-color: #fff;
  color: #333;

  >.title {
    border-radius: 10px 10px 0 0;
    background-color: #f4f7f9;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    padding-left: 24px;
  }

  >.form {
    display: block;
    padding: 30px 80px;

    >.input-box {
      position: relative;

      >.label {
        position: absolute;
        top: 16px;
        left: 21px;
      }

      >input {
        display: block;
        width: 255px;
        padding: 15px;
        padding-left: 70px;
        outline: none;
        border: 1px solid #e6e7ec;
        line-height: 18px;
      }
    }

    >.options {
      padding: 10px 0;
      position: relative;

      >.checkbox-box {
        display: inline-block;
        cursor: pointer;

        >label {
          padding-left: 10px;
          cursor: pointer;
          user-select: none;
        }
      }

      >.forget-password {
        position: absolute;
        right: 0;
      }
    }

    >.error-message {
      color: #e96262;
      padding: 10px 0;
    }

    >.button-group {
      padding: 10px 0;
      margin-right: -20px;

      >.btn {
        height: 32px;
        line-height: 32px;
        padding: 0 49px;
        margin-right: 20px;
      }
    }
  }

}
</style>