<template>
  <div class="ul_li">
    <el-select v-model="value" filterable placeholder="请选择">
        <el-option
        v-for="item in arr"
        :key="item"
        :label="item"
        :value="item"
        >
        </el-option>
    </el-select>
    <el-input placeholder="请输入内容" v-model="input" clearable class="ipt"> </el-input>
    <el-row>
        <el-button type="primary" @click="seo">搜索</el-button>
    </el-row>
  </div>
</template>

<script>
import {arr} from '../js/selectArr'
export default {
  name:'Seos',
  data(){
    return{
      arr,
      value:arr[0],
      input:''
    }
    
  },
  methods:{
    seo(){
      // this.$emit('seo',this.input)
      // this.input = ''
      console.log('搜索')
    }
  },
  watch:{
    input:{
      immediate:true,
      handler(val){
        this.$emit('seo',val)
      }
    },
    value(val){
      this.$emit('hname',val)
    }
  }
}
</script>

<style scoped>
  .el-icon{
    color:#000 !important;
  }
  .ul_li{
    display:flex;
  }
  .ipt{
    margin: 0px 5px;
  }
</style>