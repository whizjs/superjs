<template>
  <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
    <div class="row">
      <div class="col-md-6">
        <h3 class="display-5 font-italic">Daily Videos</h3>
        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
        <p class="lead mb-0"><router-link to="/videos" class="text-success font-italic">More videos...</router-link></p>
      </div>
      <div class="col-md-6">
        <h3 class="display-5 font-italic">Daily Pictures</h3>
        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
        <p class="lead mb-0"><router-link to="/pictures" class="text-success font-italic">More pictures...</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    name: "Home"
  };
</script>

<style>
</style>

