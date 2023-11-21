<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<template>
  <body class="login">
  <H1>
    Siia tuleb kõik JSONiga
  </H1>

<!--  <script type="text/javascript" src="res/src/js/script.js"></script>-->
  </body>
</template>

<style scoped>
*{
  box-sizing: border-box;
  font-family: sans-serif;
}

body{
  line-height: 1.6;
  margin: 20px;
  min-width: 300px;
  background-color: #FFF2D8;
}

footer{
  clear:both;
  text-align: center;
  font-weight: bold;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  padding-left: 2%;
  padding-right: 2%;
  background-color:#EAD7BB;;
  box-shadow: 0px 0px 14px 0px #EAD7BB;
  color: #113946;
  font-size: 25px;
  border-radius: 15px 15px 15px 15px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.login form, .addPost form{
  padding: 10px 15px;
  margin-left: 5%;
  margin-right: 5%;
  background-color: #baf3f8;
  text-align: center;
  box-shadow: 0px 0px 14px 0px rgba(85, 238, 255, 0.75);
  border-radius: 15px 15px 15px 15px;
}
div button {
  margin: 5px;
  margin-bottom: 15px;
  padding: 0 10px;
  text-align: center;
  font: bold 14px/25px Arial, sans-serif;
}

textarea {
  resize: none;
  text-align: left;
  vertical-align: top;
}

input[type='file'] {
  color: rgba(0, 0, 0, 0)
}

.loginForm a{
  font: bold 16px/30px Arial, sans-serif;
  color: rgb(0, 13, 191);
}

h1 + p {
  font-weight: bold;
}

h1 ~ p{
  color: #113946;
}

.user-profile img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.post-image img {
  width: 100%;
  display: block;
  margin-bottom: 10px;
}

.dropdown-content a {
  display: block;
  padding: 5px 6px;
  text-decoration: none;
  color: #333;
  font-size: small;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

@media (min-width: 600px) {
  .header{
    display: flex;
    flex-direction: row;
  }
}
</style>