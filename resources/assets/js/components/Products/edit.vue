<template>
    <div>
        <!--<loader v-if="loading"></loader>-->
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">

                    <div class="panel panel-default">
                        <div class="panel-heading">Edit {{dataFetch.dataFetch.serial}}</div>


                        <div  class="panel-body" >
                                <input name="_token" type="hidden" :value="laravelToken"/>
                            <div class="form-group"
                                 :class="{'has-error' : validateDuplicate } "
                            >
                                <label>Serial</label>
                                <input type="text"
                                       class="form-control"
                                       v-model="dataFetch.dataFetch.serial"
                                       placeholder="Serial"
                                       @keydown.enter.prevent = 'postData'
                                >
                                <span  :class="{'hidden' : !(validateDuplicate)}"
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
                                       @keydown.enter.prevent = 'postData'
                                >
                                <span  :class="{'hidden' : !(validateDuplicateAssetSerial)}"
                                       class="help-block">Duplicated Asset Serial Entry</span>
                            </div>
                            <div class="form-group">
                                <label>Quantity</label>
                                <input v-model.number="validateSerialQuantity ? dataFetch.dataFetch.quantity = 1 : dataFetch.dataFetch.quantity"
                                       min="1"
                                       type="number"
                                       :disabled ="validateSerialQuantity"
                                       class="form-control"
                                       @keydown.enter.prevent = 'postData'
                                >
                            </div>
                            <div class="form-group">
                                <label>Manufacture</label>
                                <select2 style="width: 100%;"
                                         :options="manufacturesFetch"
                                         required
                                         :urlName="arrayUrl.manufacture"
                                         v-model="dataFetch.dataFetch.manufacture.id"
                                         @modelId = "dataFetch.dataFetch.manufacture.id = $event"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <select2 style="width: 100%;" :options="descriptionsFetch"
                                         required
                                         :urlName="arrayUrl.description"
                                         v-model="dataFetch.dataFetch.description.id"
                                         @modelId = "dataFetch.dataFetch.description.id = $event"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Location</label>
                                <select2 style="width: 100%;" :options="locationsFetch"
                                         required
                                         :urlName="arrayUrl.location"
                                         v-model="dataFetch.dataFetch.location.id"
                                         @modelId = "dataFetch.dataFetch.id = $event"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Category</label>
                                <select2 style="width: 100%;" :options="categoriesFetch"
                                         required
                                         :urlName="arrayUrl.category"
                                         v-model="dataFetch.dataFetch.category.id"
                                         @modelId = "dataFetch.dataFetch.category.id = $event"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Model</label>
                                <select2 style="width: 100%;" :options="brandsFetch"
                                         required
                                         :urlName="arrayUrl.model"
                                         v-model="dataFetch.dataFetch.model.id"
                                         @modelId = "dataFetch.dataFetch.model.id = $event"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Status</label>
                                <select2 style="width: 100%;" :options="statusesFetch"
                                         required
                                         :urlName="arrayUrl.status"
                                         v-model="dataFetch.dataFetch.status.id"
                                         @modelId = "dataFetch.dataFetch.status.id = $event"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>



                        </div>
                        <div  class="panel-footer"  >
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

    import brandState from './../Filtering/brandStates.js';
    import categoryState from './../Filtering/categoryStates.js';
    import descriptionState from './../Filtering/descriptionStates.js';
    import ManufacturesState from './../Filtering/ManufacturesStates.js';
    import LocationState from './../Filtering/locationState.js';
    import productState from './../Filtering/productStates.js';
    import statusState from './../Filtering/statusStates.js';
    import fetchAll from './../Filtering/fetchAll.js';
    import fetchData from './../Filtering/fetchData.js';
    export default{
        components:{
            Select2, Loader
        },
        data(){
            return{
                loading: true,
                dataFetch: fetchData.data,
                hasError: false,
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

            }
        },
        mounted(){
            var vm = this
            vm.fetchAll(vm.$route.params.id)
        },
        computed:{
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
             var pick = _.pick(vm.dataFetch.dataFetch, 'serial', 'quantity','status.id','manufacture.id','description.id','location.id','category.id','model.id', 'assetSerial');
             var object = {
                 serial:pick.serial,
                 quantity:pick.quantity,
                 status:pick.status.id,
                 manufacture:pick.manufacture.id,
                 description:pick.description.id,
                 location:pick.location.id,
                 category:pick.category.id,
                 model:pick.model.id,
                 _token: vm.laravelToken,
                 assetSerial:pick.assetSerial
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
