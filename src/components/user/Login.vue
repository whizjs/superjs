<template>
<div class="text-center">
  <form class="form-signin">
    <img class="mb-3" src="../../assets/logo.png" alt="" width="72" height="72">
    <h1 class="h3 mb-3 font-weight-normal">Welcome Back!</h1>

    <input type="text" class="form-control login-login mb-1" placeholder="Username or Email" v-model.trim="login_text" required autofocus />

    <input type="password" class="form-control login-password" placeholder="Password" v-model.trim="pw_text" required />
    <button @click.stop.prevent="loginWithLocal()"  class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    
  </form>
  <router-link :to="{name: 'UserSignup'}">Don't have an account ? Register now!</router-link>
  <p class="mt-2 mb-3 text-muted">&copy; superjs.org</p>
  <img class="mb-4 auth0" @click="loginAuth0()" src="@/assets/github.png" alt="auth0 github" width="72" height="72">
  <img class="mb-4 ml-2 auth0" @click="loginAuth0()" src="@/assets/outlook.png" alt="" width="72" height="72">
</div>
</template>

<script>
  import _ from "lodash";
  import Swal from "sweetalert2";
  import isEmail from "validator/lib/isEmail";
  import { mapActions } from "vuex";

  export default {
    name: "Login",
    data: function() {
      return {
        login_text: "",
        pw_text: ""
      };
    },
    methods: {
      ...mapActions("user", {
        login: "login",
        loginWith: "loginWith",
        loginWithAuth0: "loginWithAuth0"
      }),
      loginWithLocal() {
        let loginText = this.login_text;
        let pwText = this.pw_text;

        if (_.compact([loginText, pwText]).length != 2) {
          Swal("Oops...", "All fields are required!", "error");
          return;
        }

        let credentials = {};

        if (isEmail(loginText)) {
          credentials = {
            email: loginText,
            password: pwText
          };
        } else {
          credentials = {
            username: loginText,
            password: pwText
          };
        }
        this.login({
          credentials: credentials
        });
      },
      loginAuth0() {
        this.loginWithAuth0();
      }
    }
  };
</script>

<style scoped>
  .form-signin {
    width: 100%;
    max-width: 450px;
    padding: 15px;
    margin: auto;
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

  .auth0 {
    cursor: pointer;
  }
</style>
