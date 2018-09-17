<template>
  <div>
    <div class="input-group input-group-lg">
      <input type="text" class="form-control" @keyup.enter="getVideos" ref="searchVideosKeyword"/>
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
  components: {
    VideoDetail
  },
  methods: {
    ...mapActions("videos", {
      getYouTubeVideos: "getYouTubeVideos"
    }),
    getVideos() {
      this.getYouTubeVideos({
        keyword: this.$refs.searchVideosKeyword.value
      });
    }
  }
};
</script>


<style>
</style>

