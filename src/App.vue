<template>
  <div class="container">
    <Ribbon></Ribbon>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import Ribbon from "./components/layout/GithubRibbon";
  import Header from "./components/layout/Header";
  import Footer from "./components/layout/Footer";
  import swal from "sweetalert2";

  export default {
    name: "app",
    computed: {
      ...mapGetters("user", {
        isLoggedIn: "isLoggedIn"
      })
    },
    components: {
      Ribbon,
      Header,
      Footer
    },
    created() {
      if (!this.isLoggedIn) {
        const swalWithBootstrapButtons = swal.mixin({
          confirmButtonClass: "btn btn-success",
          cancelButtonClass: "btn btn-danger",
          buttonsStyling: true
        });

        swalWithBootstrapButtons({
          title: "Are you over 18 years old?",
          text: "Please advise.",
          type: "question",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          reverseButtons: true,
          allowOutsideClick: false
        }).then(result => {
          if (result.value) {
            return;
          } else if (result.dismiss === swal.DismissReason.cancel) {
            window.location.href = "https://google.com";
          }
        });
      }
    }
  };
</script>

<style>
</style>
