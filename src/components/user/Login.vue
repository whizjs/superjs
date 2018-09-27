<template>
  <div class="text-center">
    <form class="form-signin">
      <img class="mb-4" src="../../assets/logo.png" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Welcome Back!</h1>

      <input type="text" class="form-control login-login" placeholder="Username or Email" ref="login" required autofocus />

      <input type="password" class="form-control login-password" placeholder="Password" ref="pw" required />
      
      <button @click.stop.prevent="getLoginToken"  class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    
      <p class="mt-5 mb-3 text-muted">&copy; superjs.org</p>
    </form>
  </div>
</template>

<script>
  import axios from "axios";
  import isEmail from "validator/lib/isEmail";
  import { login } from "../../helpers/fuliapi";

  export default {
    name: "Login",
    methods: {
      getLoginToken() {
        let login = this.$refs.login.value;
        let pw = this.$refs.pw.value;
        if (isEmail(login)) {
        }

        console.log(login, pw);
      }
    }
  };
</script>

<style scoped>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .login-login {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .login-password {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
