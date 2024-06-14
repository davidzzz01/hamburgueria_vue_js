import { createApp } from 'vue';  // Certifique-se de que está importando de 'vue'
import router from './router';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Message from 'primevue/message';

// Adicionar o CSS do PrimeVue
import 'primevue/resources/themes/saga-blue/theme.css';       // theme
import 'primevue/resources/primevue.min.css';                 // core css
import 'primeicons/primeicons.css';                           // icons

const app = createApp(App);
app.use(router);

app.use(PrimeVue, {
    ripple: true,
    locale: {
        dayNames: ['Domingo', 'Segunda', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        dayNamesShort: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        today: 'Hoje',
        firstDayOfWeek: 0,
        timeZone: 'America/Bahia',
        locale: {
            accept: 'Aceptar',
            reject: 'Rechazar',
        },
        clear: 'Limpar',
    },
});
app.config.globalProperties.$formatDate = (date) => {
    return new Intl.DateTimeFormat('pt-BR', formatOptions).format(date);
};


app.component('Message', Message);
app.mount('#app');
