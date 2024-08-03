<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100%;
}
::-webkit-scrollbar {
  width: 5px; 
  height: 10%
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;  
   border-radius: 5px;

} 
 
/* 滚动条的滑轨背景颜色 */
  ::-webkit-scrollbar-thumb {
  background-color: #102ec2;
  border-radius: 10px;
} 
</style>
