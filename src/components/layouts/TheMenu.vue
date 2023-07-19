<template> 
  <nav>
    <ul>
      <li>
        <router-link to="/posts">All Articles</router-link>
      </li>  
      <li>
        <router-link to="/categories/Test">Test Cat</router-link>
      </li>
      <li>
        <router-link to="/categories/Music">Music Cat</router-link>
      </li>
      <li>
        <router-link to="/categories/Events">Events Cat</router-link>
      </li>
      <li>
        <router-link to="/categories/Fashion">Fashion Cat</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact Us</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
.menu {
  display: flex;
  justify-content: flex-end;
}

.menu ul {
  display: flex;
  list-style: none;
  padding-right:40px;
}
.menu li {
  padding: 10px;
}
</style>