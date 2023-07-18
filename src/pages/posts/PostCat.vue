<template> 
  <base-container>
    <div class="latest-posts_container">
      Post from {{ category }}
      <ul v-if="hasPosts">
        <post-item v-for="post in filteredPosts"
          :key="post.id"
          :id="post.id"
          :title="post.title"
          :category="post.category"
          :excerpt="post.excerpt"
          :postImg="post.postImg"
        >
        </post-item>
      </ul>
    <h2 v-else>No posts yet</h2>
    
    </div>
  </base-container>
 </template>

<script> 
import PostItem from '../../components/posts/PostItem.vue';

export default {
  components: {
    PostItem,
  },
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
