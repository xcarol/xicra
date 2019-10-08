import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ca from 'vuetify/es5/locale/ca';
import en from 'vuetify/es5/locale/en';
import es from 'vuetify/es5/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  lang: {
    locales: { ca, en, es },
    current: 'ca',
  },
});
