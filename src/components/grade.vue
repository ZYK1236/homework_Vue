<template>
  <a-table :columns="columns" :data-source="data" :loading="loading">
    <a slot="name" slot-scope="text">{{ text }}</a>
  </a-table>
</template>
<script>
import { getGrade } from "../api/index";
import { message } from 'ant-design-vue';
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "语文",
    dataIndex: "text",
    key: "text",
  },
  {
    title: "数学",
    dataIndex: "math",
    key: "math",
  },
  {
    title: "英语",
    dataIndex: "english",
    key: "english",
  },
  {
    title: "选修课",
    dataIndex: "optional",
    key: "optional",
  },
  {
    title: "限选课",
    dataIndex: "limit",
    key: "limit",
  },
  {
    title: "必修课平均分",
    dataIndex: "required_average",
    key: "required_average",
  },
  {
    title: "全部科目平均分",
    dataIndex: "all_average",
    key: "all_average",
  },
];
export default {
  async mounted() {
    message.info('获取数据中...')
    const data = await getGrade(this.id);
    message.success('获取成功')
    this.loading = false;
    const tempObj = {}
    for(let i = 0;i<data.length;i++) {
      let subject = this.subjectName[i];
      let subjectGrade = data[i];
      tempObj[subject] = subjectGrade.firstScore
    }
    tempObj.name = this.name
    tempObj.required_average = (tempObj.text + tempObj.math + tempObj.english) / 3;
    tempObj.all_average = (tempObj.text + tempObj.math + tempObj.english + tempObj.optional + tempObj.limit) / 5
    this.data.push(tempObj)
  },
  props: ["name", "id"],
  data() {
    return {
      data: [],
      columns,
      subjectName: ['text','math','english','optional','limit'],
      loading: true
    };
  },
};
</script>
