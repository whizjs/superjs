<template>

  <div class="input-group input-group-lg">
		<input type="text" class="form-control" ref="searchPicturesKeyword" @keyup.enter="getPictures"/>
		<div class="input-group-append">
			<span class="btn btn-primary" @click="getPictures">Search</span>
		</div>
	</div>
  
</template>

<script>
export default {
  name: "Pictures",
  methods: {
    getPictures: function() {
      console.log(this.$refs.searchPicturesKeyword.value);
    }
  }
};
</script>


<style>
</style>