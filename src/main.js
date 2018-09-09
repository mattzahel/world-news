import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BackToTop from 'vue-backtotop'

library.add(faBars)
library.add(faTimes)
library.add(faAngleUp)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BackToTop)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
