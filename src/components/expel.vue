<template>
  <div>
    <a-table :columns="columns" :data-source="data" bordered :loading="loading">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" />学生姓名</span>
    </a-table>
  </div>
</template>
<script>
import { getFiring } from "../api/index";

const columns = [
  {
    align: "center",
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    align: "center",
    title: "出生日期",
    dataIndex: "birthDate",
    key: "birthDate",
  },
  {
    align: "center",
    title: "学号",
    dataIndex: "studentNum",
    key: "studentNum",
  },
  {
    align: "center",
    title: "学院",
    dataIndex: "collegeName",
    key: "collegeName",
  },
  {
    align: "center",
    title: "专业",
    dataIndex: "subjectName",
    key: "subjectName",
  },
  {
    align: "center",
    title: "班级",
    dataIndex: "className",
    key: "className",
  },
  {
    align: "center",
    title: "性别",
    key: "male",
    dataIndex: "male",
  }
];

export default {
  async mounted() {
    const content = await getFiring();
    console.log(content);
    
    this.loading = false
    content.forEach((element) => {
      element.birthDate = new Date(element.birthDate * 1000).toLocaleString().slice(0,-10)
      element.male = element.male ? "男" : "女";
    });
    this.data = content;
  },
  data() {
    return {
      data: [],
      columns,
      name: "",
      id: 0,
      loading: true
    };
  },
  methods: {
    handleOk_1(e) {
      console.log(e);
      this.visible_1 = false;
    },
    handleOk_2(e) {
      console.log(e);
      this.visible_2 = false;
    },
  },
};
</script>
