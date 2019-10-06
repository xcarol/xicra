<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>La Xicra</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content class="cc">
      <Home/>
    </v-content>

    <v-footer app>
      FOOTET
    </v-footer>
  </v-app>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.cc {
  background-image: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg');
}
</style>
