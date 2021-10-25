
<template>
<el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>内部管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/notice"><el-menu-item index="1-1">储存管理</el-menu-item></router-link>
          <router-link to="/about"><el-menu-item index="1-2">Note</el-menu-item></router-link>
          <router-link to="/"><el-menu-item index="1-3">人事管理</el-menu-item></router-link>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <i class="el-icon-location"></i>
          <span>内部管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">公告</el-menu-item>
          <el-menu-item index="2-2">组织架构</el-menu-item>
          <el-menu-item index="2-3">人事管理</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-col>

</el-row>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
    },
  }
</script>

<style scoped>
.el-container{
    height: 100vh;
}
    .tac{
        display: block;
        width: 100% !important;
    }
    .el-col-12{
        width: 100% !important;
        max-width: 100%;
    }
    .el-menu{
        width: 100% !important;
    }
    a{
      text-decoration: none !important;
    }
</style>
