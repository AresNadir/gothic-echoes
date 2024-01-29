<template> 
  <nav>
    <ul>
      <li>
        <router-link to="/posts">Blog</router-link>
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
  background:orangered;
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