<template>
<div>
  <div v-if="isLoggedIn">
    Hello
  </div>

  <div v-else>
    <router-link class="btn btn-outline-primary btn-sm user-btn" to="/user/signup">Sign Up</router-link>
    <router-link class="btn btn-outline-primary btn-sm ml-2 user-btn" to="/user/login">Login</router-link>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "User",
  computed: {
    ...mapGetters("user", {
      isLoggedIn: "isLoggedIn"
    })
  }
};
</script>

<style scoped>
.user-btn {
  min-width: 96px;
}
</style>

