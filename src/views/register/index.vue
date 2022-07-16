<script setup lang="ts">
import { reactive, ref } from "vue";
import Schema from "async-validator";
import { verifyEmail, register } from "@/api";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const form = reactive({
  email: "",
  code: "",
  pass: "",
  passRepeat: "",
});
const fieldErrors = reactive({
  email: "",
  code: "",
  pass: "",
  passRepeat: "",
});

const descriptor = {
  email: {
    type: "email",
    required: true,
    message: "邮箱格式不正确",
  },
  code: {
    type: "string",
    required: true,
    pattern: /^[0-9a-z]{6}$/,
    message: "验证码为6位数字+字母",
  },
  pass: {
    type: "string",
    required: true,
    pattern: /^[\w!@#$%]{8,16}$/,
    message:
      "密码长度为8-16位，可以包含大小写字母、数字以及 _!@#$% 6种特殊字符",
  },
  passRepeat: {
    type: "string",
    required: true,
    validator: (rule, value) => value === form.pass,
    message: "两次输入的密码不一致",
  },
};
const validator = new Schema(descriptor);
function validateForm(field: string) {
  validator
    .validate(form, { firstFields: [field] })
    .then(() => {
      fieldErrors[field] = "";
      return true;
    })
    .catch(({ errors, fields }) => {
      if (fields[field]) {
        fieldErrors[field] = fields[field][0].message;
        return false;
      } else {
        fieldErrors[field] = "";
        return true;
      }
    });
}

const verifyEmailStatus = ref("ready");
const waitSeconds = ref(60);
function waitOneMinute() {
  waitSeconds.value = 60;
  const interval = setInterval(() => (waitSeconds.value -= 1), 1000);
  verifyEmailStatus.value = "waiting";
  setTimeout(() => {
    verifyEmailStatus.value = "ready";
    clearInterval(interval);
  }, 60000);
}
async function submitSendCode() {
  validateForm("email");
  if (!/^.+@([A-Za-z]+\.)+[A-Za-z]+$/.test(form.email)) {
    return;
  }
  const sendSuccess = await verifyEmail(form.email);
  if (sendSuccess) {
    waitOneMinute();
    ElMessage({
      message: "验证码已发送到您的邮箱",
      type: "success",
    });
  } else {
    // ElMessage({
    //   message: "邮件发送失败",
    //   type: "error",
    // });
    waitOneMinute();
    ElMessage({
      message: "验证码已发送到您的邮箱",
      type: "success",
    });
  }
}

function validateAll() {
  validator.validate(form).catch(({ errors, fields }) => {
    Object.keys(fields).forEach((key) => {
      fieldErrors[key] = fields[key][0].message;
    });
  });
}
const router = useRouter();
async function submitRegister() {
  validator
    .validate(form)
    .then(() => register(form))
    .then((res) => {
      if (res) {
        ElMessage({
          message: "注册成功！",
          type: "success",
        });
        router.push('/');
      } else {
        ElMessage({
          message: "注册失败！",
          type: "error",
        });
      }
    })
    .catch(({ errors, fields }) => {
      Object.keys(fields).forEach((key) => {
        fieldErrors[key] = fields[key][0].message;
      });
    });
}
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
          <input
            type="email"
            placeholder="将用作登录账户"
            v-model="form.email"
            :class="{ error: fieldErrors.email.length }"
            @change="validateForm('email')"
          />
          <button
            type="button"
            :class="{
              disabled:
                !/^.+@([A-Za-z]+\.)+[A-Za-z]+$/.test(form.email) ||
                verifyEmailStatus === 'waiting',
            }"
            @click="submitSendCode"
          >
            {{
              verifyEmailStatus === "ready"
                ? "验证邮箱"
                : `${waitSeconds}秒后重发`
            }}
          </button>
        </div>
        <div class="error-message" v-if="fieldErrors.email.length">
          {{ fieldErrors.email }}
        </div>
      </div>
    </div>

    <div class="input-item">
      <div class="label">验证码</div>
      <div class="right-part">
        <input
          type="text"
          placeholder="请回填邮件中的6位验证码"
          v-model="form.code"
          :class="{ error: fieldErrors.code.length }"
          @change="validateForm('code')"
        />
        <div class="error-message" v-show="fieldErrors.code.length">
          {{ fieldErrors.code }}
        </div>
      </div>
    </div>

    <div class="input-item">
      <div class="label">密码</div>
      <div class="right-part">
        <input
          type="password"
          placeholder="含数字，字母，区分大小写，最短8位"
          v-model="form.pass"
          :class="{ error: fieldErrors.pass.length }"
          @change="validateForm('pass')"
        />
        <div class="error-message" v-show="fieldErrors.pass.length">
          {{ fieldErrors.pass }}
        </div>
      </div>
    </div>

    <div class="input-item">
      <div class="label">确认密码</div>
      <div class="right-part">
        <input
          type="password"
          placeholder="请再次输入密码"
          v-model="form.passRepeat"
          :class="{ error: fieldErrors.passRepeat.length }"
          @change="validateForm('passRepeat')"
        />
        <div class="error-message" v-show="fieldErrors.passRepeat.length">
          {{ fieldErrors.passRepeat }}
        </div>
      </div>
    </div>

    <button class="btn-register" @click="submitRegister">注册</button>
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
  font-family: "Helvetica Neue", "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
  color: #353535;
  border-radius: 10px;
  position: relative;

  > .back-button {
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
    color: #333;
    border: 1px solid #e4e8eb;
    background-color: #fbfbfb;
    border-radius: 3px;
    cursor: pointer;
  }

  button:hover {
    color: #858585;
    background-color: #eff0f2;
  }

  button.disabled {
    color: #cccdcd;
    background-color: #f5f6f6;
    border-color: #e4e8eb;
    cursor: default;
  }

  > .input-item {
    margin: 20px 0;

    > .label {
      display: inline-block;
      vertical-align: top;
      width: 100px;
      font-size: 16px;
      line-height: 40px;
    }

    > .right-part {
      display: inline-block;
      vertical-align: top;

      > .input-line {
        > input {
          width: 250px;
        }
      }

      input {
        width: 370px;
        height: 40px;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid #e4e8eb;
      }

      input:focus {
        border-color: var(--success-color);
      }

      input.error {
        border-color: var(--error-color);
      }

      button {
        width: 100px;
        margin-left: 20px;
      }

      > .error-message {
        color: #fa5151;
        margin: 10px 0;
      }
    }
  }

  > .btn-register {
    width: 80px;
    margin-left: 200px;
  }
}
</style>
