<template>
  <nav>
    <router-link to="/">Signup</router-link>
    <router-link to="/main">Main</router-link>
    <router-link to="/addPost">Add Post</router-link>
  </nav>
  <router-view/>
  <footer class="footer">
    <a> Copyright © 2023 RAM OÜ </a>
  </footer>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #d7c09b;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  padding-left: 2%;
  padding-right: 2%;
  background-color:#ecd3ae;;
  box-shadow: 0px 0px 14px 0px #EAD7BB;
  text-align: left;
  font-size: 25px;
  border-radius: 15px 15px 15px 15px;
}

nav a {
  color: #113946;
  text-decoration: none;
  cursor: pointer;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

nav a.router-link-exact-active {
  color: #113946;
  text-decoration: none;
  cursor: pointer;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.footer{
  align-items: center;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  padding-left: 2%;
  padding-right: 2%;
  background-color:#EAD7BB;;
  box-shadow: 0px 0px 14px 0px #EAD7BB;
  text-align: center;
  font-size: 25px;
  border-radius: 15px 15px 15px 15px;
}

.footer a{
  color: #113946;
  text-decoration: none;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-align: center;
}

</style>
<script setup>
</script>