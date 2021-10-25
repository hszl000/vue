<template>
  <div class="zhaopin">
      <ul class="ul">
          <li v-for="(item, index) in arr" :key="index" @click="open(item)">
              <img :src="item.img" alt="">
              <p>{{item.title}}</p>
          </li>
          
      </ul>
  </div>
</template>

<script>
export default {
    name:'Zhaopin',
    data(){
        return {
            arr:[
                {id:1,img:require('../assets/image/人脉.png'),title:'招聘'},
                {id:1,img:require('../assets/image/入职.png'),title:'入职'},
                {id:1,img:require('../assets/image/吃饭.png'),title:'考勤'},
                {id:1,img:require('../assets/image/警报.png'),title:'工具'},
                {id:1,img:require('../assets/image/考勤.png'),title:'变动管理'},
                {id:1,img:require('../assets/image/吃饭.png'),title:'简直管理'},
            ]
        }
    },methods: {
      open(item) {
        this.$alert(item.title+'1212121212121212', item.title, {
          confirmButtonText: '确定',
          // callback: (action) => {
          //   this.$message({
          //     type: 'info',
          //     message: `action: ${action}`,
          //   })
          // },
        })
      },
    },
}
</script>

<style scoped>
*{
    line-height: 20px;
}
  .zhaopin{
      padding: 20px;
      background: white;
      margin-top: 10px;
      min-width:485px;
  }
  .ul{
      display: flex;
      justify-content: space-around;
  }
</style>