<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>



<script>
import { bus } from "../main"; // main.js - no need to put .js
export default {
  props: {
    title: {
      type: String
    }
  },
  components: {
  },
  data () {
    return {
      title: "Vue Ninjas"
    }
  },
  methods: {
    changeTitle: function() {
      // this.title = "Vue Wizards";
      // this.$emit("emitingNewTitle", "change to Vue Wizards"); // "change to Vue Wizards" is the emitted value of $event in App.vue
      this.title = "Bus Vue Wizards"; // if this is commented title will change only in the footer because we're listening for the event there, created()
      bus.$emit("changingToNewTitle", "Bus changed Vue Wizards");
    }
  }
}
</script>



<style scoped>
header {
	background: lightgreen;
	padding: 10px;
}
h1 {
	color: #222;
	text-align: center;
}
</style>
