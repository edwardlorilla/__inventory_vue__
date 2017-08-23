<template>
    <div class="container-fluid">
        <div class="row">
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
                                    <th>Type</th>
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
                                        <a v-hotkey="addTd" v-on:click="addRow" class="addRow"
                                        >
                                            <i class="glyphicon glyphicon-plus"></i>
                                        </a>
                                        <vue-xlsx-table @on-select-file="handleSelectedFile"><i
                                                class="glyphicon glyphicon-open"></i></vue-xlsx-table>
                                    </th>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(addTd, index) in addRows">
                                        <td>
                                            <select class="form-control" v-model="addTd.type">
                                                 <option :value="1">Non-Consumable</option>
                                                 <option :value="0">Consumable</option>
                                            </select>
                                        </td>
                                        <td :class="{'has-error' : addTd.hasError}">
                                            <input class="form-control"
                                                   type="text"
                                                   :placeholder="addTd.type == 1 ? 'Serial' : 'Name'"
                                                   v-model="addTd.serial"
                                                   @change='validateDuplicate(index)'
                                            />
                                            <span :class="{'hidden' : !addTd.hasError}"
                                                  class="help-block">Duplicated Entry</span>
                                        </td>
                                        <td :class="{'has-error' : addTd.hasAssetError}">
                                            <input class="form-control"
                                                   type="text"
                                                   placeholder="asset serial"
                                                   v-model="addTd.assetSerial"
                                                   @change='validateDuplicateAssetSerial(index)'
                                            />
                                            <span :class="{'hidden' : !addTd.hasAssetError}"
                                                  class="help-block">Duplicated Asset Serial Entry</span>
                                        </td>

                                        <td>
                                            <select2 :options="statusesFetch"
                                                     urlName="../api/statuses"
                                                     name="action[]"
                                                     @modelId="addTd.status = $event.id"
                                                     v-model.number="addTd.status"
                                                     required
                                            >
                                                <option disabled value="0">Select one</option>
                                            </select2>
                                        </td>

                                        <td>
                                            <input class="form-control input-sm" min='1'
                                                   v-model.number="addTd.type ? addTd.quantity ? 1 : addTd.quantity :  addTd.quantity"

                                                   type="number"
                                                   placeholder="Quantity"
                                                   required>
                                        </td>
                                        <td>
                                            <select2 :options="brandsFetch"
                                                     urlName="../api/brands"
                                                     name="model[]"
                                                     v-model.number="addTd.model"
                                                     required
                                                     @modelId="addTd.model = $event.id"
                                            >
                                                <option disabled value="0">Select one</option>
                                            </select2>
                                        </td>
                                        <td>
                                            <select2 :options="categoriesFetch"
                                                     name="category[]"
                                                     v-model.number="addTd.category"
                                                     urlName="../api/categories"
                                                     required
                                                     @modelId="addTd.category = $event.id"
                                            >
                                                <option disabled value="0">Select one</option>
                                            </select2>
                                        </td>
                                        <td>
                                            <select2 :options="descriptionsFetch"
                                                     name="description[]"
                                                     urlName="../api/descriptions"
                                                     v-model.number="addTd.description"
                                                     @modelId="addTd.description = $event.id"
                                            >
                                                <option disabled value="0">Select one</option>
                                            </select2>
                                        </td>
                                        <td>
                                            <select2 :options="manufacturesFetch" name="manufactures[]"
                                                         urlName="../api/manufactures"
                                                         required
                                                         v-model.number="addTd.manufacture"
                                                         @modelId="addTd.manufacture = $event.id"
                                                >
                                                    <option disabled value="0">Select one</option>
                                                </select2>
                                        </td>
                                        <td>
                                            <!--location-->
                                            <select2 :options="locationsFetch" name="location[]"
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
                                <button class="btn btn-primary pull-right"
                                        :disabled="disableAddSerial || disabledButton"
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

    import brandState from './../Filtering/brandStates.js';
    import categoryState from './../Filtering/categoryStates.js';
    import descriptionState from './../Filtering/descriptionStates.js';
    import ManufacturesState from './../Filtering/ManufacturesStates.js';
    import LocationState from './../Filtering/locationState.js';
    import productState from './../Filtering/productStates.js';
    import statusState from './../Filtering/statusStates.js';
    import fetchAll from './../Filtering/fetchAll.js';
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
                brands:brandState.data,
                categories:categoryState.data,
                products:productState.data,
                descriptions:descriptionState.data,
                manufactures:ManufacturesState.data,
                statuses:statusState.data,
                locations:LocationState.data,
                showAddSerial: false,
                selected:[],
                selectAsset: [],
                disabledButton: false
            }
        },
        mounted() {
            //this.fetchAll();
        },
        computed:{
            typeDisabled(){
                var vm = this
                return vm.type == 0 ? true : false
            },
            brandsFetch(){
                var vm = this
                return _.map(vm.brands.brands, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            categoriesFetch(){
                var vm = this
                return _.map(vm.categories.categories, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            statusesFetch(){
                var vm = this
                return _.map(vm.statuses.brands, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            descriptionsFetch(){
                var vm = this
                return _.map(vm.descriptions.descriptions, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            locationsFetch(){
                var vm = this
                return _.map(vm.locations.locations, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            manufacturesFetch(){
                var vm = this
                return _.map(vm.manufactures.brands, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
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
            disableAddRow(){
                var vm = this
                return _.isEmpty(vm.locations.locations)
            },


        },
        methods:{
            handleSelectedFile (convertedData) {
                var vm = this
                var pluckProduct = _.map(vm.products.brands, 'assetSerial')
                axios.post('../api/products/imports', {products :convertedData.body}).then(response => {
                    vm.fetchAll()
                    _.forEach(response.data, function(value) {
                         vm.selectAsset.push(value.assetSerial)
                        vm.addRows.push({
                            serial: value.serial,
                            quantity: value.quantity,
                            status:1,
                            model: value.brand_id,
                            category:value.category_id,
                            description: value.description_id,
                            manufacture: value.manufacture_id,
                            location:1,
                            assetSerial:  value.assetSerial,
                        })
                    });
                }).
                catch(function (error) {
                })
            },
            validateDuplicateAssetSerial(index){
                var vm = this
                var product = _.map(vm.addRows, 'assetSerial')
                var pluckProduct = _.map(vm.products.brands, 'assetSerial')
                var intersect = _.intersection(product, vm.selectAsset)
                vm.selectAsset = intersect
                this.addRows[index].hasAssetError = false
                if (_.includes(vm.selectAsset, vm.addRows[index].assetSerial) || _.includes(pluckProduct, vm.addRows[index].assetSerial)) {
                    console.log('Duplicated Entry')
                    this.selectAsset = intersect
                    vm.selectAsset = _.compact(vm.selectAsset)
                    this.addRows[index].hasAssetError = true
                }
                else{
                    this.selectAsset = intersect
                    this.selectAsset.push(this.addRows[index].assetSerial)
                    vm.selectAsset = _.compact(vm.selectAsset)
                    this.addRows[index].hasAssetError = false
                }

            },
            validateDuplicate(index){
                var vm = this
                var product = _.map(vm.addRows, 'serial')
                var pluckProduct = _.map(vm.products.brands, 'serial')
                var intersect = _.intersection(product, vm.selected)
                this.selected = intersect


                //quantity Check
                if(!_.isEmpty(vm.addRows[index].serial)){
                   vm.addRows[index].quantity = 1
                   vm.selected = _.compact(vm.selected)
                   vm.addRows[index].disabledQuantity = true
                }
                else{
                    vm.selected = _.compact(vm.selected)
                    vm.addRows[index].disabledQuantity = false
                }

                //validate if serial exist and validate if duplicate or not
                if (_.includes(vm.selected, vm.addRows[index].serial) || _.includes(pluckProduct, vm.addRows[index].serial)) {
                    console.log('Duplicated Entry')
                    vm.disabledButton = true
                     vm.selected = _.compact(vm.selected)
                    this.addRows[index].hasError = true
                }else{
                    this.selected = intersect
                    this.selected.push(this.addRows[index].serial)
                     vm.selected = _.compact(vm.selected)
                    this.addRows[index].hasError = false
                    vm.disabledButton = false
                }
            },
            deleteRow(){
                this.addRows.pop()
                this.selectAsset.pop()
                this.selected.pop()
            },
            addSerial: function () {
                var addRows = _.map(this.addRows, function(num){
                    return  _.pick(num, ['quantity','serial','manufacture','description','location','category','model', 'status', 'assetSerial', 'quantity', 'type']);

                })
                axios.post('../api/products', {products :addRows}).then(response => {
                    this.$router.push({name:'products'})

                    NotyAlert.notyAlert('success', 'Tech Item has created')
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
                    status:null,
                    model:null,
                    category:null,
                    description:null,
                    manufacture:null,
                    location:null,
                    assetSerial:null,
                    type:1,
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

        }
    }






</script>
