import { createApp } from 'vue'
import App from './App.vue'
import GdUI from "gd-ui-vite/gd-ui.mjs";
import "gd-ui-vite/assets/css/entry.css";

createApp(App).use(GdUI).mount('#app')
