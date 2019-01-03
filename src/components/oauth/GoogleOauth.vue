<template>
    <div>Google Oauth</div>
</template>


<script>
    import axios from "axios";
    export default {
        name: "GoogleOauth",
        mounted() {
            let code = this.$router.query.code;
            let tokenUrl = "https://www.googleapis.com/oauth2/v4/token";
            axios({
                method: "post",
                url: tokenUrl,
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                data: {
                    code: code
                }
            })
                .then(resp => {
                    console.log(resp);
                    this.$router.push({ name: "Home" });
                })
                .catch(err => console.log(err));
        }
    };
</script>
