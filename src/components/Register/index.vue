<template>
  <div>
    <van-nav-bar title="登录账号" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="mobile"
        name="mobile"
        placeholder="请输入账号"
        :rules="mobileRules"
      >
      </van-field>
      <van-field v-model="code" name="code" placeholder="请输入密码" />
      <div style="margin: 0.42rem">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mobileRules } from "../rules.js";
import { login } from "@/api/user";
export default {
  data() {
    return {
      mobile: "",
      code: "",
      mobileRules,
    };
  },
  methods: {
    async onSubmit() {
      try {
        const res = await login(this.mobile, this.code);
        this.$toast.success("登录成功");
        console.log(res);
      } catch (error) {
        // 细分失败
        const status = error.response.status;
        let message = "请重新登陆";

        if (status === 400) {
          message = error.response.data.message;
        }

        this.$toast.fail(message);
      }
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: rgb(68, 195, 106);
}
</style>
