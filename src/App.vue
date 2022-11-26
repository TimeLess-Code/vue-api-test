<template>
  <v-app>
    <v-app-bar dark app>
      <v-tabs class="tabs">
        <v-tab @click="goto('1')">Home</v-tab>
        <v-tab @click="goto('2')">Cat Facts</v-tab>
        <v-tab @click="goto('3')">Bored Activities</v-tab>
        <v-tab @click="goto('4')">Bitcoin index</v-tab>
        <v-tab @click="goto('5')">Menu demo</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="d-flex">
      <HomePage :tab=tabNumber />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage';
import './components/navBar.css'

import * as ConexionService from './components/Menu/Conexion/Conexion.service'

export default {
  name: 'App',
  components: {
    HomePage,
  },
  data: () => ({
    tabNumber : ConexionService.getLastTab() ?? '5'
  }),
  methods: {
    goto (tabNum) {
      this.tabNumber = `${tabNum}`
      ConexionService.rememberTab(tabNum)
    }
  },
};
</script>