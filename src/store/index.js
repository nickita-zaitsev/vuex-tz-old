import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		list: []
	},
	actions:{
		getList({commit}){
			axios
      		.get('http://devboapi.vindome.net/api/Wines')
      		.then(response =>  {
				commit('setList', response.data.list)
			});
		}
	},
	getters: {
		list(state){
			return state.list;
		}
	},
	mutations: {
		setList(state, list){
			state.list = list;
		}
		
	},
	strict: process.env.NODE_ENV !== 'production'
});