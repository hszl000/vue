<template>
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :file-list="fileList"
  :on-success="succ"
>
  <el-button size="mini">上传文件</el-button>
  <!-- <template #tip>
    <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
  </template> -->
</el-upload>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [
          
        ],
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`)
      },
      succ(response, file, fileList){
        console.log(response,file,fileList)
        let obj = {
          date:file.raw.lastModifiedDate,
          name:file.raw.name,
          address:URL.createObjectURL(file.raw),
        }
        this.$emit('update',obj)
      },
    },
  }
</script>

<style>
  .el-upload-list,.el-upload-list--text{
    display: none;
  }
</style>
