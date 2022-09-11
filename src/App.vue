<template>
  <v-app>
    <v-app-bar dark app>
      <v-tabs class="tabs">
        <v-tab @click="goto('1')">Home</v-tab>
        <v-tab @click="goto('2')">Cat Facts</v-tab>
        <v-tab @click="goto('3')">Bored Activities</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="d-flex">
      <HomePage :msg=tabNumber />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage';
import './components/navBar.css'

export default {
  name: 'App',
  components: {
    HomePage,
  },
  data: () => ({
    tabNumber : '1'
  }),
  methods: {
    goto (tabNum) {
      this.tabNumber = `${tabNum}`
    }
  },
};
</script>