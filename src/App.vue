<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>
