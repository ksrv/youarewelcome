import { make } from 'vuex-pathify';
import providers from '@/providers';

const namespaced = true;

const state = () => ({
  loading: false,
  messages: []
});

const getters = {
  ...make.getters(state),
};

const mutations = {
  ...make.mutations(state),

  ADD_MESSAGE (state, message) {
    const { messages } = state;
    messages.push(message);
    state.message = messages;
  },
};

const actions = {
  ...make.actions(state),

  async send ({ commit } , message) {
    try {
      commit('SET_LOADING', true);
      commit('ADD_MESSAGE', { text: message, me: true });
      const answer = await providers.chat.send(message);
      commit('ADD_MESSAGE', { text: answer, me: false });
    } catch (error) {
      commit('ADD_MESSAGE', { text: 'Что-то пошло не так', e: true });
    } finally {
      commit('SET_LOADING', false);
    }
  }
};


export default { namespaced, state, mutations, actions, getters };
