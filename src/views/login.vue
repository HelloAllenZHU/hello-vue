<template>
    <div class="login-container">
      <el-form 
        label-position="left" 
        label-width="80px"
        :inline="false" 
        :model="formData" 
        size="large"
        class="x"
      >
        <div class="title-container">
          <h3 class="title">
            股票量化管理后台
          </h3>
          <lang-select class="set-language" />
        </div>
        <el-form-item label="用户名">
            <el-input 
              v-model="formData.username" 
              placeholder="请输入用户名"
              :prefix-icon="User"
              clearable
              autocomplete="on"
            />
        </el-form-item>

        <el-form-item label="密码">
          <el-input 
            v-model="formData.password"
            placeholder="请输入用户密码" 
            :prefix-icon="Lock"
            show-password
            clearable
            autocomplete="on"
          />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" v-on:click="onSubmit" style="width:320px">登录</el-button>
        </el-form-item>
          
      </el-form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive } from 'vue'
  import { User, Lock, Calendar } from '@element-plus/icons-vue'
  
  export default defineComponent({
    name: 'App',
    setup() {
      const formData = reactive({
        username: '',
        password: '',
      })

      const onSubmit = () => {
        console.log('submit!')
      }

      return {
        User,
        Lock,
        Calendar,
        formData,
        onSubmit,
      }
    }
  })
  </script>

<style lang="scss" scoped>

.login-container{
  width:400px;
  height:auto;
  margin: auto auto;
  padding: 3rem 3rem;
  border:2px solid #33adff;
  border-radius: 10px;
  background-color: white;
}

.login-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.svg-container {
  /*padding: 6px 5px 6px 5px;
  color: $dark_gray;*/
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}

.title-container {
  position: relative;

  .title {
    font-size: 26px;
    color: #666666;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
}
</style>