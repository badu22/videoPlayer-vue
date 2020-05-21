import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import VuePlyr from 'vue-plyr'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Buefy)
Vue.use(VueSimpleMarkdown)
Vue.use(VueAxios, axios)

// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
	plyr: {
		fullscreen: { enabled: false }
	},
	emit: ['ended']
})

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
