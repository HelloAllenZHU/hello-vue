<template>
    <router-link to="/home">首页</router-link>
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