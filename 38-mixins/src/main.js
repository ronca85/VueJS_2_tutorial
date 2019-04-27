import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// Filters
Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + "...";
});

// Custom Directives
Vue.directive("rainbow", {
  bind(el, binding, vnode) {
    // binding is the value of the v-rainbow attribute in showBlogs.vue
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
