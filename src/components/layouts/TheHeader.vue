<template>
  <header>
    <section>
    <div class="paddingBlock">
      <div class="header_container">
        <div class="header-col-1 logo">
          <router-link to="/">logo</router-link>
        </div>

        <div class="header-col-1 menu">
          <the-menu></the-menu>          
        </div>
      </div>
    </div>                  
  </section>
  </header>
</template>

<script>
import TheMenu from './TheMenu.vue';
export default {
  components: {
    TheMenu,
  },
}

</script>

<style scoped>
section ,a{
  background:black;
  color:#fff;
}

.header_container {
	display: flex;
  align-items: center;
}

.header-col-1 {
	flex: 1;
  
}

</style>