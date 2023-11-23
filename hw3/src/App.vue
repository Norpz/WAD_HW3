<template>
  <div class="header">
  <nav>
    <router-link to="/">Signup</router-link>
    <router-link to="/main">Main</router-link>
    <router-link to="/addPost">Add Post</router-link>
  </nav>
  </div>
  <router-view/>
    <footer class="footer">
      <a> RAM OÜ </a>
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

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  padding-left: 2%;
  padding-right: 2%;
  background-color:#EAD7BB;;
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

textarea {
  resize: none;
  text-align: left;
  vertical-align: top;
}

input[type='file'] {
  color: rgba(0, 0, 0, 0)
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
  cursor: pointer;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-align: center;
}

.header:hover{
  background-color: #BCA37F;
  box-shadow: 0px 0px 14px 0px #a1947d;
}

.header > .headerText a:hover{
  color: #57747e;
}

.header img{
  max-width: 40%;
  max-height: 40%;
  order: 1;
  float: right;
}

.headerText{
  order: 0;
}
</style>
<script setup>
</script>