<template>
  <div id="app" style="border:0px solid red;border-radius:10px">
    <router-view />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})

</script>

<!--这是组合式api，上面是选项式api
<script lang="ts" setup name='App'>
</script>
-->

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
