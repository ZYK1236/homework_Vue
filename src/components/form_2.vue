<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" label="语文成绩" has-feedback>
      <a-input
        v-decorator="[
          'chineseFirstScore',
          { rules: [{ required: true, message: '请输入语文成绩!' }] },
        ]"
      >
      </a-input>
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="数学成绩" has-feedback>
      <a-input
        v-decorator="[
          'mathFirstScore',
          { rules: [{ required: true, message: '请输入数学成绩!' }] },
        ]"
      >
      </a-input>
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="英语成绩" has-feedback>
      <a-input
        v-decorator="[
          'englishFirstScore',
          { rules: [{ required: true, message: '请输入英语成绩!' }] },
        ]"
      >
      </a-input>
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="选修成绩" has-feedback>
      <a-input
        v-decorator="[
          'renXuanFirstScore',
          { rules: [{ required: true, message: '请输入选修成绩!' }] },
        ]"
      >
      </a-input>
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="限选成绩" has-feedback>
      <a-input
        v-decorator="[
          'xianXuanFirstScore',
          { rules: [{ required: true, message: '请输入限选成绩!' }] },
        ]"
      >
      </a-input>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        下一步
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
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
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  methods: {
    handleSubmit(e) {
      this.$emit("close");
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          const tempArr = ["chinese", "math", "english", "renXuan", "xianXuan"];
          tempArr.forEach((element) => {
            let key = element + "SecondScore";
            values[key] = -1;
          });
          this.$store.commit({
            type: "commitMessage",
            values,
          });
          this.$store.commit({
            type: "commitStep",
            step: 2,
          });
        }
      });
    },
  },
};
</script>
