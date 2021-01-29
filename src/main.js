import Vue from "vue"
import App from "./App.vue"
import VueHtmlToPaper from "vue-html-to-paper"


Vue.config.productionTip = false
Vue.use(VueHtmlToPaper)

new Vue({
  render: h => h(App)
}).$mount("#app")
