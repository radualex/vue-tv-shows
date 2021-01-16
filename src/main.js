import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { Observable, Subscription, Subject } from "rxjs";
import VueRx from "vue-rx";

Vue.config.productionTip = false;

Vue.use(VueRx, { Observable, Subscription, Subject });

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
