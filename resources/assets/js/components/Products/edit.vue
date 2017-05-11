<template>
    <div>
        <loader v-if="loading"></loader>
        <div   v-else class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">

                    <div class="panel panel-default">
                        <div class="panel-heading">Edit {{dataFetch.serial}}</div>


                        <div  class="panel-body" >
                            <form id="updateData">
                                <input name="_token" type="hidden" :value="laravelToken"/>
                            <div v-for="(data, index, key) in dataFetch"
                                v-if="!(key === 8)"
                                 :class="{'has-error' : (validateDuplicate) && (key === 0)}"
                                 class="form-group"
                            >

                                <label for="index">{{index}}</label>
                                <input v-if="!(typeof dataFetch[index] === 'object' || key ===  7 || key === 1)"
                                       type="text"
                                       class="form-control"
                                       v-model="dataFetch[index]"
                                       id="index"
                                >
                                <span v-if="key === 0" id="helpBlock2" :class="{'hidden' : !(validateDuplicate)}"
                                      class="help-block">Duplicated Entry</span>
                                <input v-else-if="key === 1"
                                       v-model.number="dataFetch[index]"
                                       min="1"
                                       type="number"
                                       class="form-control"
                                >
                                <select2 style="width: 100%;" v-else-if="(typeof dataFetch[index] === 'object')" v-cloak :options="arrayCollection[index]"
                                         required
                                         :urlName="arrayUrl[index]"
                                         v-model="dataFetch[index].id"
                                         @modelId = "dataFetch[index].id = $event"
                                >
                                    <option disabled value="0">Select one</option>
                                </select2>
                                <select  class="form-control" v-else v-model="dataFetch[index]">
                                    <option value="1">Working</option>
                                    <option value="0">Defective</option>
                                </select>


                            </div>
                            </form>
                        </div>
                        <div  class="panel-footer" >
                            <button class="btn btn-primary" disabled="validateDuplicate" @click="postData">Update {{dataFetch.serial}}</button>
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
    import Noty from 'noty';
    export default{
        components:{
            Select2, Loader
        },
        data(){
            return{
                loading: false,
                dataFetch: {},
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
            this.fetchAll(),
            this.fetchData(this.$route.params.id)
        },
        computed:{
            removeProduct(){
            var vm = this
                return _.filter(this.arrayCollection.product, function(num){
                    return num !== vm.dataFetch.serialClone
                })
            },
            validateDuplicate(){
                var vm = this;
                var has = false
                if(_.includes(vm.removeProduct,vm.dataFetch.serial )) {
                    //vm.notyAlert('warning', 'Duplicate Entry');
                    has = true
                }else{
                    has = false
                }

                return  vm.hasError = has
            },
        },
        methods:{
        postData(){
            var vm = this;
             var pick = _.pick(vm.dataFetch, 'serial', 'quantity','status','manufacture.id','description.id','location.id','category.id','model.id');
             var object = {
                 serial:pick.serial,
                 quantity:pick.quantity,
                 status:pick.status,
                 manufacture:pick.manufacture.id,
                 description:pick.description.id,
                 location:pick.location.id,
                 category:pick.category.id,
                 model:pick.model.id,
                 _token: vm.laravelToken
             };
            axios.patch('../../api/products/' + vm.$route.params.id, {products: object }).then(response => {
                console.log(response)
                vm.notyAlert('success', response.data.data.message)
            })
        },
        notyAlert(type, message ){
            new Noty({
                type: type,
                layout: 'topRight',
                theme: 'bootstrap-v3',
                text: message,
                timeout: 5000,
                progressBar: true,
                closeWith: ['click', 'button'],
                animation: {
                    open: function (promise) {
                        var n = this;
                        Velocity(n.barDom, {
                            left: 450,
                            scaleY: 2
                        }, {
                            duration: 0
                        });
                        Velocity(n.barDom, {
                            left: 0,
                            scaleY: 1
                        }, {
                            easing: [ 8, 8 ],
                            complete: function() {
                                promise(function(resolve) {
                                    resolve();
                                })
                            }
                        });
                    },
                    close: function (promise) {
                        var n = this;
                        Velocity(n.barDom, {
                            left: '+=-50'
                        }, {
                            easing: [ 8, 8, 2],
                            duration: 350
                        });
                        Velocity(n.barDom, {
                            left: 450,
                            scaleY: .2,
                            height: 0,
                            margin: 0
                        }, {
                            easing: [ 8, 8 ],
                            complete: function () {
                                promise(function(resolve) {
                                    resolve();
                                })
                            }
                        });
                    }
                }
            }).show();
        },
        fetchData(dataId){
            var that = this;

             axios.get('../../api/products/' + dataId + '/edit').then(function(response){
                var pick = _.pick(response.data.data,
                'id', 'quantity','serial','manufacture','description','location','category',
                'brand', 'status' );
                var objectProduct = {
                serial:pick.serial,
                quantity:pick.quantity,

                manufacture:{
                    id:pick.manufacture.id,
                    text: pick.manufacture.name
                },
                description:{
                    id: pick.description.id,
                    text:pick.description.name
                },
                location:{
                    id: pick.location.id,
                    text: pick.location.name
                },
                category:{
                    id:pick.category.id,
                    text:pick.category.name,
                },
                model:{
                    id:pick.brand.id,
                    text:pick.brand.name
                },
                status: pick.status,
                serialClone: pick.serial
                };
                that.dataFetch =  objectProduct
             })
            },
            fetchAll(){
                var that = this;
                that.loading =  true;
                axios.all([
                    axios.get('../../api/brands'),
                    axios.get('../../api/categories'),
                    axios.get('../../api/descriptions'),
                    axios.get('../../api/manufactures'),
                    axios.get('../../api/locations'),
                    axios.get('../../api/products')
                  ])
                  .then(axios.spread(function (dataBrands,dataCategories,dataDescription,dataManufactures,dataLocations, dataProducts ) {
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
                    that.arrayCollection.product =_.map(dataProducts.data.products, 'serial')

                  }));
            },
        }
    }

</script>
