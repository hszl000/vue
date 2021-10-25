<template>
<div class="common-layout">
  <el-container>
    <el-header>
      <Headers/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Aside/>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
import Headers from './components/Headers.vue'
import Aside from './components/Aside.vue'
export default {
  name:'App',
  components:{
    Headers,Aside
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app{
  height: 100vh;
}
.el-header{
    background-color: #437ed8;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #ffffff;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    padding: 10px !important;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container{
    height: 96%;
  }
      .el-tabs__content{
    overflow: none !important;
    background: whiet !important;
  }
  .common-layout{
    overflow: hidden;
    min-width:900px;
    height: 100vh;
    margin-bottom: 30px;
  }
</style>
