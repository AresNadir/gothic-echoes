<template>
<the-header></the-header>
<div class="main_container">
  <router-view></router-view>
  <!-- <router-view v-slot="slotProps">
    <transition name="route">
      <component :is="slotProps.Component" mode="out-in"></component>
    </transition>
  </router-view> -->
  
</div>

<the-footer></the-footer>
</template>


<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheFooter from './components/layouts/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,

  }
}
</script>

<style>
body{
  padding:0px;
  margin:0px;
  background:#eee;
  font-size:20px;
  font-family: monospace;
}
</style>

