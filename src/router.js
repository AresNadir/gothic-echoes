import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/homepage/HomePage.vue';

import PostArchive from './pages/posts/PostArchive.vue';
import SinglePost from "./pages/posts/SinglePost.vue";
import PostCat from "./pages/posts/PostCat.vue";

import ContactPage from './pages/contact/ContactPage';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes:[
    { path: '/', redirect: '/home'},
    { path: '/home', component: HomePage },
    { path: '/posts', component: PostArchive },
    { path: '/posts/:id', component: SinglePost, props:true },
    { path: '/categories/:category', component: PostCat, props:true },
    { path: '/contact', component: ContactPage },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  
});

export default router;