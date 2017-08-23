<template>
    <div>
        <!--<loader v-if="loading"></loader>-->
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">{{dataFetch.dataFetch.serial}}</div>


                        <div class="panel-body">
                            <img :src="dataFetch.dataFetch.photo">
                        </div>
                        <div class="list-group">
                            <button @click="layout = 'upload'" type="button" class="list-group-item"
                                    :class="{'active' : layout == 'upload' }">{{dataFetch.dataFetch.serial}} Images
                            </button>
                            <button @click="layout = 'edit'" type="button" class="list-group-item"
                                    :class="{'active' : layout == 'edit' }">{{dataFetch.dataFetch.serial}} Edit
                            </button>
                            <button @click="layout = 'transaction'" type="button" class="list-group-item"
                                    :class="{'active' : layout == 'transaction' }">{{dataFetch.dataFetch.serial}} Edit
                            </button>
                        </div>
						<div class="panel-footer">
						<div class="input-group">
						  <span class="input-group-btn">
							<button @click="checkIn()" class="btn btn-primary" type="button"><span class="glyphicon glyphicon-upload" ></span> Check in</button>
						  </span>
						  <input type="number" v-model.number="postCheck.checkInQuantity" class="form-control" placeholder="Increment Quantity">
						</div><!-- /input-group -->
					</div>
                    </div>
					
					
                </div>
                <div class="col-md-8">

                    <div class="panel panel-default">
                        <div class="panel-heading">Edit {{dataFetch.dataFetch.serial}}</div>


                        <div v-if="layout == 'edit'" class="panel-body">
                            <input name="_token" type="hidden" :value="laravelToken"/>
                            <div class="form-group">
                                <input v-model="dataFetch.dataFetch.type"
                                       type="checkbox"
                                >
                                <label>Type: {{dataFetch.dataFetch.type ? 'Non-Consumable' : 'Consumable' }} </label>
                            </div>
                            <div class="form-group"
                                 :class="{'has-error' : validateDuplicate } "
                            >

                                <label>{{dataFetch.dataFetch.type ? 'Serial' : 'Name'}}</label>
                                <input type="text"
                                       class="form-control"
                                       v-model="dataFetch.dataFetch.serial"
                                       placeholder="Serial"
                                       @keydown.enter.prevent='postData'
                                >
                                <span :class="{'hidden' : !(validateDuplicate)}"
                                      class="help-block">Duplicated Serial Entry</span>
                            </div>
                            <div class="form-group"
                                 :class="{'has-error' : validateDuplicateAssetSerial } "
                            >
                                <label>Asset Serial</label>
                                <input type="text"
                                       class="form-control"
                                       v-model="dataFetch.dataFetch.assetSerial"
                                       placeholder="Asset Serial"
                                       @keydown.enter.prevent='postData'
                                >
                                <span :class="{'hidden' : !(validateDuplicateAssetSerial)}"
                                      class="help-block">Duplicated Asset Serial Entry</span>
                            </div>
                            <div class="form-group">
                                <label>Quantity</label>
                                <input v-model.number="dataFetch.dataFetch.type ? (validateSerialQuantity ? dataFetch.dataFetch.quantity = 1 : dataFetch.dataFetch.quantity) :  dataFetch.dataFetch.quantity"
                                       min="1"
                                       :disabled="dataFetch.dataFetch.type ? (validateSerialQuantity ? dataFetch.dataFetch.quantity = 1 : dataFetch.dataFetch.quantity) :  false"
                                       type="number"
                                       class="form-control"
                                >
                            </div>
                            <div class="form-group">
                                <label>Manufacture</label>
                                <select2 style="width: 100%;"
                                         :options="manufacturesFetch"
                                         required
                                         :urlName="arrayUrl.manufacture"
                                         v-model.number="dataFetch.dataFetch.manufacture.id"
                                         @modelId="dataFetch.dataFetch.manufacture.id = $event.id"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <select2 style="width: 100%;" :options="descriptionsFetch"
                                         required
                                         :urlName="arrayUrl.description"
                                         v-model.number="dataFetch.dataFetch.description.id"
                                         @modelId="dataFetch.dataFetch.description.id = $event.id"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Location</label>
                                <select2 style="width: 100%;" :options="locationsFetch"
                                         required
                                         :urlName="arrayUrl.location"
                                         v-model.number="dataFetch.dataFetch.location.id"

                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Category</label>
                                <select2 style="width: 100%;" :options="categoriesFetch"
                                         required
                                         :urlName="arrayUrl.category"
                                         v-model.number="dataFetch.dataFetch.category.id"
                                         @modelId="dataFetch.dataFetch.category.id = $event.id"
                                         @input="objectReceive($event)"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Model</label>
                                <select2 style="width: 100%;" :options="brandsFetch"
                                         required
                                         :urlName="arrayUrl.model"
                                         v-model.number="dataFetch.dataFetch.model.id"
                                         @modelId="dataFetch.dataFetch.model.id = $event.id"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Status</label>
                                <select2 style="width: 100%;" :options="statusesFetch"
                                         required
                                         :urlName="arrayUrl.status"
                                         v-model.number="dataFetch.dataFetch.status.id"
                                         @modelId="dataFetch.dataFetch.status.id = $event.id; fetchNew($event, 'Status')"
                                         
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>


                        </div>
                        <div v-if="layout == 'upload'" class="panel-body">
                            <uploader></uploader>
                            <div class="row">
                                <thumbnail
                                        v-for="(item, key, index) in dataFetch.dataFetch.photos"
                                        :key="item.id"
                                        :item="item"
                                >

                                </thumbnail>
                            </div>
                        </div>
                        <div v-if="layout == 'transaction'">
                            <button @click="transactionState = 'all'" class="btn btn-primary">All</button>
                            <button @click="transactionState = 'in'" class="btn btn-success">In</button>
                            <button @click="transactionState = 'out'" class="btn btn-info">Out</button>
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>Quantity</th>
                                    <th>Created at</th>
                                    <th>Updated at</th>
                                </tr>
                                </thead>
                                <tbody>

                                    <transaction v-for="transaction in transactionLists"
                                                 :key="transaction.id"
                                                 :transaction="transaction"
                                    >

                                    </transaction>
                                </tbody>
                            </table>
                        </div>
                        <div class="panel-footer">
                            <span class="btn-group">

                                <button
                                        class="btn btn-danger"
                                        @click="deleteData"
                                >Delete</button>
                                <button
                                        class="btn btn-primary"
                                        :disabled="validateDuplicate || validateDuplicateAssetSerial"
                                        @click="postData"
                                >Update {{dataFetch.dataFetch.serial}}</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="noty/lib/noty.css"></style>
<script>
    import Select2 from './../Transfers/Select2.vue';
    import Loader from './../Loader/Loader.vue';
    import NotyAlert from './../Noty/notyAlert';
    import Uploader from './../Uploader/Uploader.vue';
    import brandState from './../Filtering/brandStates.js';
    import categoryState from './../Filtering/categoryStates.js';
    import descriptionState from './../Filtering/descriptionStates.js';
    import ManufacturesState from './../Filtering/ManufacturesStates.js';
    import LocationState from './../Filtering/locationState.js';
    import productState from './../Filtering/productStates.js';
    import statusState from './../Filtering/statusStates.js';
    import fetchAll from './../Filtering/fetchAll.js';
    import fetchData from './../Filtering/fetchData.js';
    import Thumbnail from './../Image/Thumbnail.vue';
    import Transaction from './../Transaction/Transaction.vue';
    export default{
        components:{
            Select2, Loader, Uploader, Thumbnail, Transaction
        },
        data(){
            return{
                loading: true,
                dataFetch: fetchData.data,
                hasError: false,
				postCheck:{
					checkInQuantity: 1
				},
                arrayUrl:{
                    manufacture:"../../api/manufactures",
                    description:"../../api/descriptions",
                    location:'',
                    category:"../../api/categories",
                    model:"../../api/brands",
                    status:"../../api/statuses"
                },
                arrayCollection:{
                    model:brandState.data,
                    categories:categoryState.data,
                    products:productState.data,
                    descriptions:descriptionState.data,
                    manufactures:ManufacturesState.data,
                    locations:LocationState.data,
                    statuses: statusState.data

                },
                laravelToken: window.Laravel.csrfToken,
                layout:'edit',
                transactionState: 'all',
                newFetch:{
                    
                },

            }
        },
        mounted(){
            var vm = this
            vm.fetchAll(vm.$route.params.id)
        },
        computed:{
            transactionLists(){
                var vm = this
                var filterTransaction
                if(vm.transactionState == 'out' ) {
                    filterTransaction = _.filter(vm.dataFetch.dataFetch.checkouts, function(o) { return o.in == null; })
                }else if(vm.transactionState == 'in' ){
                    filterTransaction = _.filter(vm.dataFetch.dataFetch.checkouts, function(o) { return o.out == null; })
                }else if(vm.transactionState == 'all'){
                    filterTransaction = vm.dataFetch.dataFetch.checkouts
                }
                return filterTransaction
            },
            statusesFetch(){
                var vm = this
                return _.map(vm.arrayCollection.statuses.brands, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            productFetch(){
                var vm = this;
                return _.map(vm.arrayCollection.products.brands, function(data){
                        return _.pick(data, 'serial', 'assetSerial');
                })
            },
            brandsFetch(){
                var vm = this
                return _.map(vm.arrayCollection.model.brands, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            categoriesFetch(){
                var vm = this
                return _.map(vm.arrayCollection.categories.categories, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            descriptionsFetch(){
                var vm = this
                return _.map(vm.arrayCollection.descriptions.descriptions, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            locationsFetch(){
                var vm = this
                return _.map(vm.arrayCollection.locations.locations, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            manufacturesFetch(){
                var vm = this
                return _.map(vm.arrayCollection.manufactures.brands, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            validateSerialQuantity(){
                var vm = this
                return _.isEmpty(vm.dataFetch.dataFetch.serial) ?  false : true
            },
            removeProduct(){
            var vm = this
                return _.filter(vm.productFetch, function(num){
                    return num.serial !== vm.dataFetch.dataFetch.serialClone
                })
            },
            validateDuplicate(){
                var vm = this;
                var has = false
                var pluckSerial = _.compact(_.map(vm.removeProduct, 'serial'))
                _.includes(pluckSerial,vm.dataFetch.dataFetch.serial ) ? has = true : has = false

                return  vm.hasError = has
            },
            validateDuplicateAssetSerial(){
                var vm = this;
                var has = false
                var pluckAssetSerial = _.compact(_.map(vm.removeProduct, 'assetSerial'));
                _.includes(pluckAssetSerial,vm.dataFetch.dataFetch.assetSerial ) ? has = true : has = false

                return   has
            }
        },
        methods:{
		fetchNew(newData, type){
            var vm = this;
			var pickData = _.pick(newData, ['id', 'name'])
		    if(type == "Status"){
		        statusState.dataReceive(pickData.id, pickData.name)
		    }
		},
        objectReceive(event){
            var vm = this
            var found = _.find(vm.arrayCollection.categories.categories, function(o){
                return o.id == event
            })

            vm.dataFetch.dataFetch.photo = _.isEmpty(found) ? '/images/images.jpg' :found.photo.name
        },
        deleteData(){
        var vm = this
            axios.delete('../../api/products/' + vm.$route.params.id).then(response => {
                 NotyAlert.notyAlert('success', 'Tech Item has deleted')
                 this.$router.push({ name: 'products' })
            })
            .catch(function (error) {
                NotyAlert.notyAlert('error', 'something went wrong');
            })
        },
        postData(){
            var vm = this;
             var pick = _.pick(vm.dataFetch.dataFetch, 'serial', 'type','quantity','status','manufacture','description','location','category','model', 'assetSerial', 'quantityClone');
             var object = {
                 serial:pick.serial,
                 type:pick.type,
                 quantity:pick.quantity,
                 status_id:pick.status.id,
                 manufacture_id:pick.manufacture.id,
                 description_id:pick.description.id,
                 location_id:pick.location.id,
                 category_id:pick.category.id,
                 photo:pick.category,
                 brand_id:pick.model.id,
                 type:pick.type,
                 _token: vm.laravelToken,
                 assetSerial:pick.assetSerial,
                 quantityClone:pick.quantityClone
             };
            axios.patch('../../api/products/' + vm.$route.params.id, {products: object }).then(response => {
                 NotyAlert.notyAlert('success', response.data.data.message)
            })
            .catch(function (error) {

                NotyAlert.notyAlert('error', 'something went wrong');
            })
        },

            fetchAll(dataId){
                var that = this;
                that.loading =  true;
                var data = dataId
                //fetchAll.fetchAll()
                fetchData.fetchData('../../api/products/' + data + '/edit')





            },
        }
    }



</script>
