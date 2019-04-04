<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>



<script>
export default {
  components: {
  },
  data () {
    return {
      copyright: "Copyright 2019 Vue Ninjas"
    }
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
