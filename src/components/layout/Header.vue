<template>
<div>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-1 bg-white border-bottom">
    <router-link class="mb-2 mr-md-auto font-weight-normal" to="/">super.js</router-link>
    <User></User>
  </div>
  <div class="mb-2">
        <nav class="nav d-flex justify-content-between">
          <router-link class="p-2 text-dark" to="/">Home</router-link>
          <router-link class="p-2 text-dark" to="/videos">Videos</router-link>
          <router-link class="p-2 text-dark" to="/pictures">Pictures</router-link>
          <router-link class="p-2 text-dark" to="/novels">Novels</router-link>
          <router-link class="p-2 text-dark" to="/bbs">BBS</router-link>
          <router-link class="p-2 text-dark" to="/news">News</router-link>
          <router-link class="p-2 text-dark" to="/courses">Courses</router-link>
          <router-link class="p-2 text-dark" to="/leetcode">LeetCode</router-link>
          <router-link class="p-2 text-danger" to="/jobs">Jobs</router-link>
          <router-link class="p-2 text-dark" to="/coin">Coin</router-link>
          <Tools></Tools>
          <router-link class="p-2 text-danger" to="/vip">VIP</router-link>
        </nav>
      </div>

      </div>
</template>

<script>
  import User from "../user/User";
  import Tools from "../tools/Tools";
  export default {
    name: "Header",
    components: {
      User,
      Tools
    }
  };
</script>


<style>
</style>
