<template>
  <div class="home">
    <div class="top">
      <Rili/>
      <Daiban/>
    </div>
    <Zhaopin/>
    <div class="bottom">
      <Footers/>
    </div>
  </div>
</template>

<script>
import Rili from '../components/Rili.vue'
import Daiban from '../components/Daiban.vue'
import Zhaopin from '../components/Zhaopin.vue'
import Footers from '../components/Footerss.vue'
export default {
  name: 'Home',
  components:{
    Rili,Daiban,Zhaopin,Footers
  }
}
</script>
<style scoped>
  .top{
    display: flex;
    justify-content: space-between;
  }
  .el-tabs__content{
    overflow: none !important;
    height: 200px !important;
    background: whiet !important;
    line-height: 0px !important;
  }
  .bottom{
    background: white;
    padding: 20px;
    height: 300px;
    margin-top: 10px;
  }
</style>
