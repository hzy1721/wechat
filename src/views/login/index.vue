<script setup lang="ts">
import { reactive, ref } from "vue";
import Schema from "async-validator";
import { login } from "@/api";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const descriptor = {
  email: {
    type: "email",
    required: true,
    message: "邮箱格式不正确",
  },
  pass: {
    type: "string",
    required: true,
    min: 8,
    max: 16,
    message: "密码长度为8-16位",
  },
};
const validator = new Schema(descriptor);
const form = reactive({
  email: localStorage.getItem('email') || "",
  pass: "",
});
const router = useRouter();
const rememberMe = ref(false);
async function submitLogin() {
  try {
    await validator.validate(form);
    const res = await login(form);
    if (res.status === 200) {
      if (rememberMe.value) {
        localStorage.setItem('email', form.email);
      }
      ElMessage({
        type: "success",
        message: "登录成功",
      });
      router.push("/");
    }
  } catch (err) {
    if (err.errors) {
      ElMessage({
        type: "error",
        message: err.errors[0].message,
      });
    } else if (err.response) {
      if (err.response.status === 404) {
        const data = err.response.data;
        ElMessage({
          type: "error",
          message: data.type === "email" ? "邮箱不存在" : "密码错误",
        });
      } else {
        ElMessage({
          type: "error",
          message: "网络连接错误",
        });
      }
    }
  }
}
</script>

<template>
  <div class="login-container">
    <div class="title">登录</div>

    <div class="form">
      <div class="input-box">
        <div class="label">邮箱</div>
        <input
          type="text"
          placeholder="请填写登录邮箱"
          style="border-radius: 5px 5px 0 0"
          v-model="form.email"
        />
      </div>
      <div class="input-box">
        <div class="label">密码</div>
        <input
          type="password"
          placeholder="请填写密码"
          style="border-radius: 0 0 5px 5px; border-top-color: transparent"
          v-model="form.pass"
        />
      </div>
      <div class="options">
        <div class="checkbox-box">
          <input type="checkbox" id="remember-me" v-model="rememberMe" />
          <label for="remember-me">记住账号</label>
        </div>
        <!-- <a href="/forget" class="forget-password">忘记密码</a> -->
      </div>
      <div class="button-group">
        <a class="btn btn-primary btn-login" @click="submitLogin">登录</a>
        <a
          class="btn btn-default btn-register"
          @click="$router.push('/register')"
          >注册</a
        >
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
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "黑体", Helvetica, Arial,
    Tahoma, sans-serif;

  > .title {
    border-radius: 10px 10px 0 0;
    background-color: #f4f7f9;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    padding-left: 24px;
  }

  > .form {
    display: block;
    padding: 30px 80px;

    > .input-box {
      position: relative;

      > .label {
        position: absolute;
        top: 16px;
        left: 21px;
      }

      > input {
        display: block;
        width: 340px;
        padding: 15px;
        padding-left: 70px;
        outline: none;
        border: 1px solid #e6e7ec;
        line-height: 18px;
      }
    }

    > .options {
      padding: 10px 0;
      position: relative;

      > .checkbox-box {
        display: inline-block;
        cursor: pointer;

        > label {
          padding-left: 10px;
          cursor: pointer;
          user-select: none;
        }
      }

      > .forget-password {
        position: absolute;
        right: 0;
      }
    }

    > .button-group {
      padding: 10px 0;
      width: 100%;
      display: flex;
      justify-content: space-between;

      > .btn {
        padding: 7px 60px;
      }
    }
  }
}
</style>
