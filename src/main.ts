import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";

import { 
    FaGithub, 
    CoVueJs, 
    CoTypescript, 
    SiTailwindcss, 
    BiBootstrapFill, 
    CoNuxtJs, 
    CoJavascript,
    CoHtml5,
    IoLogoCss3,
    CoGo,
    SiExpress,
    SiSqlite,
} from "oh-vue-icons/icons";

addIcons(
    FaGithub, 
    CoVueJs, 
    CoTypescript, 
    SiTailwindcss, 
    BiBootstrapFill, 
    CoNuxtJs, 
    CoJavascript,
    CoHtml5,
    IoLogoCss3,
    CoGo,
    SiExpress,
    SiSqlite
);

const app = createApp(App)

app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
