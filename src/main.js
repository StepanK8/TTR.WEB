import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from '@/store/index.js'
import OpenLayersMap from 'vue3-openlayers'
// import VueMask from 'v-mask'
import VueTheMask from 'vue-the-mask'

createApp(App)
.use(store)
.use(VueTheMask)
.use(router)
.use(OpenLayersMap)
.mount("#app");
