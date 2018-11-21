<template>
    <div class="callback">
        <h1>Callbacking stuff...</h1>
    </div>
</template>

<script>
  import { handleAuth } from "@/helpers/auth0";
  import { mapActions } from "vuex";
  import qs from "qs";
  import router from "@/router";

  export default {
    name: "UserAuth0Callback",
    created() {
      handleAuth(err => {
        if (err) {
          return;
        }
        let urlHash = window.location.href.split("#")[1];
        let tokens = qs.parse(urlHash);
        this.finalizeAuth0Login({
          my_id_token: tokens.id_token,
          my_access_token: tokens.access_token
        });
        router.push({ name: "Home" });
      });
    },
    methods: {
      ...mapActions("user", {
        finalizeAuth0Login: "finalizeAuth0Login"
      })
    }
  };
</script>

<style>
</style>
