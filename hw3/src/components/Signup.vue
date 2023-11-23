<template>
  <div class="signup">
    <form class="loginForm" @submit.prevent="submitForm">
      <div class="formHeader">
        <p><strong>Welcome to RAM OÜ</strong></p>
        <p>Sign up with your email and password</p>
      </div>
      <div class="formBody">
        <label for="email">Email </label>
        <input type="text" name="email" placeholder="Email" required>
        <br><br>
        <label for="password">Password </label>
        <input type="password" id="password" placeholder="Password" required v-model="password" @input="validatePassword">

        <div v-if="!isPasswordValid" class="validation-message">
          <p><strong> Password is not valid. Please follow these conditions: </strong></p>
          <ul>
            <li>Password should be at least 8 characters and less than 15 characters.</li>
            <li>Should include at least one uppercase alphabet character.</li>
            <li>Should include at least two lowercase alphabet characters.</li>
            <li>Should include at least one numeric value.</li>
            <li>Should start with an uppercase alphabet.</li>
            <li>Should include the character "_"</li>
          </ul>
        </div>

      </div>
      <div>
        <br>
        <button type="submit">Signup</button><br>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      isPasswordValid: true
    };
  },
  methods: {
    validatePassword() {
      // Regular expressions for each condition
      const lengthRegex = /^.{8,15}$/;
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/g;
      const numericRegex = /\d/;
      const startsWithUppercase = /^[A-Z]/;
      const includesUnderscore = /_/;

      this.isPasswordValid =
          lengthRegex.test(this.password) &&
          uppercaseRegex.test(this.password) &&
          (this.password.match(lowercaseRegex) || []).length >= 2 &&
          numericRegex.test(this.password) &&
          startsWithUppercase.test(this.password) &&
          includesUnderscore.test(this.password);
    },
    submitForm() {
      // Handle form submission if password is valid
      if (this.isPasswordValid) {
        // Your form submission logic here
        console.log('Password is valid. Submitting the form.');
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
  font-family: sans-serif;
}
ul{
  list-style: none;
}
.signup{
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

.validation-message {
  margin-top: 10px;
  color: red;
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
