<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>



<script>
import { bus } from "../main";
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
      copyright: "Copyright 2019"
    }
  },
  created() {
    bus.$on("changingToNewTitle", (data) => {
      this.title = data; // data is "Bus changed Vue Wizards" in Header.vue
    });
  },
  methods: {
  }
}
</script>



<style scoped>
footer {
	background: #222;
	padding: 6px;
}
p {
	color: lightgreen;
	text-align: center;
}
</style>
