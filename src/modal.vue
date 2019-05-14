<template>
		<!-- Modal -->
		<div>
			
		
		<div v-if="showModal">
			<div class="bg"></div>
			<div class="modal-vue">
			  <div class="modal-dialog modal-dialog-centered" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title" id="exampleModalLongTitle">Edit person</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"  @click="closeModal">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div class="modal-body">
					<div class="container">
						<div class="row">
				      		<div class="col-12 mb-1"><input type="text" class="form-control" placeholder="Фамилия" v-on:input="person.lastname = $event.target.value" v-bind:value="person.lastname"></div>
				           <div class="col-12 mb-1"><input type="text" class="form-control" placeholder="Имя" v-on:input="person.firstname = $event.target.value" v-bind:value="person.firstname" ></div>
				            <div class="col-12 mb-1"><input type="text" class="form-control" placeholder="Отчество" v-on:input="person.pat = $event.target.value" v-bind:value="person.pat" ></div>
				            <div class="col-12 mb-1"><input type="text" class="form-control" placeholder="Дата рождения" v-on:input="person.birth = $event.target.value" v-bind:value="person.birth"></div>
				            <div class="col-12 mb-1"><input type="text" class="form-control" placeholder="Адресс" v-on:input="person.adress = $event.target.value" v-bind:value="person.adress"></div>
				      		</div>
				      	</div>
					</div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Close</button>
			        <button type="button" class="btn btn-primary" @click.prevent="savePerson(idEl)">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>
	</div>
	<div v-if="deleteModal">
			<div class="bg"></div>
			<div class="modal-vue">
			  <div class="modal-dialog modal-dialog-centered" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title" id="exampleModalLongTitle">Вы уверены что хотите удалить запись?</h5>
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Отменить</button>
			        <button type="button" class="btn btn-primary" @click.prevent="DeletePerson(idEl)">Удалить</button>
			      </div>
			    </div>
			  </div>
			</div>
	</div>
	<div v-if="insertModal">
			<div class="bg"></div>
			<div class="modal-vue">
			  <div class="modal-dialog modal-dialog-centered" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title" id="exampleModalLongTitle">Add person</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"  @click="closeModal">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div class="modal-body">
					<div class="container">
						<div class="row">
				      		<div class="col-12 mb-1"><input type="text" class="form-control" placeholder="Фамилия" v-model="itemPerson.lastname"></div>
				           <div class="col-12 mb-1"><input type="text" class="form-control" placeholder="Имя" v-model="itemPerson.firstname"></div>
				            <div class="col-12 mb-1"><input type="text" class="form-control" placeholder="Отчество" v-model="itemPerson.pat"></div>
				            <div class="col-12 mb-1"><input type="text" class="form-control" placeholder="Дата рождения" v-model="itemPerson.birth"></div>
				            <div class="col-12 mb-1"><input type="text" class="form-control" placeholder="Адресс" v-model="itemPerson.adress"></div>
				      		</div>
				      	</div>
					</div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Close</button>
			        <button type="button" class="btn btn-primary" @click="addPerson()">Add person</button>
			      </div>
			    </div>
			  </div>
			</div>
	</div>
	</div>
</template>
<script>
	export default{
		name: 'modal',
		props: ['showModal','deleteModal', 'insertModal', 'person', 'idEl'],
		data(){
			return{
				itemPerson: {
					family: []
				}
			}
		},
		methods:{
			setValue(){
				this.item = person;
			},
			savePerson(id){
				this.$emit('savePerson', [this.person, id]);
			},
			DeletePerson(id){
				this.$emit('DeletePerson', id);
			},
			addPerson(){
				this.$emit('addPerson', this.itemPerson);
				this.itemPerson = {
					family: []
				}

			},
			closeModal(){
				this.$emit('closeModal', false);
			}
		}
	}
</script>
<style scoped>
	.modal-vue{
		position: fixed;
	    top: 50px;
	    width: 500px;
	    left: 50%;
	    margin-left: -250px;
	    z-index:999;
	}
	.bg{
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 99
	}
</style>