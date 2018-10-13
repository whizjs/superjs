<template>
<div class="text-center">
    <form class="form-signup">
      <img class="mb-4" src="../../assets/logo.png" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Welcome to super.js !</h1>

      <b-form-input type="text" :state="usernameIsValid" class="form-control signup-top mb-1" placeholder="Username" v-model.trim="signupPayload.username" required autofocus />

      <b-form-input type="email" :state="emailIsValid" class="form-control signup-middle mb-1" placeholder="Email" v-model.trim="signupPayload.email" required />

      <b-form-input type="email" :state="email2IsMatched" class="form-control signup-middle mb-1" placeholder="Confirm Email" v-model.trim="email2" required />

      <b-form-input type="password" :state="pwIsValid" class="form-control signup-middle mb-1" placeholder="Password" v-model.trim="signupPayload.pw" required />

      <b-form-input type="password" :state="pw2IsMatched" class="form-control signup-bottom mb-1" placeholder="Password" v-model.trim="signupPayload.pw2" required />

      <div class="checkbox d-flex">
        <label>
          <input type="checkbox" v-model.trim="signupPayload.legal" class="ml-1" /> I agree with <a href='#' target=_blank>Terms of Use</a> and <a href='#' target=_blank>Privacy Policy</a>
        </label>
      </div>

      <button @click.stop.prevent="getSignupToken"  class="btn btn-lg btn-primary btn-block" type="submit" :disabled="!legalChecked">Sign Up</button>
    
      <p class="mt-5 mb-3 text-muted">&copy; superjs.org</p>
    </form>
  </div>
</template>

<script>
  import isEmail from "validator/lib/isEmail";
  export default {
    name: "Signup",
    computed: {
      usernameIsValid() {
        if (this.signupPayload.username == "") return null;
        let isV1 = /^[a-z]/gi.test(this.signupPayload.username);
        let isV2 = /^[\w-]*$/.test(this.signupPayload.username);
        let isV3 =
          this.signupPayload.username.length >= 8 &&
          this.signupPayload.username.length <= 50;
        return isV1 && isV2 && isV3;
      },
      emailIsValid() {
        if (this.signupPayload.email == "") return null;
        return isEmail(this.signupPayload.email);
      },
      email2IsMatched() {
        if (this.email2 == "") return null;
        return this.signupPayload.email === this.email2 && this.emailIsValid;
      },
      pwIsValid() {
        if (this.signupPayload.pw == "") return null;
        let isV1 = typeof this.signupPayload.pw === "string" ? true : false;
        let isV2 =
          this.signupPayload.pw.length >= 8 && this.signupPayload.pw.length <= 32;
        return isV1 && isV2;
      },
      pw2IsMatched() {
        if (this.signupPayload.pw2 == "") return null;
        return this.signupPayload.pw === this.signupPayload.pw2 && this.pwIsValid;
      },
      legalChecked() {
        return +this.signupPayload.legal === 1;
      }
    },
    data: function() {
      return {
        signupPayload: {
          username: "",
          email: "",
          pw: "",
          pw2: "",
          legal: 0
        },
        email2: ""
      };
    },
    methods: {
      getSignupToken() {
        let credentials = {
          username: this.signupPayload.username,
          email: this.signupPayload.email,
          password: this.signupPayload.pw,
          password_confirmation: this.signupPayload.pw2,
          legal: +this.signupPayload.legal
        };

        console.log(credentials);
      }
    }
  };
</script>

<style scoped>
  .form-signup {
    width: 100%;
    max-width: 450px;
    padding: 15px;
    margin: auto;
  }
  .form-signup .checkbox {
    font-weight: 400;
    font-style: italic;
  }
  .form-signup .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signup .form-control:focus {
    z-index: 2;
  }
  .signup-top {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .signup-middle {
    margin-bottom: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .signup-bottom {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
