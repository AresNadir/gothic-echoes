<template>
  <base-container>
    <section>
      <latest-posts></latest-posts>
      
    </section>

    <section>
      <subscribe-form></subscribe-form>
    </section>

    <section>
      By Category
    </section>
  </base-container>
</template>

<script>
import LatestPosts from '../../components/homepage/LatestPosts.vue';
import SubscribeForm from '../../components/homepage/SubscribeForm.vue';


export default {
  components: {
    LatestPosts,
    SubscribeForm,
  },
}
</script>

<style>


</style>