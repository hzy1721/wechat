<script setup lang="ts">
import { computed, reactive } from 'vue';

const form = reactive({
  email: '',
  code: '',
  pass: '',
  passRepeat: '',
});

const message = computed(() => {
  const msg = {
    email: '',
    code: '',
    pass: '',
    passRepeat: '',
  };
  if (form.email.length === 0) {
    msg.email = '请输入邮箱';
  } else if (!/^.+@([A-Za-z]+\.)+[A-Za-z]+$/.test(form.email)) {
    msg.email = '请输入正确邮箱';
  }
  if (form.code.length === 0) {
    msg.code = '请输入验证码';
  } else if (!/^\d{6}$/.test(form.code)) {
    msg.code = '验证码错误，请填写正确的验证码';
  }
  if (form.pass.length === 0) {
    msg.pass = '请输入密码';
  }
  if (form.passRepeat !== form.pass) {
    msg.passRepeat = '密码输入不一致';
  }
  return msg;
});
</script>

<template>
  <div class="register-view">

    <div class="back-button" @click="$router.push('/login')">
      <el-icon :size="30" color="#353535">
        <ArrowLeftBold />
      </el-icon>
    </div>

    <div class="input-item">
      <div class="label">邮箱</div>
      <div class="right-part">
        <div class="input-line">
          <input type="text" placeholder="将用作登录账户" v-model="form.email" />
          <button>激活邮箱</button>
        </div>
        <div class="error-message" v-show="message.email">
          {{ message.email }}
        </div>
      </div>
    </div>

    <div class="input-item">
      <div class="label">验证码</div>
      <div class="right-part">
        <input type="number" placeholder="请回填邮件中的6位验证码" v-model="form.code" />
        <div class="error-message" v-show="message.code">
          {{ message.code }}
        </div>
      </div>
    </div>

    <div class="input-item">
      <div class="label">密码</div>
      <div class="right-part">
        <input type="password" placeholder="含数字，字母，区分大小写，最短8位" v-model="form.pass" />
        <div class="error-message" v-show="message.pass">
          {{ message.pass }}
        </div>
      </div>
    </div>

    <div class="input-item">
      <div class="label">确认密码</div>
      <div class="right-part">
        <input type="password" placeholder="请再次输入密码" v-model="form.passRepeat" />
        <div class="error-message" v-show="message.passRepeat">
          {{ message.passRepeat }}
        </div>
      </div>
    </div>

    <button class="btn-register">注册</button>

  </div>
</template>

<style lang="scss">
.register-view {
  box-sizing: border-box;
  width: 900px;
  padding: 70px 100px 70px 190px;
  margin: 100px auto;
  background-color: #fff;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 5%);
  font-size: 14px;
  line-height: 1.6;
  font-family: "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
  color: #353535;
  border-radius: 10px;
  position: relative;

  >.back-button {
    position: absolute;
    top: 30px;
    left: 30px;
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    padding: 9px;
    border: 1px solid #353535;
    border-radius: 25px;
  }

  button {
    height: 40px;
    border: 1px solid #e4e8eb;
    background-color: #fbfbfb;
    border-radius: 3px;
    cursor: pointer;
  }

  button:hover {
    color: #858585;
    background-color: #eff0f2;
  }

  >.input-item {

    margin: 20px 0;

    >.label {
      display: inline-block;
      vertical-align: top;
      width: 100px;
      font-size: 16px;
      line-height: 40px;
    }

    >.right-part {
      display: inline-block;
      vertical-align: top;

      >.input-line {

        >input {
          width: 250px;
        }
      }

      input {
        width: 370px;
        height: 20px;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid #e4e8eb;
      }

      button {
        width: 100px;
        margin-left: 20px;
      }

      >.error-message {
        color: #fa5151;
        margin: 10px 0;
      }
    }
  }

  >.btn-register {
    width: 80px;
    margin-left: 200px;
  }
}
</style>