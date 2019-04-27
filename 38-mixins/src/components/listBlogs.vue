<template>
	<div id="show-blogs">
		<h1>List Blog Titles</h1>
		<input type="text" v-model="search" placeholder="search blogs">
		<!-- <div v-for="blog in blogs" class="single-blog"> -->
		<div v-for="blog in filteredBlogs" class="single-blog">
			<h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
		</div>
	</div>
</template>



<script>
import searchMixin from '../mixins/searchMixin';

export default {
	components: {
	},
	data () {
		return {
		blogs: [],
		search: ""
		}
	},
	methods: {
	},
	created() {
		this.$http.get("http://jsonplaceholder.typicode.com/posts").then(function(data) {
		//   console.log(data);
			this.blogs = data.body.slice(0, 10);
		});
	},
	computed: {
	},
	filters: {
		// 'to-uppercase': function(value) { // the same as below, just written in a different way
		// 	return value.toUpperCase();
		// }
		toUppercase(value) {
			return value.toUpperCase();
		}
	},
	directives: {
		'rainbow': {
			bind(el, binding, vnode) {
				el.style.color = "#" + Math.random().toString().slice(2,8);
			}
		}
	},
	mixins: [
		searchMixin
	]
}
</script>



<style scoped>
#show-blogs {
	max-width: 800px;
	margin: 0 auto;
}
.single-blog {
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
}
</style>
