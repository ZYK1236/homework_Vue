<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" label="语文老师" has-feedback>
      <a-input
        v-decorator="[
          'chineseTeacherName',
          { rules: [{ required: true, message: '请输入语文老师!' }] },
        ]"
      >
      </a-input>
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="数学老师" has-feedback>
      <a-input
        v-decorator="[
          'mathTeacherName',
          { rules: [{ required: true, message: '请输入数学老师!' }] },
        ]"
      >
      </a-input>
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="英语老师" has-feedback>
      <a-input
        v-decorator="[
          'englishTeacherName',
          { rules: [{ required: true, message: '请输入英语老师!' }] },
        ]"
      >
      </a-input>
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="选修课老师" has-feedback>
      <a-input
        v-decorator="[
          'renXuanTeacherName',
          { rules: [{ required: true, message: '请输入选修课老师!' }] },
        ]"
      >
      </a-input>
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="限选课老师" has-feedback>
      <a-input
        v-decorator="[
          'xianXuanTeacherName',
          { rules: [{ required: true, message: '请输入限选课老师!' }] },
        ]"
      >
      </a-input>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit" :loading="loading">
        完成填写
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { postMsg } from "../api/index";
import { message } from "ant-design-vue";

export default {
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
      loading: false,
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  methods: {
    handleSubmit(e) {
      this.loading = true;
      message.info("正在上传数据...");
      e.preventDefault();
      this.form.validateFieldsAndScroll(async (err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$store.commit({
            type: "commitMessage",
            values,
          });
          await postMsg(this.$store.state.studentMsg);
          message.success("上传数据成功...");
          
          this.$store.commit({
            type: "commitStep",
            step: 3,
          });
          this.$router.go(0)
        }
      });
    },
  },
};
</script>

<style></style>
