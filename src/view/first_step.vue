<template>
  <a-result title="Great, 前端模板启动成功!  🎉🎉">
    <template #icon>
      <a-icon type="smile" theme="twoTone" />
    </template>
    <template #extra>
      <a-input
        v-model="base"
        placeholder="输入你后端接口地址的baseUrl进行第一步配置，例: http://localhost:8080"
        style="width:70%;margin: 30px"
      />
      <div style="width: 40%;margin:0 auto">
        <a-alert
          message="不输入任何内容将使用默认配置!!!  如果您是第一次启动该项目，建议不输入任何内容直接点击next使用默认配置先跑一下流程"
          type="warning"
          show-icon
          style="margin-bottom:30px"
        />
        <a-alert
          message="如果你不知道什么是后端接口地址的baseUrl，请查看项目README文件中的 2.3(1)里面的内容"
          type="info"
          show-icon
          style="margin-bottom: 30px"
        />
      </div>
      <a-button type="primary" @click="commitBase" :loading="loading">
        Next
      </a-button>
    </template>
  </a-result>
</template>
<script>
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      base: "",
      loading: false,
    };
  },
  methods: {
    commitBase() {
      this.loading = true;
      setTimeout(() => {
        if (this.base) {
          if (this.base.includes("http") || this.base.includes("https")) {
            this.$store.commit({
              type: "commitBase",
              base: this.base,
            });
            this.$router.push({ name: "Second" });
          } else {
            message.error("填写地址请以 http/https开头");
            this.loading = false;
          }
        } else {
          this.$router.push({ name: "Second" });
        }
      }, 1000);
    },
  },
};
</script>
