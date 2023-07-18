<template> 
  <base-container>
    <div class="latest-posts_container">
      Post from {{ category }}
    </div>
  </base-container>
 </template>

<script> 


export default {  
  props: ['id','category'],
  data() {
    return {
    };
  },
  computed: {
    filteredPosts() {
      const postCat = this.$store.getters['posts/posts'];
      return postCat;
      //first posts in posts/posts is the namespaced and second is the getter name
    },
    hasPosts() {
      return this.$store.getters['posts/hasPosts'];
    },
  }
}
</script>
