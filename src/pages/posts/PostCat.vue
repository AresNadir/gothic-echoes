<template>
  <base-container>
    <div class="latest-posts_container">
      Posts from category {{ category }}
      <ul>
        <li v-for="post in filteredPosts" :key="post.id">
          <article>
            <router-link :to="`/posts/${post.id}`">
          <img src="https://nadir.gr/wp-content/uploads/2023/07/testimg.jpg" alt="">
        </router-link>
        <span>
          {{ post.title }}
        </span>
        
        <div>
          {{ post.excerpt }}
        </div>
        <span>
          <base-button>
          <router-link :to="`/posts/${post.id}`">Read More</router-link>
          </base-button>
        </span>
      </article>
          
        </li>
      </ul>
    </div>
  </base-container>
</template>

<script>
export default {
  props: ['category'],

  computed: {
    filteredPosts() {
      return this.$store.getters['posts/getPostsByCategory'](this.category);
    },

  },
};
</script>

<style scoped>
article {
  display:flex;
  flex-direction: column;
}
.latest-posts_container img {
  width:90%;
}

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