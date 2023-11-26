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
  margin: 50px;
  min-width: 300px;
  background-color: #FFF2D8;
  border-radius: 10px;
}

.login form{
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

.loginForm a{
  font: bold 16px/30px Arial, sans-serif;
  color: rgb(0, 13, 191);
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
}
</style>
