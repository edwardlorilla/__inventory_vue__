<template>
    <div>
        <loader v-if="loading"></loader>
        <div   v-else class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">

                    <div class="panel panel-default">
                        <div class="panel-heading">Edit {{dataFetch.serial}}</div>


                        <div  class="panel-body" >
                                <input name="_token" type="hidden" :value="laravelToken"/>
                            <div class="form-group"
                                 :class="{'has-error' : validateDuplicate } "
                            >
                                <label>Serial</label>
                                <input type="text"
                                       class="form-control"
                                       v-model="dataFetch.serial"
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
                                       v-model="dataFetch.assetSerial"
                                       placeholder="Asset Serial"
                                       @keydown.enter.prevent = 'postData'
                                >
                                <span  :class="{'hidden' : !(validateDuplicateAssetSerial)}"
                                       class="help-block">Duplicated Asset Serial Entry</span>
                            </div>
                            <div class="form-group">
                                <label>Quantity</label>
                                <input v-model.number="validateSerialQuantity ? dataFetch.quantity = 1 : dataFetch.quantity"
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
                                         :options="arrayCollection.manufacture"
                                         required
                                         :urlName="arrayUrl.manufacture"
                                         v-model="dataFetch.manufacture.id"
                                         @modelId = "dataFetch.manufacture.id = $event"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <select2 style="width: 100%;" :options="arrayCollection.description"
                                         required
                                         :urlName="arrayUrl.description"
                                         v-model="dataFetch.description.id"
                                         @modelId = "dataFetch.description.id = $event"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Location</label>
                                <select2 style="width: 100%;" :options="arrayCollection.location"
                                         required
                                         :urlName="arrayUrl.location"
                                         v-model="dataFetch.location.id"
                                         @modelId = "dataFetch.location.id = $event"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Category</label>
                                <select2 style="width: 100%;" :options="arrayCollection.category"
                                         required
                                         :urlName="arrayUrl.category"
                                         v-model="dataFetch.category.id"
                                         @modelId = "dataFetch.category.id = $event"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Model</label>
                                <select2 style="width: 100%;" :options="arrayCollection.model"
                                         required
                                         :urlName="arrayUrl.model"
                                         v-model="dataFetch.model.id"
                                         @modelId = "dataFetch.model.id = $event"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                            </div>
                            <div class="form-group">
                                <label>Status</label>
                                <select  class="form-control" v-model="dataFetch.status" >
                                    <option value="1">Working</option>
                                    <option value="0">Defective</option>
                                </select>
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
                                >Update {{dataFetch.serial}}</button>
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
    export default{
        components:{
            Select2, Loader
        },
        data(){
            return{
                loading: false,
                dataFetch: {
                },
                hasError: false,
                arrayUrl:{
                    manufacture:"../../api/manufactures",
                    description:"../../api/descriptions",
                    location:'',
                    category:"../../api/categories",
                    model:"../../api/brands",
                },
                arrayCollection:{
                    manufacture:[],
                    description:[],
                    location:[],
                    category:[],
                    model:[],
                    product:[]

                },
                laravelToken: window.Laravel.csrfToken,

            }
        },
        mounted(){
            this.fetchAll(this.$route.params.id)
            //this.fetchData(this.$route.params.id)
        },
        computed:{

            validateSerialQuantity(){
                var vm = this
                return _.isEmpty(vm.dataFetch.serial) ?  false : true
            },
            removeProduct(){
            var vm = this
                return _.filter(this.arrayCollection.product, function(num){
                    return num.serial !== vm.dataFetch.serialClone
                })
            },
            validateDuplicate(){
                var vm = this;
                var has = false
                var pluckSerial = _.compact(_.map(vm.removeProduct, 'serial'))
                _.includes(pluckSerial,vm.dataFetch.serial ) ? has = true : has = false

                return  vm.hasError = has
            },
            validateDuplicateAssetSerial(){
                var vm = this;
                var has = false
                var pluckAssetSerial = _.compact(_.map(vm.removeProduct, 'assetSerial'));
                _.includes(pluckAssetSerial,vm.dataFetch.assetSerial ) ? has = true : has = false

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
             var pick = _.pick(vm.dataFetch, 'serial', 'quantity','status','manufacture.id','description.id','location.id','category.id','model.id', 'assetSerial');
             var object = {
                 serial:pick.serial,
                 quantity:pick.quantity,
                 status:pick.status,
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
                axios.all([
                    axios.get('../../api/brands'),
                    axios.get('../../api/categories'),
                    axios.get('../../api/descriptions'),
                    axios.get('../../api/manufactures'),
                    axios.get('../../api/locations'),
                    axios.get('../../api/products'),
                    axios.get('../../api/products/' + dataId + '/edit')
                  ])
                  .then(axios.spread(function (dataBrands,dataCategories,dataDescription,dataManufactures,dataLocations, dataProducts, response ) {
                    that.loading = false
                    that.arrayCollection.model =_.map(dataBrands.data.brands, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                    that.arrayCollection.category =_.map(dataCategories.data.categories, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                    that.arrayCollection.description = _.map(dataDescription.data.descriptions, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                    that.arrayCollection.manufacture =  _.map(dataManufactures.data.manufactures, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                    that.arrayCollection.location =_.map(dataLocations.data.locations, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                    that.arrayCollection.product =_.map(dataProducts.data.products, function(data){
                        return _.pick(data, 'serial', 'assetSerial');
                        })

                    var pick = _.pick(response.data.data,
                    'id', 'quantity','serial', 'assetSerial','manufacture','description','location','category',
                    'brand', 'status' );
                    that.dataFetch =  {
                        serial:pick.serial,
                        assetSerial:pick.assetSerial,
                        quantity:pick.quantity,

                        manufacture:{
                            id:pick.manufacture ? pick.manufacture.id : null,
                            text: pick.manufacture ? pick.manufacture.name : null
                        },
                        description:{
                            id: pick.description ? pick.description.id : null,
                            text:pick.description ? pick.description.name : null
                        },
                        location:{
                            id: pick.location ? pick.location.id : null,
                            text: pick.location ? pick.location.name : null
                        },
                        category:{
                            id:pick.category ? pick.category.id : null,
                            text:pick.category ? pick.category.name : null,
                        },
                        model:{
                            id:pick.brand ? pick.brand.id : null,
                            text:pick.brand ? pick.brand.name : null
                        },
                        status: pick.status,
                        serialClone: pick.serial,
                        assetSerialClone: pick.assetSerial
                        }

                  }))
                  .catch(function (error) {
                        NotyAlert.notyAlert('error', 'something went wrong');
                    })
                  ;
            },
        }
    }

</script>
