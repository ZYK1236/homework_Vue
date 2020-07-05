<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" label="姓名" has-feedback>
      <a-input
        v-decorator="[
          'studentName',
          {
            rules: [
              {
                required: true,
                message: '请输入姓名!',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="学号" has-feedback>
      <a-input
        v-decorator="[
          'studentNum',
          {
            rules: [
              {
                required: true,
                message: '请输入学号',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="学院" has-feedback>
      <a-input
        v-decorator="[
          'collegeName',
          {
            rules: [{ required: true, message: '请输入学院' }],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="专业" has-feedback>
      <a-input
        v-decorator="[
          'subjectName',
          {
            rules: [{ required: true, message: '请输入专业' }],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="班级" has-feedback>
      <a-input
        v-decorator="[
          'className',
          {
            rules: [{ required: true, message: '请输入班级' }],
          },
        ]"
      >
      </a-input>
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="性别" has-feedback>
      <a-select
        v-decorator="[
          'studentIsMale',
          {
            rules: [{ required: true, message: '请输入性别' }],
          },
        ]"
      >
        <a-select-option v-for="i in chooseItem" :key="i">
          {{ i }}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="出生日期" has-feedback>
      <a-date-picker
        v-decorator="[
          'studentBirthDate',
          {
            rules: [{ required: true, message: '请输入性别' }],
          },
        ]"
        style="width: 100%"
      />
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
      chooseItem: ["男", "女"],
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log(values.studentIsMale);

          values.studentIsMale = values.studentIsMale === "男" ? true : false;
          console.log(values.studentBirthDate._d);
          
          values.studentBirthDate =
            values.studentBirthDate._d
              .getTime()
              .toString()
              .slice(0, -3) - 0;
          console.log("Received values of form: ", values);

          this.$store.commit({
            type: "commitMessage",
            values,
          });
          this.$store.commit({
            type: "commitStep",
            step: 1,
          });
        }
      });
    },
  },
};
</script>
