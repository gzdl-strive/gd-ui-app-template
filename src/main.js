import { createApp } from 'vue'
// import GdUI from "gd-ui-vite/gd-ui.mjs";
// import "gd-ui-vite/assets/css/entry.css";
import Button from "gd-ui-vite/Button";
import "gd-ui-vite/Button/assets/css/index.css";
import App from './App.vue'

createApp(App).use(Button).mount('#app')
