import { createApp } from 'vue'
import {createI18n} from 'vue-i18n'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './style.css'
import App from './App.vue'




import pt_br from './locales/pt_br'; // Remova o .ts
import en from './locales/en'; // Remova o .ts
import jp from './locales/jp'; // Remova o .ts

const languages = {
    pt_br,
    en,
    jp
}

const i18n = createI18n ({
    locale: 'pt_br',
    fallbackLocale: 'pt_br',
    messages: languages
})

createApp(App).use(i18n).mount('#app')
