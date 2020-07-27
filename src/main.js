import Vue from 'vue'
import App from './App.vue'
import lang from "element-ui/lib/locale/lang/es";
import locale from "element-ui/lib/locale";
import {InputNumber, Form, FormItem, Button} from "element-ui";


Vue.config.productionTip = false

/* Configure Element Ui Language*/
locale.use(lang);

/* Use only the necessary element components*/
Vue.use(Form);
Vue.use(FormItem);
Vue.use(InputNumber);
Vue.use(Button);

new Vue({
  render: h => h(App),
}).$mount('#app')
