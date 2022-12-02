<template>
  <div class="login-container">
    <router-link to="/home">当前是登录页，点击此处回到首页</router-link>
    <el-form-item prop="username">
        <span class="svg-container">
            <svg-icon icon-class="user" />
        </span>
        <el-input
            ref="username"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"
        />
    </el-form-item>
  </div>
</template>