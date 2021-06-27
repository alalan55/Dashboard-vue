import { createApp } from "vue";
// import {v4 as uuidV4}  from "vue-uuid";

// import UUID  from "vue-uuid";
import App from "./App.vue";
import store from "./store";

import '@/style/global.scss'

createApp(App)
// .use(v4)
.use(store)
.mount("#app");
