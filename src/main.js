import { createApp } from 'vue'

import router from './router.js';
import store from './store/index.js';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseContainer from './components/ui/BaseContainer.vue';

import App from './App.vue';

const app = createApp(App)


app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-container', BaseContainer);

app.mount('#app');
