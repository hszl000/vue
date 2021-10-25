<template>
  <div>
      <!-- <el-row>
      <el-button size="mini" @click="dialogVisible = true">
        <i class="el-icon-plus"></i>
        点击创建
      </el-button>
    </el-row> -->

    <el-dialog
    title="编辑"
    v-model="dialogVisible"
    width="30%"
    :before-close="handleClose"
    >
            <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            >
            <el-form-item label="实例名称" prop="name">
                <el-input
                type="text"
                v-model="ruleForm.name"
                autocomplete="off"
                ></el-input>
            </el-form-item>
            <el-form-item label="创建路径" prop="address">
                <el-input
                type="text"
                v-model="ruleForm.address"
                autocomplete="off"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
            </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name:'Compile',
    data() {
        // 表单验证
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入实例名称'))
        } else {
          if (this.ruleForm.name !== '') {
            this.$refs.ruleForm.validateField('name')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入名字'))
        } else {
          if (this.ruleForm.mirror !== '') {
            this.$refs.ruleForm.validateField('mirror')
          }
          callback()
        }
      }
      
      return {
        // 表单验证
        ruleForm: {
          name: '',
          address:''
        },
        rules: {
          name: [{ validator: validatePass, trigger: 'blur' }],
          address:[{validator: validatePass2, trigger: 'blur' }],
        }
      }
    },
    methods: {
        //关闭弹框
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(() => {
            done()
          })
          .catch(() => {})
      },
    //  确定 表单验证
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(JSON.stringify(this.ruleForm))
            this.$emit('repl',this.ruleForm,this.i)
            for(let v in this.ruleForm){
              this.ruleForm[v] = ''
            }
            this.$emit('none')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
        this.$emit('isShow')
      },
    },
    props:['dialogVisible','obj','i'],
    watch:{
      obj:{
        deep:true,
        handler(val){
          this.ruleForm = val
        }
      }
    }
}
</script>
<style scoped>
    .el-select,.block{
        margin-bottom: 20px;
    }
</style>
