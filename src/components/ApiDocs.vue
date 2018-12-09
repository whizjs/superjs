<template>
  <v-layout row wrap class="text-xs-center" :style="mystyle">
    <v-flex xs12>
      <v-card dark color="primary">
        <v-card-text class="headline">API Docs</v-card-text>
        <v-card-text>Base Url: https://superjs.org/api</v-card-text>
        <v-card-text>
          First Test:
          <code>GET /hello</code>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "ApiDocs",
    computed: {
      mystyle() {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return "width:50%";
        } else {
          return "width:100%";
        }
      }
    }
  };
</script>