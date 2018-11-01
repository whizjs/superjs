<template>
    <div class="callback">
        <h1>Callbacking stuff...</h1>
    </div>
</template>

<script>
  import auth0 from "@/helpers/auth0";
  import router from "@/router";
  export default {
    name: "UserAuth0Callback",
    beforeMount() {
      auth0.handleAuth(err => {
        if (err) {
          // console.log(err);
          return;
        }
        router.push({ name: "Home" });
      });
    },
    props: {},
    methods: {}
  };
</script>