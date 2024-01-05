<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <!-- Navigation button -->
      <v-navigation-drawer v-model="drawer" location="left" primary>
        <!-- Home nav -->
        <v-list class="tw-text-green-700 tw-ml-5 tw-mt-2 tw-gap-4 tw-flex tw-flex-col">
          <router-link :to="{ name: 'home' }">
            <div>
              <v-icon>mdi-home</v-icon>
              Home
            </div>
          </router-link>
          <!-- Contact nav -->
          <router-link :to="{ name: 'contact' }">
            <div>
              <v-icon>mdi-phone</v-icon>
              Contact
            </div>
          </router-link>
          <!-- Movie nav -->
          <router-link :to="{ name: 'addMovie' }">
            <div>
              <v-icon>mdi-movie</v-icon>
              Add Movie
            </div>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <!-- Router view -->
      <v-main class="tw-w-screen tw-min-h-screen tw-flex tw-flex-col">
        <v-card-text id="app">
          <router-view />
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
  <footer>
    <div class="tw-text-center tw-bg-[#ffffff]">
      {{ new Date().getFullYear() }} — <strong>Vuetify with @.ariesaa</strong>
    </div>
  </footer>
</template>

<script>
import '@/../assets/stylesheets/main.css'

import { RouterView, RouterLink } from 'vue-router'

export default {
  data: () => ({
    drawer: false,
  }),
  computed: {
    title() {
      const routeName = this.$route.name

      try {
        if (routeName === 'home') {
          return 'Home'
        } else if (routeName === 'contact') {
          return 'Contact'
        } else if (routeName === 'addMovie') {
          return 'Add Movie'
        } else if (routeName === 'movie'){
          return 'Movie'
        }

        return 'My Files'
      } catch (error) {
        console.error(error)
      }

    }
  }
}
</script>
