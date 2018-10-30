<template>
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <div class="d-flex">
            <span>
              <img src="@/assets/logo.png" alt="" width="24" height="24">
            </span>
            <span>
              &nbsp;&nbsp;super.js
            </span> 
            </div>
            <div class="d-block mb-3 text-muted">&copy; 2018-2018</div>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><router-link class="text-muted" :to="{name: 'MetaLegalPrivacyPolicy'}">Privacy Policy</router-link></li>
              <li><router-link class="text-muted" :to="{name: 'MetaLegalTermsOfUse'}">Terms Of Use</router-link></li>
            </ul>
          </div>
        </div>
      </footer>
</template>

<script>
  export default {
    name: "Footer"
  };
</script>

<style>
</style>

