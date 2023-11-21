<template>
  <div class="signup">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <Signup msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/Signup.vue'

export default {
  name: 'SignupPageView',
  components: {
    Signup
  }
}
</script>
