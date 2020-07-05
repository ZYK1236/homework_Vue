<template>
  <a-result :title="baseUrl">
    <template #extra>
      <div>
        <span>查询学生列表接口：</span>
        <a-input
          :addon-before="$store.state.baseUrl"
          placeholder="你的接口后缀,例: /student"
          style="width:70%"
          v-model="afterUrl_1"
        />
      </div>
      <div>
        <span>查询某个学生对应的成绩：</span>
        <a-input
          :addon-before="$store.state.baseUrl"
          placeholder="你的接口后缀,例: /student"
          style="width:70%"
          v-model="afterUrl_2"
        />
      </div>
      <div>
        <span>查询某个学生对应的老师：</span>
        <a-input
          :addon-before="$store.state.baseUrl"
          placeholder="你的接口后缀,例: /student"
          style="width:70%"
          v-model="afterUrl_3"
        />
      </div>
      <div>
        <span>查询快被开除的学生：</span>

        <a-input
          :addon-before="$store.state.baseUrl"
          placeholder="你的接口后缀,例: /student"
          style="width:70%"
          v-model="afterUrl_4"
        />
      </div>
      <span>提交学生信息表单：</span>
      <a-input
        :addon-before="$store.state.baseUrl"
        placeholder="你的接口后缀,例: /student"
        style="width:70%"
        v-model="afterUrl_5"
      />
      <a-alert
        message="不输入任何内容将使用默认配置!!! 如果您是第一次启动该项目，建议不输入任何内容直接点击完成配置使用默认配置先跑一下流程"
        type="info"
        show-icon
        style="width:50%;margin:30px auto"
      />
      <a-button
        key="console"
        type="primary"
        @click="overHandler"
        :loading="loading"
      >
        完成配置
      </a-button>
    </template>
  </a-result>
</template>
<script>
import {
  checkUrlRight,
  getFiring,
  getTeacher,
  getGrade,
  postMsg,
} from "../api/index";
const test = {
  chineseFirstScore: 0,
  chineseSecondScore: 0,
  chineseTeacherName: "string",
  className: "string",
  collegeName: "string",
  englishFirstScore: 0,
  englishSecondScore: 0,
  englishTeacherName: "string",
  mathFirstScore: 0,
  mathSecondScore: 0,
  mathTeacherName: "string",
  renXuanFirstScore: 0,
  renXuanSecondScore: 0,
  renXuanTeacherName: "string",
  studentBirthDate: 0,
  studentIsMale: true,
  studentName: "测试数据",
  studentNum: 0,
  subjectName: "string",
  xianXuanFirstScore: 0,
  xianXuanSecondScore: 0,
  xianXuanTeacherName: "string",
};

export default {
  computed: {
    baseUrl() {
      return `注意:你的baseUrl为${this.$store.state.baseUrl}，请确认无误`;
    },
  },
  data() {
    return {
    afterUrl_1: "/student",
    afterUrl_2: "/student/score",
    afterUrl_3: "/student/teacher",
    afterUrl_4: "/student/firing",
    afterUrl_5: "/data",
      loading: false,
    };
  },
  methods: {
    async overHandler() {
      this.loading = true;
      this.$store.commit({
        type: "commitAfter",
        index: 1,
        afterUrl: this.afterUrl_1,
      });
      this.$store.commit({
        type: "commitAfter",
        index: 2,
        afterUrl: this.afterUrl_2,
      });
      this.$store.commit({
        type: "commitAfter",
        index: 3,
        afterUrl: this.afterUrl_3,
      });
      this.$store.commit({
        type: "commitAfter",
        index: 4,
        afterUrl: this.afterUrl_4,
      });
      this.$store.commit({
        type: "commitAfter",
        index: 5,
        afterUrl: this.afterUrl_5,
      });
      try {
        this.$message.info("正在验证接口是否正常，这可能需要一些时间...");
        const data = await Promise.all([
          getGrade(1),
          getTeacher(1),
          getFiring(),
          checkUrlRight(),
          postMsg(test),
        ]);
        this.$message.success("接口正常！");
        console.log(data);
        setTimeout(() => {
          this.$router.push({ name: "Home" });
        }, 1000);
      } catch (error) {
        console.log(error);

        this.$router.push({ name: "Error" });
      }
    },
  },
};
</script>
