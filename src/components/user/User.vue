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
  import { mapGetters, mapActions } from "vuex";
  import { webAuth } from "@/helpers/auth0";

  export default {
    name: "User",
    computed: {
      ...mapGetters("user", {
        isLoggedIn: "isLoggedIn",
        hasAccess: "hasAccess",
        accessToken: "getAccessToken",
        my_id_token: "getIdToken",
        username: "getUsername"
      })
    },
    methods: {
      ...mapActions("user", {
        updateUsername: "updateUsername",
        updateEmailVerificationStatus: "updateEmailVerificationStatus"
      })
    },
    updated() {
      if (this.isLoggedIn && !this.username) {
        webAuth.client.userInfo(this.accessToken, (err, user) => {
          if (err) {
            throw new Error("oops");
          }
          this.updateUsername({
            nickname: user.nickname
          });
          this.updateEmailVerificationStatus({
            email_verified: user.email_verified
          });
        });
      }
    }
  };
</script>

<style scoped>
  .user-btn {
    min-width: 96px;
  }
</style>

