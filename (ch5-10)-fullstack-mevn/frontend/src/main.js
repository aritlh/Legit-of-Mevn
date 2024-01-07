import '@/style.css'

import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify'
import 'sweetalert2/dist/sweetalert2.min.css';
import router from '@/plugins/router'
import App from '@/App.vue'

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.mount('#app')