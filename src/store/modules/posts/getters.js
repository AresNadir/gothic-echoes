export default {
  posts(state) {
    return state.posts; 
  },
  hasPosts(state) {
    return state.posts && state.posts.length > 0;
    //check the posts object (state.posts) and areturn true if there is at least 1 post
  },
  getPostsByCategory: (state) => (category) => {
    return state.posts.filter((post) => post.category.includes(category));
  },
};    