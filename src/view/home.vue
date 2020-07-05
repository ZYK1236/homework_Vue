<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1" @click="checkIn">
          录入学生信息
        </a-menu-item>
        <a-menu-item key="2">
          <router-link :to="{ name: 'Student_info' }"
            >学生基本信息表</router-link
          >
        </a-menu-item>
        <a-menu-item key="3">
          <router-link :to="{ name: 'Expel' }">快要被开除的学生</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>数据库大作业</a-breadcrumb-item>
        <a-breadcrumb-item>学生基本信息表格</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '100%' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      前端by zyk❤️
    </a-layout-footer>
    <a-modal
      title="Title"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <Form v-if="countStep === 0"></Form>
      <Form2 v-else-if="countStep === 1"></Form2>
      <Form3 v-else></Form3>
    </a-modal>
  </a-layout>
</template>
<script>
import Form from "../components/form";
import Form2 from "../components/form_2";
import Form3 from "../components/form_3";

export default {
  data() {
    return {
      ModalText: "Content of the modal",
      visible: false,
    };
  },
  components: {
    Form,
    Form2,
    Form3,
  },
  computed: {
    countStep() {
      return this.$store.state.registerStep;
    },
  },
  watch: {
    countStep(newV) {
      if (newV === 3) {
        this.visible = false;
        this.$store.commit({
          type: "clearStep",
        });
      }
    },
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleCancel(e) {
      console.log(e);
      console.log("Clicked cancel button");
      this.visible = false;
    },
    checkIn() {
      this.visible = true;
    }
  },
};
</script>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
