<template>
	<div>
		<div class="container">
			<h1>Список родственников у персоны {{$store.state.persons[idLink].firstname +' '+ $store.state.persons[idLink].lastname}}</h1>
	      <div class="row mt-4" v-if="family">
	      	<div class="row text-left col-12">
	        <div class="row col-12 head">
	          <div class="col-2 mb-1">Фамилия</div>
	          <div class="col-2 mb-1">Имя</div>
	          <div class="col-2 mb-1">Отчество</div>
	          <div class="col-2 mb-1">Дата рождения</div>
	          <div class="col-2 mb-1">Адрес</div>
	          <div class="col-2 mb-1"></div>
	        </div>
	        <div class="row col-12 " v-for="(person, id) in filterListFamily">
	            <div class="col-2 mb-1">{{person.lastname}}</div>
	            <div class="col-2 mb-1">{{person.firstname}}</div>
	            <div class="col-2 mb-1">{{person.pat}}</div>
	            <div class="col-2 mb-1">{{person.birth}}</div>
	            <div class="col-2 mb-1">{{person.adress}}</div>
	            <div class="col-2 mb-1">
	              	<button type="button" class="btn btn-danger" v-on:click="DeletePersonFamily(id)">Delete</button>
	             </div>
	        </div>
	      </div>

	      	<div class="col-3">
	      		<button type="button" class="btn btn-primary" v-on:click="changeFamily = !changeFamily">Добавить родственников</button> 
	      	</div>
	      </div>
	      <div class="row mt-4" v-if="!family">
	      	<div class="col-12"><h3>Родственников нет</h3></div>
	      	<div class="col-3">
	      		<button type="button" class="btn btn-primary" v-on:click="changeFamily = !changeFamily">Добавить родственников</button> 
	      	</div>
	      </div>
	      <div class="row text-left" v-if="changeFamily">
	        <div class="row col-12 head">
	          <div class="col-2 mb-1">Фамилия</div>
	          <div class="col-2 mb-1">Имя</div>
	          <div class="col-2 mb-1">Отчество</div>
	          <div class="col-2 mb-1">Дата рождения</div>
	          <div class="col-2 mb-1">Адрес</div>
	          <div class="col-2 mb-1"></div>
	        </div>
	        <div class="row col-12 " v-for="(person, id) in filterList">

	            <div class="col-2 mb-1">{{person.lastname}}</div>
	            <div class="col-2 mb-1">{{person.firstname}}</div>
	            <div class="col-2 mb-1">{{person.pat}}</div>
	            <div class="col-2 mb-1">{{person.birth}}</div>
	            <div class="col-2 mb-1">{{person.adress}}</div>
	            <div class="col-2 mb-1">
	            	<button type="button" class="btn btn-primary" v-on:click="addFamily(id)">Add</button> 
	             </div>
	        </div>
	      </div>
	    </div>
	</div>
</template>
<script>
	import master from './master.vue'
	import { mapState,mapGetters } from 'vuex'

	export default{
		name: 'detail',
		props: ['idLink'],
		data(){
			return {
				family: false,
				changeFamily: false,
				listDontFamily: []
			}
		}, 
		methods:{
			addFamily(id){
				let newFamily = Object.assign({}, this.listDontFamily[id] );
				let data = [this.idLink, newFamily];
				this.$store.commit('addFamily', data);
				this.family = true;
			},
			checkIssetFamily(){
				if(this.$store.state.persons[this.idLink].family.length > 0)
					return this.family = true;

			},
			DeletePersonFamily(id){
				let dataId = [this.idLink, id];
				this.$store.commit('deletePersonFamily', dataId);
				if(this.$store.state.persons[this.idLink].family < 1)
					this.family = false;
			},
			createListDontFamily(){
				this.listDontFamily = this.$store.state.persons.filter((el, index) => {
					return index != this.idLink
				});
			}
		},
		computed:{
			filterList(){
				return this.$store.state.persons.filter((el, index) => {
					return index != this.idLink
				});
			},
			filterListFamily(){
				return this.$store.state.persons[this.idLink].family
			},
		},
		beforeMount(){
			this.checkIssetFamily();
			this.createListDontFamily();
		}
		
	}
</script>
<style>
  .head .col-2.mb-1 {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
    padding: 10px 0;
    font-weight: bold;
    font-size: 16px;
}
</style>