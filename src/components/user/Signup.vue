<template>
<div class="text-center">
    <form class="form-signup">
      <img class="mb-4" src="../../assets/logo.png" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Welcome to super.js !</h1>

      <b-form-input type="text" :state="null" class="form-control signup-top" placeholder="Username" v-model.trim="username" required autofocus />

      <b-form-input type="email" :state="true" class="form-control signup-middle" placeholder="Email" v-model.trim="email" required />

      <b-form-input type="password" :state="false" class="form-control signup-middle" placeholder="Password" v-model.trim="pw" required />

      <b-form-input type="password" :state="true" class="form-control signup-bottom" placeholder="Password" v-model.trim="pw2" required />
      

      <div class="checkbox d-flex">
        <label>
          <input type="checkbox" v-model.trim="legal" > I agree with <a href='#' target=_blank>Terms of Use</a> and <a href='#' target=_blank>Privacy Policy</a>
        </label>
      </div>

      <button @click.stop.prevent="getSignupToken"  class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
    
      <p class="mt-5 mb-3 text-muted">&copy; superjs.org</p>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Signup",
    data: function() {
      return {
        username: "",
        email: "",
        pw: "",
        pw2: "",
        legal: 0
      };
    },
    methods: {
      getSignupToken() {
        let credentials = {
          username: this.username,
          email: this.email,
          password: this.pw,
          password_confirmation: this.pw2,
          legal: +this.legal
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
