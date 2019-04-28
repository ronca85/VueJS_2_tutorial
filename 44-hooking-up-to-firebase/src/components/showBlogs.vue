<template>
	<div id="show-blogs">
		<h1>All Blog Articles</h1>
		<input type="text" v-model="search" placeholder="search blogs">
		<!-- <div v-for="blog in blogs" class="single-blog"> -->
		<div v-for="blog in filteredBlogs" class="single-blog">
			<router-link v-bind:to="'/blog/' + blog.id">
				<h2>{{ blog.title | to-uppercase }}</h2>
			</router-link>
			<article>{{ blog.content | snippet }}</article>
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
			blogs: [], // goes here
			search: ""
		}
	},
	methods: {
	},
	created() {
		this.$http.get("https://nn-vue-playlist-547b3.firebaseio.com/posts.json")
			.then(function(data) {
			// console.log(data.json());
			return data.json();
		}).then(function(data){
			var blogsArray = [];
			for ( let key in data ) {
				// console.log(data[key]);
				data[key].id = key;
				blogsArray.push(data[key]);
			}
			// console.log(data);
			// console.log(blogsArray);
			this.blogs = blogsArray; // from here
		});
	},
	computed: {
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
