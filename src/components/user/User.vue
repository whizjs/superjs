<template>
<div>
  <div v-if="isLoggedIn">
    Hello {{ username }}
  </div>

  <div v-else>
    <router-link class="btn btn-outline-primary btn-sm user-btn" :to="{name:'UserSignup'}">Sign Up</router-link>
    <router-link class="btn btn-outline-primary btn-sm ml-2 user-btn" :to="{name: 'UserLogin'}">Login</router-link>
  </div>
</div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "User",
    computed: {
      ...mapGetters("user", {
        isLoggedIn: "isLoggedIn",
        hasAccess: "hasAccess",
        my_id_token: "getIdToken"
      }),
      username: function() {
        let jwtDecode = require("jwt-decode");
        let payload = jwtDecode(this.my_id_token);
        return payload.name;
      }
    }
  };
</script>

<style scoped>
  .user-btn {
    min-width: 96px;
  }
</style>

