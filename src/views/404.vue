<template>
  <div class="not-found">
    <img src="../assets/404.gif" alt="页面不存在" style="width:100%;height:100%;"/>
    <br/>
    <router-link to="/home">回到首页</router-link>
  </div>
</template>

<!--
<template>
  <div
    class="link"
    @click="
      router.push({
        name: 'home',
        params: {
          id: 123,
        },
      })
    "
  >
    <span>首页</span>
  </div>
</template>
-->

<!--
<template>
  <div
    class="link"
    :to="{
        name: 'home',
        params: {
          id: 123,
        },
    }"
  >
    <span>首页</span>
  </div>
</template>
-->

<!--
<template>
  <router-link to="/home" custom v-slot="{ navigate }">
    <span class="link" @click="navigate"> 首页 </span>
  </router-link>
</template>
-->