<template>
  <div>
    <div class="input-group input-group-lg">
      <input type="text" class="form-control" @keyup.enter="getVideos" v-model.trim="searchVideosKeyword"/>
      <div class="input-group-append">
        <span class="btn btn-primary" @click="getVideos">Search</span>
      </div>
    </div>
    <VideoDetail></VideoDetail>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import VideoDetail from "./VideoDetail";

  export default {
    name: "Videos",
    data: function() {
      return {
        searchVideosKeyword: ""
      };
    },
    components: {
      VideoDetail
    },
    methods: {
      ...mapActions("videos", {
        getYouTubeVideos: "getYouTubeVideos"
      }),
      getVideos() {
        this.getYouTubeVideos({
          keyword: this.searchVideosKeyword
        });
      }
    }
  };
</script>


<style>
</style>

