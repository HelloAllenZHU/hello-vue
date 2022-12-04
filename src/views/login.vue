<template>
    <div class="login-container">
      <el-form 
        :inline="false" 
        :model="formData" 
        size="large"
      >
        <div>
          <img src="image/logo.jpg" style="width:100%;height:100%"/>
        </div>

        <div class="title-container">
          <h3 class="title">股票量化交易系统</h3>
        </div>

        <el-form-item>
            <el-input 
              v-model="formData.username" 
              placeholder="请输入用户名"
              prefix-icon="User"
              clearable
              autocomplete="off"
            />
        </el-form-item>

        <el-form-item>
          <el-input 
            v-model="formData.password"
            placeholder="请输入用户密码" 
            prefix-icon="Lock"
            clearable
            show-password
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" v-on:click="onLogin" style="width:100%">登录</el-button>
        </el-form-item>

        <el-form-item>
            <el-button disabled type="default" v-on:click="onRegister" style="width:100%">注册</el-button>
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

      const onLogin = () => {
        console.log('onLogin!')
      }

      const onRegister = () => {
        console.log('onRegister!')
      }

      return {
        User,
        Lock,
        Calendar,
        formData,
        onLogin,
        onRegister,
      }
    }
  })
  </script>

<style lang="scss" scoped>

.login-container{
  max-width: 400px;
  width:auto;
  height:auto;
  margin: 2rem auto;
  padding: 3rem;
  border:0px solid #33adff;
  border-radius: 10px;
  background-color: white;
}

.title-container {
  position: relative;

  .title {
    font-size: 26px;
    color: #222222;
    margin: 0px auto 20px auto;
    text-align: center;
    font-weight: bold;
  }
}
</style>