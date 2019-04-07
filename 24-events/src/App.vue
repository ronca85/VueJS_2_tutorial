<template>
  <div>
    <app-header v-bind:title="title" v-on:emitingNewTitle="receivingNewTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>



<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
  components: {
    // <header></header>
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas
  },
  data () {
    return {
      ninjas: [
        {name: "Ryu", speciality: "Vue Components", show: false},
        {name: "Crystal", speciality: "HTML Wizardry", show: false},
        {name: "Hitoshi", speciality: "Click Events", show: false},
        {name: "Tango", speciality: "Conditionals", show: false},
        {name: "Kami", speciality: "Webpack", show: false},
        {name: "Yoshi", speciality: "Data Diggin", show: false}
      ],
      title: "GG Vue Ninjas"
    }
  },
  methods: {
    receivingNewTitle: function(incomingNewTitle) {
      this.title = incomingNewTitle; // receiving $emit this string: "change to Vue Wizards"
    }
  }
}
</script>



<style scoped>

</style>

