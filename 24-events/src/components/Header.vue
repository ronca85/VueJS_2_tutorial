<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>



<script>
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
      this.$emit("emitingNewTitle", "change to Vue Wizards"); // "change to Vue Wizards" is the emitted value of $event in App.vue
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
