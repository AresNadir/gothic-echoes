<template>
  <base-container>
    <section>
      <base-card>
        <img src="https://nadir.gr/wp-content/uploads/2023/07/testimg.jpg" alt="">
        <h2> {{ title }} </h2>
        <div class="post-content" v-html="content"></div>
      </base-card>
    </section>
  </base-container>
</template>

<script> 
export default {
  props: ['id','category'],
  data() {
    return {
      selectedPost: null,
    };
  },
  computed: {
    title() {
      return this.selectedPost.title;
    },
    content() {
      return this.selectedPost.content;
    },

  },
  created() {
    this.selectedPost = this.$store.getters['posts/posts'].find(
      post => post.id === this.id
    );
  }
}
</script>

<style scoped>
section{
  overflow: auto;
}
</style>