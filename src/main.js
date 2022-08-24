// Vue App

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Styles file
import './style/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'


library.add(faHatWizard, faSquareFacebook, faGoogle)

// Components
import ListContent from '@/components/layouts/ListContent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
