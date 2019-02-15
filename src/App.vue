<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed app v-model="drawer">
      <v-container class="py-1">
        <v-layout row wrap>
          <v-flex xs12 class="mb-2">
            <v-btn block large dark class="blue">Hello{{ ", " + username }}</v-btn>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              outline
              readonly
              :success="broadcast.type == 'success'"
              :error="broadcast.type == 'error'"
              hide-details
              auto-grow
              label="系统广播"
              :value="broadcast.message"
            ></v-textarea>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              placeholder="Search"
              append-icon="fas fa-search"
              hide-details
              color="primary"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-container justify-center class="py-0 px-0">
        <v-list>
          <template v-for="item in items">
            <v-list-group
              v-if="item.children"
              :value="item.active"
              :key="item.text"
              :prepend-icon="item.icon"
              :append-icon="item['icon-alt']"
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                v-for="(child, i) in item.children"
                :key="i"
                @click="goToRoute(child.routeName)"
              >
                <v-list-tile-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ child.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else @click="goToRoute(item.routeName)" :key="item.text">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-4" dark app fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="width: 240px" class="ml-0 pl-3">
        <span class="hidden-sm-and-down" @click="goToRoute('Home')" style="cursor:pointer;">superjs</span>
      </v-toolbar-title>
      <v-text-field
        color="yellow"
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
      <img
        src="@/assets/google.png"
        alt="Vuetify"
        v-if="!isLoggedIn"
        @click="signInWith('google')"
        style="cursor:pointer;"
      >
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
          <v-btn
            fab
            dark
            color="black"
            @click="triggerNetlifyIdentityAction('logout')"
            slot="activator"
          >
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
        </v-btn>
        <v-tooltip left>
          <v-btn
            fab
            dark
            color="green"
            @click="triggerNetlifyIdentityAction('login')"
            slot="activator"
          >
            <v-icon>fas fa-sign-in-alt</v-icon>
          </v-btn>
          <span>Sign In</span>
        </v-tooltip>
        <v-tooltip left>
          <v-btn
            fab
            dark
            color="red"
            @click="triggerNetlifyIdentityAction('signup')"
            slot="activator"
          >
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
        <v-flex primary lighten-2 py-3 text-xs-center black--text xs12>
          &copy;2018 -- {{ new Date().getFullYear()}}
          <strong>superjs</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import netlifyIdentity from "netlify-identity-widget";

  import { getGoogleOauthRedirectLink } from "./helpers/oauth";

  netlifyIdentity.init({
    APIUrl: "https://superjs.org/.netlify/identity",
    logo: true
  });

  export default {
    name: "app",
    computed: {
      ...mapGetters("user", {
        isLoggedIn: "getUserStatus",
        userprofile: "getUserprofile"
      }),
      username() {
        return this.userprofile ? this.userprofile.username : "there!";
      },
      broadcast() {
        return { message: "欢迎光临！", type: "" };
      }
    },
    data: () => {
      return {
        oauthWindow: null,
        dialog: false,
        drawer: null,
        items: [
          { icon: "fas fa-home", text: "Homepage", routeName: "Home" },
          {
            icon: "fas fa-file-signature",
            text: "API Docs",
            routeName: "ApiDocs"
          },
          { icon: "fab fa-old-republic", text: "VIP", routeName: "Vip" },
          { icon: "fas fa-rss", text: "Subscribe" },
          { icon: "fas fa-download", text: "Download Files" },
          {
            icon: "fas fa-user-cog",
            "icon-alt": "fas fa-chevron-down",
            text: "Account Settings",
            active: false,
            children: [
              { icon: "fas fa-user-tie", text: "My Profile" },
              { icon: "fas fa-lock", text: "Reset Password" }
            ]
          },
          {
            icon: "fas fa-globe",
            "icon-alt": "fas fa-chevron-down",
            text: "Meta Information",
            active: false,
            children: [
              { icon: "fas fa-child", text: "About Us" },
              { icon: "fas fa-phone-volume", text: "Contact Us" },
              {
                icon: "fas fa-file-alt",
                text: "Terms Of Use",
                routeName: "MetaTermsOfUse"
              },
              {
                icon: "fas fa-user-secret",
                text: "Privacy Policy",
                routeName: "MetaPrivacyPolicy"
              },
              { icon: "fas fa-question-circle", text: "FAQs" }
            ]
          },
          {
            icon: "fas fa-expand",
            "icon-alt": "fas fa-chevron-down",
            text: "More",
            active: false,
            children: [{ icon: "fas fa-clock", text: "Coming Soon" }]
          }
        ]
      };
    },
    methods: {
      ...mapActions("user", {
        updateUserprofile: "updateUserprofile"
      }),
      searchWhatever() {
        console.log("search");
      },
      goToRoute(routeName) {
        this.$router.push({ name: routeName });
      },
      onGoogleOauthSuccess({ user,mydata }) {
        console.log(mydata);
        // console.log("oauth success", user);
        const profile = Object.assign({}, this.userprofile, {
          src: "google",
          username: user.name,
          email: user.email
        });
        this.updateUserprofile({
          currentUserprofile: profile
        });

        document.removeEventListener("google-oauth", this.onGoogleOauthSuccess);
      },
      signInWith(oauthProvider) {
        if (oauthProvider === "google") {
          document.addEventListener("google-oauth", this.onGoogleOauthSuccess);
          this.oauthWindow = window.open(
            getGoogleOauthRedirectLink(),
            "GoogleOauth",
            "width=600,height=400,menubar=no,toolbar=no,location=no"
          );
        }
      },
      triggerNetlifyIdentityAction(action) {
        if (action == "login" || action == "signup") {
          netlifyIdentity.open(action);
          netlifyIdentity.on(action, user => {
            netlifyIdentity.close();
            let currentUserprofile = {
              src: "netlify",
              username: user.user_metadata.full_name,
              email: user.email,
              access_token: user.token.access_token,
              expires_at: user.token.expires_at,
              refresh_token: user.token.refresh_token,
              token_type: user.token.token_type
            };
            this.updateUserprofile({
              currentUserprofile: currentUserprofile
            });
          });
        } else if (action == "logout") {
          this.updateUserprofile({
            currentUserprofile: null
          });
          netlifyIdentity.logout();
          this.$router.push({ name: "Home" });
        }
      }
    },
    beforeDestroy() {
      document.removeEventListener("google-oauth", this.onGoogleOauthSuccess);
    }
  };
</script>

<style>
  * {
    text-transform: none !important;
  }
</style>