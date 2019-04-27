<template>
	<div>
		<app-header></app-header>
		<router-view></router-view>
	</div>
</template>



<script>
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";
import listBlogs from "./components/listBlogs.vue";
import header from "./components/header.vue";

export default {
	components: {
		"add-blog": addBlog,
		"show-blogs": showBlogs,
		"list-blogs": listBlogs,
		"app-header": header // has to be app-header because <header> is an existing html tag
	},
	data () {
		return {
		}
	},
	methods: {
	}
}
</script>



<style scoped>
</style>
