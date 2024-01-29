<template>
  <div class="base-container">
    <div class="base-container_left">
      
    </div>

    <div class="base-container_main">
      <slot>
        
      </slot>
    </div>

    <div class="base-container_right">
      
    </div>
  </div>
</template>

<style scoped>
.base-container {
  min-height:100vh;
  height:auto;
  background:yellowgreen;
  display: flex;
  
}
.base-container_main {
  width:95%;
  background:palegoldenrod;
}
.base-container_right, .base-container_left{
  max-width:5%;
  min-width:5%;
}
</style>