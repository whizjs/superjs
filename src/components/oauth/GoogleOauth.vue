<template>
  <div>Google Oauth</div>
</template>


<script>
  import axios from "axios";
  export default {
    name: "GoogleOauth",
    mounted() {
      let code = this.$route.query.code;
    }
  };
</script>
