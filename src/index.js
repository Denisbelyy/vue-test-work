import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  	persons: [
        {lastname: 'abama', firstname: 'barak', pat: 'afro', birth: '16.12.1900', adress: 'amerika', family: []},
        {lastname: 'joy', firstname: 'jack', pat: 'kirilovich', birth: '16.12.1920', adress: 'amerika', family: []},
        {lastname: 'jack', firstname: 'family', pat: 'petrovich', birth: '16.12.1930', adress: 'amerika', family: []},
        {lastname: 'lana', firstname: 'egor', pat: 'sidorovna', birth: '16.12.1940', adress: 'amerika', family: []},
        {lastname: 'girl', firstname: 'igor', pat: 'jn', birth: '16.12.1950', adress: 'amerika', family: []},
      ]
  },
  getters: {
  	PERSON: state => {return state.persons;},
  	LASTNAME: state => { return state.persons.lastname;},
  	FIRSTNAME: state => { return state.persons.firstname;},
  	PAT: state => { return state.persons.pat;},
  	BIRTH: state => { return state.persons.birth;},
  	ADRESS: state => { return state.persons.adress;},
  	getFamily: state => { 
	     return (id) => { 
	 		return state.persons[id].family;
	     }
	 }
  },
  mutations: {
  	addPersons(state, payload){
  		state.persons.push(payload);
  	},
  	deletePersons(state, id){
  		state.persons.splice(id,1);
  	},
  	deletePersonFamily(state, dataId){
  		let idPerson = dataId[0];
  		let idFamily = dataId[1];
  		state.persons[idPerson].family.splice(idFamily,1);
  	},
  	changePersons(state, el){
      state.persons[el[1]].lastname = el[0].lastname;
      state.persons[el[1]].firstname = el[0].firstname;
      state.persons[el[1]].pat = el[0].pat;
      state.persons[el[1]].birth = el[0].birth;
      state.persons[el[1]].adress = el[0].adress;
  	},
  	addFamily(state, i){
  		state.persons[i[0]].family.push(i[1])
  	}
  },
  actions: {},
});