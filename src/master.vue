<template>
  <div id="app">
	
    <app-modal  v-bind:showModal="showModal" 
                v-bind:person="person" 
                v-bind:idEl="idEl"  
                v-on:closeModal="closeModal"
                v-on:savePerson="savePerson"></app-modal>
    <app-modal  v-bind:deleteModal="deleteModal"
                v-bind:idEl="idEl"
                v-on:closeModal="closeModal"
                v-on:DeletePerson="DeletePerson"></app-modal>
    <app-modal  v-bind:insertModal="insertModal"
                v-on:closeModal="closeModal"
                v-on:addPerson="addPerson"></app-modal>
    <div class="container">
      <div class="row mt-4">
        <div class="col-4"><input class="form-control" type="text" placeholder="Поиск по фамилии" aria-label="Search" v-model="searchLastName"></div>
        <div class="col-4"><input class="form-control" type="text" placeholder="Поиск по имени" aria-label="Search" v-model="searchFirstName"></div>
        <div class="col-4"><input class="form-control" type="text" placeholder="Поиск по дате рождения" aria-label="Search" v-model="searchBirth"></div>
      </div>
      <div class="row text-left">
        <div class="row col-12 head">
          <div class="col-2 mb-1">Фамилия</div>
          <div class="col-2 mb-1">Имя</div>
          <div class="col-2 mb-1">Отчество</div>
          <div class="col-2 mb-1">Дата рождения</div>
          <div class="col-1 mb-1">Адрес</div>
          <div class="col-3 mb-1"></div>
        </div>
        <div class="row col-12 " v-for="(person, id) in filtered">
            <div class="col-2 mb-1">{{person.lastname}}</div>
            <div class="col-2 mb-1">{{person.firstname}}</div>
            <div class="col-2 mb-1">{{person.pat}}</div>
            <div class="col-2 mb-1">{{person.birth}}</div>
            <div class="col-1 mb-1">{{person.adress}}</div>
            <div class="col-3 mb-1">
            	<button type="button" class="btn btn-primary" v-on:click="editPersons(id)">Edit</button> 
              	<button type="button" class="btn btn-danger" v-on:click="openDeletePersons(id)">Delete</button>
              	<router-link v-bind:to="{name: 'idLink', params: {idLink: id}}" class="btn btn-info">Detail</router-link>
             </div>
        </div>
      </div>
      <button  type="button" class="btn btn-success float-right mt-2"  v-on:click="openInsertPersons()">Insert</button>
    </div>

  </div>
</template>

<script>
import modal from './modal.vue';

export default {
  name: 'master',
  data () {
    return {
      person:{},
      searchFirstName: '',
      searchLastName: '',
      searchBirth: '',
      idEl: '',
      deleteModal: false,
      showModal: false,
      insertModal: false
    }
  },
  methods:{
    editPersons(id){
      let person = this.$store.getters.PERSON[id];
      this.person = {...person};
      this.showModal = true;
      this.idEl = id;
    },
    openDeletePersons(id){
      this.deleteModal = true;
      this.idEl = id;
    },
    openInsertPersons(){
      this.insertModal = true;
    },
    DeletePerson(id){
      this.$store.commit('deletePersons', id);
      this.deleteModal = false;
    },
    closeModal(){
      this.showModal = false;
      this.deleteModal = false;
      this.insertModal = false;
    },
    addPerson(el){
      this.$store.commit('addPersons', el);
      this.insertModal = false;
    },
    savePerson(el){
    this.$store.commit('changePersons', el);
      this.showModal = false;
    }
  },
  computed:{
    filtered(){
      let searchFirstName = this.searchFirstName;
      let searchLastName = this.searchLastName;
      let searchBirth = this.searchBirth;
      let persons = this.$store.getters.PERSON;
      return persons.filter((el)=>{
        if(!searchBirth && !searchLastName && !searchFirstName){
          return true;
        }
        if(el.firstname.indexOf(searchFirstName) > -1 && el.lastname.indexOf(searchLastName) > -1 && el.birth.indexOf(searchBirth) > -1){
          return true;
        }else{
          return false;
        }
      })
    }
  },
  components:{
    AppModal: modal
  }
}
</script>

<style>
  .container-app{
    margin-top:40px;
  }
  .head .col-2.mb-1 {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
    padding: 10px 0;
    font-weight: bold;
    font-size: 16px;
}
</style>
