<template>
    <div class="container-fluid">
        <loader v-if="loading"></loader>
        <div v-else class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading"></div>

                    <div class="panel-body">

                        <section class="panel">
                            <div class="panel panel-footer">
                                <header class="panel panel-default">
                                    <h3>Create Tech Item</h3>
                                </header>
                            </div>
                            <div class="panel panel-footer table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                    <th>Serial</th>
                                    <th>Asset Serial</th>
                                    <th>Status</th>
                                    <th>Quantity</th>
                                    <th>Model</th>
                                    <th>Categories</th>
                                    <th>Description</th>
                                    <th>Manufacture</th>
                                    <th>Location</th>

                                    <th style="text-align: center;">
                                        <a v-hotkey="addTd" v-on:click="addRow" class="addRow">
                                            <i class="glyphicon glyphicon-plus"></i>
                                        </a>
                                        <vue-xlsx-table @on-select-file="handleSelectedFile"><i class="glyphicon glyphicon-open"></i></vue-xlsx-table>
                                    </th>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(addTd, index) in addRows">
                                        <td :class="{'has-error' : addTd.hasError}">
                                            <input class="form-control"
                                                   type="text"
                                                   placeholder="Serial"
                                                   v-model="addTd.serial"
                                                   @change = 'validateDuplicate(index)'
                                        />
                                            <span :class="{'hidden' : !addTd.hasError}"
                                                  class="help-block">Duplicated Entry</span>
                                        </td>
                                        <td :class="{'has-error' : addTd.hasAssetError}">
                                            <input class="form-control"
                                                   type="text"
                                                   placeholder="asset serial"
                                                   v-model="addTd.assetSerial"
                                                   @change = 'validateDuplicateAssetSerial(index)'
                                        />
                                            <span  :class="{'hidden' : !addTd.hasAssetError}"
                                                  class="help-block">Duplicated Asset Serial Entry</span>
                                        </td>

                                        <td>
                                            <select class="form-control"
                                                    v-model="addTd.status">
                                                <option value="1">
                                                    Working
                                                </option>
                                                <option value="0">
                                                    Defective
                                                </option>
                                            </select>
                                        </td>
                                        <td>
                                            <input  class="form-control input-sm" min='1'

                                                   v-model.number="addTd.quantity ? 1 : addTd.quantity"
                                                    :disabled= "addTd.disabledQuantity"
                                                   type="number"
                                                    placeholder="Quantity"
                                                   required>
                                        </td>
                                        <td>
                                            <!--<div v-if="addTd.showModel">
                                                <add
                                                        @close="addTd.showModel = false"
                                                        urlName="../api/brands"
                                                        @fetch="fetchModel"
                                                >
                                                </add>

                                            </div>-->
                                            <div >

                                                <!--<select class="form-control input-sm"
                                                        v-model="addTd.model">
                                                    <option v-for="option in brands" v-bind:value="option.id">
                                                        {{ option.name }}
                                                    </option>
                                                </select>-->
                                                <!--<span class="input-group-btn">
                                                                <button class="btn btn-sm btn-primary"
                                                                        @click.prevent="addTd.showModel =! addTd.showModel">
                                                                        <i class="glyphicon glyphicon-plus"></i>
                                                                </button>
                                                            </span>-->
                                                <select2 :options="brands"
                                                         urlName="../api/brands"
                                                         name="model[]"
                                                         v-model.number="addTd.model"
                                                         required
                                                         @modelId="addTd.model = $event"
                                                >
                                                    <option disabled value="0">Select one</option>
                                                </select2>
                                            </div>
                                        </td>
                                        <td>
                                           <!-- <div v-if="addTd.showCategory">
                                                <add
                                                        @close="addTd.showCategory = false"
                                                        urlName="../api/categories"
                                                        @fetch="fetchCategory"
                                                >
                                                </add>
                                            </div>-->
                                            <div  >
                                                <!--<span class="input-group-btn">
                                                                <button class="btn btn-sm btn-primary"
                                                                        @click.prevent="addTd.showCategory =! addTd.showCategory">
                                                                    <i class="glyphicon glyphicon-plus"></i>
                                                                </button>
                                                            </span>-->
                                                <select2 :options="categories"
                                                         name="category[]"
                                                         v-model.number="addTd.category"
                                                         urlName="../api/categories"
                                                         required
                                                         @modelId="addTd.category = $event"
                                                >
                                                    <option disabled value="0">Select one</option>
                                                </select2>
                                            </div>
                                        </td>
                                        <td>
                                            <!--<div v-if=addTd.showDescription>
                                                <add
                                                        @close="addTd.showDescription = false"
                                                        urlName="../api/descriptions"
                                                        @fetch="fetchDescriptions"
                                                >
                                                </add>
                                            </div>-->
                                            <div>

                                                <!--<select class="form-control"
                                                        v-model="addTd.description">
                                                    <option v-for="option in descriptions"
                                                            v-bind:value="option.id">
                                                        {{ option.name }}
                                                    </option>
                                                </select>-->
                                               <!-- <span class="input-group-btn">
                                                                <button class="btn btn-sm btn-primary"
                                                                        @click.prevent="addTd.showDescription =! addTd.showDescription">
                                                                    <i class="glyphicon glyphicon-plus"></i>
                                                                </button>
                                                            </span>-->
                                                <select2 :options="descriptions"
                                                         name="description[]"
                                                         urlName="../api/descriptions"
                                                         v-model.number="addTd.description"
                                                         @modelId="addTd.description = $event"
                                                >
                                                    <option disabled value="0">Select one</option>
                                                </select2>
                                            </div>

                                        </td>
                                        <td>
                                           <!-- <div v-if="addTd.showManufacture">
                                                <add
                                                        @close="addTd.showManufacture = false"
                                                        urlName="../api/manufactures"
                                                        @fetch="fetchManufacture"
                                                >
                                                </add>
                                            </div>-->
                                            <div>

                                                <!--<select class="form-control"
                                                        v-model="addTd.manufacture">
                                                    <option v-for="option in manufactures"
                                                            v-bind:value="option.id">
                                                        {{ option.name }}
                                                    </option>
                                                </select>-->
                                               <!-- <span class="input-group-btn">
                                                                <button class="btn btn-sm btn-primary"
                                                                        @click.prevent="addTd.showManufacture =! addTd.showManufacture">
                                                                    <i class="glyphicon glyphicon-plus"></i>
                                                                </button>
                                                            </span>-->
                                                <select2 :options="manufactures" name="manufactures[]"
                                                         urlName="../api/manufactures"
                                                         required
                                                         v-model.number="addTd.manufacture"
                                                         @modelId="addTd.manufacture = $event"
                                                >
                                                    <option disabled value="0">Select one</option>
                                                </select2>
                                            </div>
                                        </td>
                                        <td>
                                            <!--location-->
                                            <select2 :options="locations" name="location[]"
                                                     required
                                                     v-model="addTd.location">
                                                <option disabled value="0">Select one</option>
                                            </select2>
                                        </td>
                                        <td>
                                            <button @click.prevent="removeTD(index)"
                                                    class="btn btn-sm btn-danger">
                                                <i class="glyphicon glyphicon-remove"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <button class="btn btn-primary pull-right" :disabled="disableAddSerial || disabledButton"
                                        @click="addSerial">Add Serial
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="noty/lib/noty.css"></style>
<script>
    import Loader from './../Loader/Loader.vue';
    import Select2 from './../Transfers/Select2.vue';
    import Add from './../Transfers/Add.vue';
    import NotyAlert from './../Noty/notyAlert';
    export default {

        components:{
            'select2': Select2,
            'add':Add,
            'loader': Loader
        },
        data() {
            return{
                loading : false,
                addRows: [],
                brands:[],
                categories:[],
                products:[],
                descriptions:[],
                manufactures:[],
                locations:[],
                showAddSerial: false,
                selected:[],
                selectAsset: [],
                disabledButton: false
            }
        },
        mounted() {
            this.fetchAll();
        },
        computed:{

            addTd(){
                return {
                    enter : this.addRow,
                    esc: this.deleteRow,

                }
            },
            disableAddSerial(){
                var vm = this
                return _.isEmpty(vm.addRows)
            },
        },
        methods:{
            handleSelectedFile (convertedData) {
                var vm = this
                axios.post('../api/products/imports', {products :convertedData.body}).then(response => {
                    vm.fetchAll()
                    _.forEach(response.data, function(value) {
                      vm.addRows.push({
                            serial: value.serial,
                            quantity: value.quantity,
                            status:1,
                            model: value.brand_id,
                            category:value.category_id,
                            description: value.description_id,
                            manufacture: value.manufacture_id,
                            location:1,
                            assetSerial: value.assetSerial,
                        })
                    });
                }).
                catch(function (error) {
                })
            },
            validateDuplicateAssetSerial(index){
                var vm = this
                var product = _.map(vm.addRows, 'assetSerial')
                var pluckProduct = _.map(vm.products, 'assetSerial')
                var intersect = _.intersection(product, vm.selectAsset)
                vm.selectAsset = intersect
                if (_.includes(vm.selectAsset, vm.addRows[index].assetSerial)) {
                    console.log('Duplicated Entry')
                    this.addRows[index].hasAssetError = true
                }else{
                    this.selectAsset = intersect
                    this.selectAsset.push(this.addRows[index].assetSerial)
                    this.addRows[index].hasAssetError = false
                }
            },
            validateDuplicate(index){
                var vm = this
                var product = _.map(vm.addRows, 'serial')
                var pluckProduct = _.map(vm.products, 'text')
                var intersect = _.intersection(product, vm.selected)
                this.selected = intersect


                //quantity Check
                if(!_.isEmpty(vm.addRows[index].serial)){
                   vm.addRows[index].quantity = 1
                   vm.addRows[index].disabledQuantity = true
                }else{
                    vm.addRows[index].disabledQuantity = false
                }

                //validate if serial exist and validate if duplicate or not
                if (_.includes(vm.selected, vm.addRows[index].serial) || _.includes(pluckProduct, vm.addRows[index].serial)) {
                    console.log('Duplicated Entry')
                    vm.disabledButton = true
                    this.addRows[index].hasError = true
                }else{
                    this.selected = intersect
                    this.selected.push(this.addRows[index].serial)
                    this.addRows[index].hasError = false
                    vm.disabledButton = false
                }
            },
            deleteRow(){
                this.addRows.pop()
            },
            addSerial: function () {
                var addRows = _.map(this.addRows, function(num){
                    return  _.pick(num, ['quantity','serial','manufacture','description','location','category','model', 'status', 'assetSerial', 'quantity']);

                })
                axios.post('../api/products', {products :addRows}).then(response => {
                    this.$router.push({name:'products'})
                    NotyAlert.notyAlert('success', 'Tech Item has deleted')
                }).
                catch(function (error) {
                    NotyAlert.notyAlert('error', 'something went wrong');
                })
            },

            addRow() {
                this.addRows.push({
                    product:'',
                    serial: null,
                    quantity: 1,
                    status:1,
                    model:null,
                    category:null,
                    description:null,
                    manufacture:null,
                    location:null,
                    assetSerial:null,

                    disabledQuantity:false,

                    createModel: '',
                    createCategory: '',
                    createDescription: '',
                    createManufacture: '',
                    createSerial:'',

                    showAddSerial:false,
                    showModel: false,
                    showCategory: false,
                    showDescription: false,
                    showManufacture: false,

                    hasAssetError:false,
                    hasError: false,
                    maxQuantity: 0,
                });
            },
            removeTD(index){
                this.addRows.splice(index, 1)
                var vm = this
                var product = _.map(vm.addRows, 'product')
                var intersect = _.intersection(product, vm.selected)
                this.selected = intersect
            },
            fetchAll(){
                var that = this;
                that.loading =  true;
                axios.all([
                    axios.get('../api/brands'),
                    axios.get('../api/categories'),
                    axios.get('../api/descriptions'),
                    axios.get('../api/manufactures'),
                    axios.get('../api/locations'),
                    axios.get('../api/products')
                  ])
                  .then(axios.spread(function (dataBrands,dataCategories,dataDescription,dataManufactures,dataLocations, dataProducts ) {
                    that.loading = false
                    that.brands =_.map(dataBrands.data.brands, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                    that.categories =_.map(dataCategories.data.categories, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                    that.descriptions = _.map(dataDescription.data.descriptions, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                    that.manufactures =  _.map(dataManufactures.data.manufactures, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                    that.locations =_.map(dataLocations.data.locations, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                    that.products = _.map(dataProducts.data.products, function(data){
                        var pick = _.pick(data, 'serial', 'id', 'quantity','status','manufacture.id','description.id','location.id','category.id','brand.id', 'assetSerial'  );
                        var object = {
                            id:pick.id,
                            text:pick.serial,
                            quantity:pick.quantity,
                            status:pick.status,
                            manufacture:pick.manufacture.id,
                            description:pick.description.id,
                            location:pick.location.id,
                            category:pick.category.id,
                            model:pick.brand.id,
                            assetSerial:pick.assetSerial}
                        return object})

                  }));
            }
        }
    }



</script>
