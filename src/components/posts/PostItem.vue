<template> 
  <li>
    <article>
          <router-link :to="singlePostLink">
            <img src="https://nadir.gr/wp-content/uploads/2023/07/testimg.jpg" alt="">
          </router-link>
          <span>
            {{ title }}
          </span>
          <div class="post-item-category">
            <span v-for="cat in category" :key="cat">
              <router-link :to="getCategoryLink">{{ cat }}</router-link>
            </span><br>
            <router-link to="/posts">All Posts</router-link>
          </div>
          <div>
            {{ excerpt }}
          </div>
          <span>
            <base-button>
              <router-link :to="singlePostLink">Read More</router-link>
            </base-button>
          </span>
        </article>
  </li>
</template>


<script>
export default {
  props: ['id', 'title', 'category', 'excerpt', 'postImg'],
  computed: {
    singlePostLink() {
      return '/posts/' + this.id;
    },
    getCategoryLink() {
      return '/categories/' + this.category;
    }
  },
}

</script>


<style scoped>

article {
  display:flex;
  flex-direction: column;
}
.latest-posts_container img {
  width:90%;
}
</style>