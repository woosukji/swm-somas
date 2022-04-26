import { getDocs } from 'firebase/firestore';
import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../plugins/firebase';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {

    /**
     * 전체 유저 리스트를 반환합니다.
     * @returns 유저 리스트
     */
    async getUsers() {
      const usersCol = collection(db, 'users');
      const userSnapshot = await getDocs(usersCol);
      const userList = userSnapshot.docs.map(doc => doc.data());
      return userList;
    }
  },
  modules: {
  },
});
