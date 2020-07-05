<template>
  <a-result
    status="error"
    title="您有一个接口出错访问失败！"
    sub-title="请按f12打开控制台查看是哪个接口出错."
  >
    <template #extra>
      <a-button key="console" type="primary">
        Go Console
      </a-button>
      <a-button key="buy">
        Buy Again
      </a-button>
    </template>

    <div class="desc">
      <p style="font-size: 16px;">
        <strong>错误可能是以下造成的</strong>
      </p>
      <p>
        <a-icon :style="{ color: 'red' }" type="close-circle" /> 输入的接口地址有误，请再次检查
      </p>
      <p>
        <a-icon :style="{ color: 'red' }" type="close-circle" /> 前端请求参数与后端接口设计的字段不一致，请参照README文件中的模板后端接口来设计
      </p>
    </div>
  </a-result>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.desc p {
  margin-bottom: 1em;
}
</style>
