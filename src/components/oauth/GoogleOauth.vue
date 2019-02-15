<template>
  <div>Google Oauth</div>
</template>


<script>
  import axios from "axios";
  export default {
    name: "GoogleOauth",
    mounted() {
      axios
        .get(`https://superjs.org/api/auth/google/callback${location.search}`)
        .then(res => {
          const event = new Event("google-oauth");
          event.user = res.data;
          window.opener.document.dispatchEvent(event);
          window.close();
        });
    }
  };
</script>
