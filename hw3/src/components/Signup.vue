<template>
  <div class="signup">
    <body class="login">
    <form class="loginForm" action="index.html" method="POST">
      <div class="formHeader">
        <p><strong>Welcome to RAM OÜ</strong></p>
        <p>Sign in with your username and password</p>
      </div>
      <div class="formBody">
        <input type="text" name="username" placeholder="Username" required>
        <br><br>
        <input type="password" name="password" placeholder="Password" required>
      </div>
      <div>
        <br>
        <button type="submit">Login</button><br>
        <a>Forget password</a><br>
        <a>Create an account</a>
      </div>
    </form>
    </body>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  box-shadow: 0px 0px 14px 0px rgba(85, 255, 215, 0.75);
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
.header{
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
.headerText a{
  color: #113946;
  text-decoration: none;
  cursor: pointer;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
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
  .loginForm {
    display: flex;
    flex-direction: column;
  }
  .header{
    display: flex;
    flex-direction: row;
  }
}
</style>
