<template>

  <div class="input-group input-group-lg">
		<input type="text" class="form-control" v-model.trim="searchPicturesKeyword" @keyup.enter="getPictures"/>
		<div class="input-group-append">
			<span class="btn btn-primary" @click="getPictures">Search</span>
		</div>
	</div>
  
</template>

<script>
  export default {
    name: "Pictures",
    data: function() {
      return {
        searchPicturesKeyword: ""
      };
    },
    methods: {
      getPictures: function() {
        console.log(this.searchPicturesKeyword);
      }
    }
  };
</script>


<style>
</style>