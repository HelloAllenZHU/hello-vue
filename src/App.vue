<template>
  <div id="app">
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
<script lang="ts" setup name='app'>
</script>
-->
