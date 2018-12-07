<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed app v-model="drawer">
      <v-list>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" @click>
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="amber darken-4" dark app fixed>
      <v-btn fab light @click.stop="drawer = !drawer">
        <v-avatar size="32px" tile>
          <img src="@/assets/logo.png" alt="superjs">
        </v-avatar>
      </v-btn>
      <v-toolbar-title style="width: 240px" class="ml-0 pl-3">
        <span class="hidden-sm-and-down" @click="goToRoute('Home')" style="cursor:pointer;">superjs</span>
      </v-toolbar-title>
      <v-text-field
        color="purple"
        append-icon="fas fa-search"
        @click:append="searchWhatever()"
        hide-details
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>fas fa-bell</v-icon>
      </v-btn>
      <v-speed-dial
        left
        direction="bottom"
        open-on-hover
        transition="slide-y-reverse-transition"
        v-if="isLoggedIn"
      >
        <v-btn fab light slot="activator">
          <v-avatar size="32px" tile>
            <img src="@/assets/logo.png" alt="Vuetify">
          </v-avatar>
        </v-btn>

        <v-tooltip left>
          <v-btn fab dark color="black" @click="netlifySignout" slot="activator">
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-btn>
          <span>Sign Out</span>
        </v-tooltip>
        <v-tooltip left>
          <v-btn fab dark color="indigo" slot="activator">
            <v-icon>fas fa-fingerprint</v-icon>
          </v-btn>
          <span>Forget / Change Password</span>
        </v-tooltip>
      </v-speed-dial>

      <v-speed-dial
        left
        direction="bottom"
        open-on-hover
        transition="slide-y-reverse-transition"
        v-else
      >
        <v-btn slot="activator" color="purple" fab>
          <v-icon dark>fas fa-user-circle</v-icon>
          <v-icon>fas fa-times</v-icon>
        </v-btn>
        <v-tooltip left>
          <v-btn fab dark color="green" @click="netlifySignin" slot="activator">
            <v-icon>fas fa-sign-in-alt</v-icon>
          </v-btn>
          <span>Sign In</span>
        </v-tooltip>
        <v-tooltip left>
          <v-btn fab dark color="red" @click="netlifySignup" slot="activator">
            <v-icon>fas fa-user-plus</v-icon>
          </v-btn>
          <span>Sign Up</span>
        </v-tooltip>
      </v-speed-dial>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-xl>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer height="auto" color="primary lighten-1" app inset>
      <v-layout justify-center row wrap>
        <v-btn v-for="link in links" :key="link" color="white" flat round>{{ link }}</v-btn>
        <v-flex primary lighten-2 py-3 text-xs-center black--text xs12>
          &copy;2018 — {{ new Date().getFullYear()}}
          <strong>Superjs</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "app",
    components: {},
    computed: {
      ...mapGetters("user", {
        isLoggedIn: "getUserStatus"
      })
    },
    data: () => {
      return {
        dialog: false,
        drawer: null,
        items: [
          { icon: "contacts", text: "Contacts" },
          { icon: "history", text: "Frequently contacted" },
          { icon: "content_copy", text: "Duplicates" },
          {
            icon: "keyboard_arrow_up",
            "icon-alt": "keyboard_arrow_down",
            text: "Labels",
            model: true,
            children: [{ icon: "add", text: "Create label" }]
          },
          {
            icon: "keyboard_arrow_up",
            "icon-alt": "keyboard_arrow_down",
            text: "More",
            model: false,
            children: [
              { text: "Import" },
              { text: "Export" },
              { text: "Print" },
              { text: "Undo changes" },
              { text: "Other contacts" }
            ]
          },
          { icon: "settings", text: "Settings" },
          { icon: "chat_bubble", text: "Send feedback" },
          { icon: "help", text: "Help" },
          { icon: "phonelink", text: "App downloads" },
          { icon: "keyboard", text: "Go to the old version" }
        ],
        links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
      };
    },
    methods: {
      searchWhatever() {
        console.log("search");
      },
      goToRoute(routeName) {
        this.$router.push({ name: routeName });
      }
    }
  };
</script>

<style>
</style>
