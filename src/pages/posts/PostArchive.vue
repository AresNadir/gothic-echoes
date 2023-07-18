<template> 
  <base-container>
    <div class="latest-posts_container">
    <ul v-if="hasPosts">
      <post-item class="single-post" v-for="post in filteredPosts"
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
  computed: {
    filteredPosts() {
      return this.$store.getters['posts/posts'];
      //first posts in posts/posts is the namespaced and second is the getter name
    },
    hasPosts() {
      return this.$store.getters['posts/hasPosts'];
    },
  }
  
}
</script>


<style scoped>
.latest-posts_container {
  
  display:flex;
  overflow: auto;
  background:gold;
}
article{
  display:flex;
  flex-direction: column;
}
li {
  margin:50px 0;
  flex: 0 0 33.333333%;
}
@media(max-width:700px) {
  li {
    flex: 0 0 100%;
  }
}
ul {
  display:flex;
  flex-wrap:wrap;
  list-style:none;
}

.latest-posts_container img {
  width:90%;
}
</style>