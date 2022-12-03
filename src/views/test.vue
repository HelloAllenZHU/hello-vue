<template>
    <div class="xx">
      <el-row :gutter="20">
        <el-input
          placeholder="Pick a date"
          :suffix-icon="Calendar"
        />
        <el-input
          placeholder="Type something"
          :prefix-icon="Search"
        />
      </el-row>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { Calendar, Search } from '@element-plus/icons-vue'
  </script>
  