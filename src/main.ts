import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { registerSW } from 'virtual:pwa-register';
import App from './App.vue';
import './assets/main.scss';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/600.css';
import es from './i18n/locales/es';
import en from './i18n/locales/en';
import { getBestLanguage } from './i18n/locale';

const app = createApp(App);
app.use(createPinia());
const i18n = createI18n({
  legacy: false,
  locale: getBestLanguage(),
  fallbackLocale: 'en',
  messages: {
    es,
    en,
  },
});
app.use(i18n);
app.mount('#app');

const updateSW = registerSW({
  onOfflineReady() {
    console.log('Ready to work offline');
  },
});
