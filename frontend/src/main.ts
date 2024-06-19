import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import Toaster from "@meforma/vue-toaster";

import App from "./App.vue";
import router from "./router";
import Vue3TouchEvents, {
  type Vue3TouchEventsOptions,
} from "vue3-touch-events";

import "./assets/styles/style.css";

const app = createApp(App);
const pinia = createPinia();

app
  .use(pinia)
  .use(VueAxios, axios)
  .use(router)
  .use(Toaster)
  .use<Vue3TouchEventsOptions>(Vue3TouchEvents, {
    // disableClick: false
    // any other global options...
  })
  .mount("#app");
