<template>
  <div>
    <ul class="ul">
      <li>
        <!-- 添加List组件 -->
        <AddList @addList='addList'/>
      </li>
      <li>
        <!-- 搜索组件 -->
        <Seos @seo="seo" @hname="nameh"/>
      </li>
    </ul>
    <div>
      <!-- List数据表格 -->
      <div class="table">
        <el-table :data="table" style="width: 100%">
          <el-table-column label="实例名称" width="180">
          <template #default="scope">
              <i class="el-icon-user-solid"></i>
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
          </el-table-column>
          <el-table-column label="状态" width="180">
          <template #default="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{$filters.filterFn(scope.row.state)}}</span>
          </template>
          </el-table-column>
          <el-table-column label="镜像" width="180">
          <template #default="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.mirror }}</span>
          </template>
          </el-table-column>
          <el-table-column label="资源套餐" width="180">
          <template #default="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.menu }}</span>
          </template>
          </el-table-column>
          <el-table-column label="创建时间" width="180">
          <template #default="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ $filters.filterTime(scope.row.date) }}</span>
          </template>
          </el-table-column>
          <el-table-column label="开始运行时间" width="180">
          <template #default="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ $filters.filterTimeOut(scope.row.stareTime) }}</span>
          </template>
          </el-table-column>
          <el-table-column label="操作">
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
      </div>
      <!-- 编辑 -->
      <Compile :dialogVisible="isShow" :obj="obj" :i="index" @isShow="fn" @repl="replaceFn" @none="no"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import AddList from '../components/AddList.vue'

import Seos from '../components/Seos.vue'
import Compile from '../components/Compile.vue'
export default {
  name:"About",
  components:{AddList,Seos,Compile},
  data(){
    return {
      input: ref(''),
      // 隐藏编辑表单
      isShow:false,
      // 
      obj:{},
      // 
      index:-1,
      // 
      namehh:'',
      // 数据
      tableData: [
          {
            name: '胡歌',
            state:false,
            mirror:'淘宝镜像',
            menu:'超级套餐',
            date: '2016-05-02',
            stareTime:'2015-05-05'
          },{
            name: '彭于晏',
            state:false,
            mirror:'中国镜像',
            menu:'普通套餐',
            date: '2016-05-02',
            stareTime:'2015-05-05'
          },{
            name: '胡歌',
            state:false,
            mirror:'淘宝镜像',
            menu:'超级套餐',
            date: '2016-05-02',
            stareTime:'2015-05-05'
          },{
            name: '彭于晏',
            state:false,
            mirror:'中国镜像',
            menu:'超级套餐',
            date: '2016-05-02',
            stareTime:'2015-05-05'
          },{
            name: '胡歌',
            state:false,
            mirror:'美国镜像',
            menu:'普通套餐',
            date: '2016-05-02',
            stareTime:'2015-05-05'
          },{
            name: '彭于晏',
            state:false,
            mirror:'河南镜像',
            menu:'超级套餐',
            date: '2016-05-02',
            stareTime:'2015-05-05'
          },{
            name: '胡歌',
            state:false,
            mirror:'山东镜像',
            menu:'普通套餐',
            date: '2016-05-02',
            stareTime:'2015-05-05'
          }
        ],
        // 中转数据
        table:[]
    }
  },
  methods: {
    // 编辑
      handleEdit(index, row) {
        // console.log(index, row)
        this.obj = {...row}
        this.index = index
        this.isShow = true
      },
      // 删除
      handleDelete(index, row) {
        // console.log(index, row)
        this.tableData.splice(index,1)
      },
      // 修改
      replaceFn(val,i){
        let obj = {...val}
        this.tableData.splice(i,1,obj)
      },
      // 添加
      addList(val){
        this.tableData.unshift({...val,date:new Date()})
      },
      // 搜索分类
      seo(val){
        if(this.namehh === '镜像'){
          this.table = this.tableData.filter(item=>item.mirror.indexOf(val) !== -1)
        }else if(this.namehh === '套餐'){
          this.table = this.tableData.filter(item=>item.menu.indexOf(val) !== -1)
        }else{
          this.table = this.tableData.filter(item=>item.name.indexOf(val) !== -1)
        }
      },
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
      }
    },
    // 检测数据的变化 赋值
    watch:{
      tableData:{
        deep:true,
        handler(val){
          this.table = val
        }
      }
    }
}
</script>

<style scoped>
  .ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 20px;
  }
  .table{
      margin: 10px 0px;
  }
</style>
