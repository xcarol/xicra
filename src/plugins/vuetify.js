import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ca from 'vuetify/es5/locale/ca';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ca },
    current: 'ca',
  },
  icons: {
    iconfont: 'mdi',
  },
});
