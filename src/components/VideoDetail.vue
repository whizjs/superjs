<template>
  <div v-if="videos" class="mt-4">
    <div v-for="(video, index) in videos" :key="index">
    <div class="card flex-md-row mb-4 shadow-sm h-md-250" :id="video.id.videoId">
      <img @click="watchVideo(video.id.videoId)" class="card-img-right flex-auto d-lg-block" :src="srcUrl(video)" :alt="videoInfo(video)" :title="videoInfo(video)">
      <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-success"><a @click="goToChannel(video.snippet.channelId)">Channel: {{video.snippet.channelTitle}} </a></strong>
        <h4 class="mb-1">
          <a class="text-dark" @click="watchVideo(video.id.videoId)">{{ video.snippet.title }}</a>
        </h4>
        <p class="card-text text-muted mb-1">{{ video.snippet.publishedAt | moment("YYYY-MM-DD h:mm:ss") }}</p>
        <p class="card-text mb-auto">{{ video.snippet.description }}</p>
      </div>
      
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "VideoDetail",
  computed: {
    ...mapGetters("videos", {
      videos: "getVideos"
    })
  },
  methods: {
    watchVideo(id) {
      let url = `https://www.youtube.com/watch?v=${id}`;
      window.open(url, "_blank");
    },
    goToChannel(id) {
      let url = `https://www.youtube.com/channel/${id}`;
      window.open(url, "_blank");
    },
    srcUrl: function(v) {
      return v.snippet.thumbnails.high.url;
    },
    videoInfo: function(video) {
      return video.snippet.title + "\n" + video.snippet.description;
    }
  }
};
</script>

<style scoped>
a:hover,
img:hover {
  cursor: pointer;
}
</style>

