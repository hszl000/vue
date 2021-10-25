
<template>
<div class="all">
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane v-for="(item, index) in obj" :key="index" :label="item.label" :name="item.name">
      <el-table :data="item.arr" stripe style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-tab-pane>
      <div class="block">
    <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
  </div>
  </el-tabs>
</div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        obj:[
          {label:'用户管理',name:'first',arr:[
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
        ]},{label:'配置管理',name:'second',arr:[
          {
            date: '2016-05-02',
            name: '哈哈哈',
            address: '上海市普陀区金沙江路 1518 弄',
          },
        ]},{label:'角色管理',name:'third',arr:[
          {
            date: '2016-05-02',
            name: '张1111',
            address: '上海市普陀区金沙江路 1518 弄',
          },{
            date: '2016-05-02',
            name: '张1111',
            address: '上海市普陀区金沙江路 1518 弄',
          },
        ]},
        {label:'定时任务补偿',name:'fourth',arr:[
          {
            date: '2016-05-02',
            name: '六12121',
            address: '上海市普陀区金沙江路 1518 弄',
          },
        ]}]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
    },
  }
</script>

<style scoped>
.all{
  min-width:580px;
}
.el-tabs__content{
  line-height: 0px !important;
  height: auto !important;
}
</style>
