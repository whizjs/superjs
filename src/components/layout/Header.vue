<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
    <router-link class="my-0 mr-md-auto font-weight-normal superjs-header-menu" to="/">superjs</router-link>
    <nav class="my-2 my-md-0 mr-md-3">
      <router-link class="p-2 text-dark superjs-header-menu" to="/">Home</router-link>
      <router-link class="p-2 text-dark superjs-header-menu" to="/videos">Videos</router-link>
      <router-link class="p-2 text-dark superjs-header-menu" to="/pictures">Pictures</router-link>
      <router-link class="p-2 text-dark superjs-header-menu" to="/vip">VIP</router-link>
    </nav>
    <router-link class="btn btn-outline-primary" to="/auth/login">Login</router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>


<style scoped>
.superjs-header-menu:hover {
  text-decoration: none;
}
</style>
