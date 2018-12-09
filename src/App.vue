<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed app v-model="drawer">
      <v-container class="py-1">
        <v-layout row wrap>
          <v-flex xs12 class="mb-2">
            <v-btn block large dark color="blue text-capitalize">Hello {{ username }}</v-btn>
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
      <v-list>
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            v-model="item.model"
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
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          flat
          round
          class="text-capitalize"
        >{{ link }}</v-btn>
        <v-flex primary lighten-2 py-3 text-xs-center black--text xs12>
          &copy;2018 -- {{ new Date().getFullYear()}}
          <strong>Superjs</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import netlifyIdentity from "netlify-identity-widget";
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
        return this.userprofile ? this.userprofile.username : "";
      },
      broadcast() {
        return { message: "欢迎光临！", type: "" };
      }
    },
    data: () => {
      return {
        dialog: false,
        drawer: null,
        items: [
          { icon: "fas fa-home", text: "Homepage", routeName: "Home" },
          { icon: "fas fa-bookmark", text: "API Docs", routeName: "ApiDocs" },
          { icon: "fab fa-linkedin", text: "Jobs" },
          { icon: "fas fa-star", text: "VIP", routeName: "Vip" },
          { icon: "fas fa-cogs", text: "Settings" },
          { icon: "fas fa-download", text: "Download Files" },
          {
            icon: "fas fa-expand",
            "icon-alt": "fas fa-arrow-down",
            text: "More",
            model: false,
            children: [
              { text: "Import" },
              { text: "Export" },
              { text: "Print" },
              { text: "Undo changes" },
              { text: "Other contacts" }
            ]
          }
        ],
        links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
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
      netlifySignin() {
        netlifyIdentity.open("login");
        netlifyIdentity.on("login", user => {
          netlifyIdentity.close();
          this.updateUserprofile({
            currentUserprofile: {
              username: user.user_metadata.full_name,
              email: user.email
            }
          });
        });
      },
      netlifySignup() {
        netlifyIdentity.open("signup");
        netlifyIdentity.on("signup", user => {
          netlifyIdentity.close();
          this.updateUserprofile({
            currentUserprofile: {
              username: user.user_metadata.full_name,
              email: user.email
            }
          });
        });
      },
      netlifySignout() {
        this.updateUserprofile({
          currentUserprofile: null
        });
        netlifyIdentity.logout();
        this.$router.push({ name: "Home" });
      }
    }
  };
</script>
