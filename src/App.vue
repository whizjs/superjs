<template>
  <div class="container">
    <Ribbon></Ribbon>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import Ribbon from "./components/layout/GithubRibbon";
  import Header from "./components/layout/Header";
  import Footer from "./components/layout/Footer";

  export default {
    name: "app",
    computed: {
      ...mapGetters("user", {
        isLoggedIn: "isLoggedIn"
      })
    },
    components: {
      Ribbon,
      Header,
      Footer
    }
  };
</script>

<style>
</style>
