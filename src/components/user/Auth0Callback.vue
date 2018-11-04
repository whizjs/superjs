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
      handleAuth(() => {
        // if (err) {
        //   console.log(err);
        //   return;
        // }
        console.log("执行了");
        router.push({ name: "Home" });
      });
    }
  };
</script>

<style>
</style>
