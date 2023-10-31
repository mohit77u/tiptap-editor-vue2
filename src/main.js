import Vue from 'vue'
import App from './App.vue'
import './assets/app.scss'

Vue.config.productionTip = false

// Load mixins
import myMixin from "./mixins/myMixin";
Vue.mixin(myMixin);


new Vue({
  render: h => h(App),
}).$mount('#app')
