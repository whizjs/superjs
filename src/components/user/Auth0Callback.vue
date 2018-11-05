<template>
    <div class="callback">
        <h1>Callbacking stuff...</h1>
    </div>
</template>

<script>
  import { handleAuth } from "@/helpers/auth0";
  import router from "@/router";
  export default {
    name: "UserAuth0Callback",
    created() {
      handleAuth(err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("LALALA");
        router.push({ name: "Home" });
      });
    }
  };
</script>

<style>
</style>
