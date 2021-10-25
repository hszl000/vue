<template>
  <div>
      <el-row>
      <el-button size="mini" @click="dialogVisible = true">
        <i class="el-icon-plus"></i>
        点击创建
      </el-button>
    </el-row>

    <el-dialog
    title="创建"
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
            <el-select v-model="ruleForm.state" placeholder="请选择状态" prop="state">
                <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.name"
                :value="item.code"
                >
                </el-option>
            </el-select>
            <el-form-item label="镜像名称" prop="mirror">
                <el-input
                type="text"
                v-model="ruleForm.mirror"
                autocomplete="off"
                ></el-input>
            </el-form-item>
           <el-select v-model="ruleForm.menu" placeholder="资源套餐" prop="menu">
                <el-option
                v-for="item in options2"
                :key="item.id"
                :value="item.name"
                >
                </el-option>
            </el-select>
            <div class="block">
              <el-date-picker
                v-model="ruleForm.stareTime"
                type="date"
                placeholder="选择日期"
                format="YYYY 年 MM 月 DD 日"
              >
              </el-date-picker>
            </div>
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
    name:'AddList',
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
        dialogVisible: false,
        // 表单验证
        ruleForm: {
          name: '',
          state:'',
          mirror:'',
          menu:'',
          // 选择时间
          stareTime: '',
        },
        rules: {
          name: [{ validator: validatePass, trigger: 'blur' }],
          mirror:[{validator: validatePass2, trigger: 'blur' }],
        },
        options:[{
            code:false,
            name:'否',
            id:1
        },{
            code:true,
            name:'是',
            id:2
        }],
        options2:[{
            name:'超级套餐',
            id:1
        },{
            name:'普通套餐',
            id:2
        }],
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
    //   表单验证
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(JSON.stringify(this.ruleForm))
            this.$emit('addList',this.ruleForm)
            for(let v in this.ruleForm){
              this.ruleForm[v] = ''
            }
            this.dialogVisible =  false
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
        this.dialogVisible = false
      },
    
    }
}
</script>
<style scoped>
    .el-select,.block{
        margin-bottom: 20px;
    }
</style>
