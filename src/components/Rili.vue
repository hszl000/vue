<template>
    <div class="rili">
        <el-calendar v-model="value" class="test"> </el-calendar>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        value: new Date(),
      }
    },
    mounted(){
		var elButton = document.querySelector('.el-button-group');
		elButton.style.display = 'none'
	},
  }
</script>

<style scoped>
.rili{
  flex:1;
  min-width: 240px;
  font-size: 12px;
  line-height: 10px;
  border-radius: 10px;
}
.el-calendar{
	--el-calendar-cell-width: 25px  !important;
}
.el-tabs__nav-scroll{
  background: white !important;
}
  .el-calendar__header{
  height: 10% !important;
  flex: 1;
}
</style>
