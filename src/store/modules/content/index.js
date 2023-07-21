import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  state() {
    return {
      cont:[
        {
          id:'cont1',
          content:'lorem ipsum',
          pageLocation:'test-demo',
        }
      ],
    };
  },
  mutations,
  actions,
  getters,

};