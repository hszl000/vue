<template>
  <div class="chucun">
    <p><span class='span'>储存管理</span></p>
    <div class="btns">
      <el-row>
        <el-button size="mini" @click="Xin">新建文件夹</el-button>
        <el-button size="mini" @click="remove">删除</el-button>
        <Update @update="Up"/>
      </el-row>
    </div>
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="文件名称" width="120">
          <template #default="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column label="创建时间" width="120">
          <template #default="scope">
            {{$filters.filterTime(scope.row.date)}}
          </template>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template #default="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
              >
              <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
              >
          </template>
        </el-table-column>
      </el-table>
      <Address :dialogVisible="isShow" :obj="obj" :i="index" @isShow="fn" @repl="replaceFn" @none="no"/>
    </div>
  </div>
</template>

<script>
import Address from '../components/Address.vue'
import Update from '../components/Update.vue'
export default {
  name:"Notice",
  components:{Address,Update},
  data(){
    return {
      // 隐藏编辑表单
      isShow:false,
      // 
      obj:{},
      // 
      index:-1,
      // 
      namehh:'',
      kong:'',
      tableData: [
          {
            name: '穿越火线',
            date: '2016-05-03',
            address:'/D:画少梓林',
          },
          {
            name: '英雄联盟',
            date: '2016-05-02',
            address:'/D:画少梓林',
            
          },
          {
            name: '刺激战场',
            date: '2016-05-04',
            address:'/D:画少梓林',
          }
        ],
        multipleSelection: [],
    }
  },
  methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach((row) => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
      },
      // 删除多个
      remove(){
        if(!this.multipleSelection.length) return alert('请选择删除的的内容')
        this.tableData = this.tableData.filter(item=>{
          return !this.multipleSelection.includes(item)
        })
      },
      // 上传数据
      Up(val){
        console.log(val,'22222222')
        this.tableData.unshift(val)
        alert('上传成功')
      },
      // 新建文件
      Xin(){
        this.isShow = true,
        this.kong = true
      },
      // ----------------------------------
      // 编辑
      handleEdit(index, row) {
        console.log(index, row)
        this.obj = {...row}
        this.index = index
        this.isShow = true
      },
      // 删除 单个
      handleDelete(index, row) {
        // console.log(index, row)
        this.tableData.splice(index,1)
      },
      // ___________________
      // 控制编辑隐藏 or 创建
      fn(){
        this.isShow =  false
      },
      // 修改完成隐藏表单
      no(){
        this.isShow = false
      },
      // 调换搜索类型
      nameh(val){
        this.namehh = val
      },
      // 修改
      replaceFn(val,i){
        if(this.kong){
          // 添加
          let obj = {...val,date:new Date()}
          this.tableData.unshift(obj)
          this.kong = false
        }else{
          // 修改
          let obj = {...val,date:new Date()}
          this.tableData.splice(i,1,obj)
        }
      },
    },
}
</script>

<style scoped>
  .chucun{
    text-align: left;
  }
  .btns{
    margin: 16px 0px;
  }
  .span{
    font-size: 25px;
    font-weight: 800;
    border-bottom: 3px solid #000;
    padding: 0px 45px 5px 0px;
  }
</style>