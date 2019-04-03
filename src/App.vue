<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue'

export default {
  components: {
    // <ninjas></ninjas>
    "ninjas": Ninjas
  },
  data () {
    return {
      title: "ninja app"
    }
  },
  methods: {
  }
}
</script>

<style scoped>
h1 {
	color: purple;
}
</style>
