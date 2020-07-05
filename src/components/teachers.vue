<template>
  <a-table :columns="columns" :data-source="data" :loading="loading">
    <a slot="name" slot-scope="text">{{ text }}</a>
  </a-table>
</template>
<script>
import { getTeacher } from "../api/index.js"
import { message } from 'ant-design-vue';

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "语文老师",
    dataIndex: "text",
    key: "text",
  },
  {
    title: "数学老师",
    dataIndex: "math",
    key: "math",
  },
  {
    title: "英语老师",
    dataIndex: "english",
    key: "english",
  },
  {
    title: "限选课老师",
    dataIndex: "optional",
    key: "optional",
  },
  {
    title: "选修课老师",
    dataIndex: "limit",
    key: "limit"
  }
];

export default {
  props: ["name","id"],
  async mounted() {
    message.info('获取数据中...')
    const data = await getTeacher(this.id);
    console.log(data);
    
    this.loading = false
    message.success('获取成功')
    this.loading = false;
    const tempObj = {}
    for(let i = 0;i<data.length;i++) {
      let subject = this.subjectName[i];
      let subjectGrade = data[i];
      tempObj[subject] = subjectGrade.teacherName
    }
    tempObj.name = this.name
    this.data.push(tempObj)
  },
  data() {
    return {
      data: [],
      subjectName: ['text','math','english','optional','limit'],
      columns,
      loading: true
    };
  },
};
</script>
