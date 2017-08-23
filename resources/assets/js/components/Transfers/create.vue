<template>
    <div class="container-fluid">
        <loader v-if="loading"></loader>
        <div v-else class="row">
            <div :class="{'col-md-8 col-md-offset-2' : !showAddSerial, 'col-lg-12': showAddSerial}">
                <div class="panel panel-default">
                    <div class="panel-heading"></div>

                    <div class="panel-body">
                        <section class="panel">
                            <div class="panel panel-footer">

                                <header class="panel panel-default">
                                    <h3>{{showAddSerial ? 'Create Brand New Items CFAT' : 'Create Cfat'}}</h3>
                                </header>

                            </div>
                            <div class="panel panel-footer">
                                <form method="POST" action="../api/transfers" accept-charset="UTF-8">
                                    <input name="_token" type="hidden" :value="laravelToken"/>
                                    <div class="row">
                                        <div class="table-responsive">
                                            <table v-if="!loading" class="table table-bordered ">

                                                <thead>
                                                <th v-if="showAddSerial">Type</th>
                                                <th>Serial</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                                <th>Quantity</th>
                                                <th v-if="showAddSerial">Model</th>
                                                <th v-if="showAddSerial">Categories</th>
                                                <th v-if="showAddSerial">Description</th>
                                                <th v-if="showAddSerial">Manufacture</th>

                                                <th>Transfer Location</th>

                                                <th style="text-align: center;">
                                                    <a v-hotkey="addTd"
                                                       v-on:click="addRow" class="addRow">
                                                        <i class="glyphicon glyphicon-plus"></i>
                                                    </a>
                                                </th>
                                                </thead>

                                                <tbody>

                                                <tr v-for="(addTd, index) in addRows">
                                                    <td v-if="showAddSerial">
                                                        <select class="form-control input-sm" v-model.number="addTd.type" name="type[]" >
                                                            <option :value="1">Non-Consumable</option>
                                                            <option :value="0">Consumable</option>
                                                        </select>
                                                    </td>
                                                    <td :class="{'has-error' : addTd.hasError}">
                                                        <div v-if="showAddSerial" class="input-group input-group-sm">
                                                           <input
                                                                   id="inputSerial"
                                                                   class="form-control input-sm"
                                                                   required
                                                                   name="serial[]"
                                                                   type="text"
                                                                   v-model="addTd.createSerial"
                                                                   list="serial"
                                                                   @change="inputSerial(index)"
                                                           />
                                                            <span class="input-group-btn">

                                                                <button class="btn btn-sm btn-danger"
                                                                        @click.prevent="showAddSerial = false">
                                                                    <i class="glyphicon glyphicon-remove"></i>
                                                                    </button>
                                                                </span>
                                                            </div>
                                                        <div v-else class="input-group input-group-sm">
                                                            <span class="input-group-btn input-group-sm">
                                                                <button class="btn btn-primary btn-sm"
                                                                        @click.prevent="showAddSerial =! showAddSerial">
                                                                    <i class="glyphicon glyphicon-plus"></i>
                                                                    </button>
                                                                </span>
                                                            <select2 :options="productFetch"
                                                                     name="serial[]"
                                                                     required
                                                                     v-model.number="addTd.product"

                                                                     @selectValue = "validateDuplicate($event, index)"
                                                                     @selectQuantityValue = "addTd.maxQuantity = $event; addTd.quantity =1 "
                                                                     @selectData = "addTd.type = $event"
                                                                     @selectStatusValue = "addTd.status = $event; addTd.status == 0 ? addTd.action = 3 : addTd.action = 2"
                                                                     @selectManufactureValue ="addTd.manufacture = $event"
                                                                     @selectDescriptionValue = "addTd.description = $event"
                                                                     @selectLocationValue = "addTd.location = $event"
                                                                     @selectCategoryValue ="addTd.category = $event"
                                                                     @selectModelValue = "addTd.model = $event"
                                                            >
                                                                <option disabled value="0">Select one</option>
                                                                </select2>

                                                            </div>
                                                            <span id="helpBlock2" :class="{'hidden' : !addTd.hasError}"
                                                                  class="help-block">Duplicated Entry</span>
                                                    </td>
                                                    <td>
                                                        <select2  :options="statusesFetch"
                                                                  urlName="../api/statuses"
                                                                  name="action[]"
                                                                  v-model.number="addTd.status"
                                                                  required
                                                        >
                                                            <option disabled value="0">Select one</option>
                                                        </select2>
                                                    </td>
                                                    <td>

                                                        <select2  :options="actionsFetch"
                                                                  urlName="../api/actions"
                                                                  name="status[]"
                                                                  v-model.number="addTd.action"
                                                                  required
                                                        >
                                                            <option disabled value="0">Select one</option>
                                                        </select2>
                                                    </td>

                                                    <td v-if="showAddSerial">
                                                        <input name="quantity[]" class="form-control input-sm" min='1'
                                                               v-model.number="addTd.quantity"
                                                               type="number"
                                                               required>
                                                    </td>
                                                    <td v-else>
                                                        <input name="quantity[]" class="form-control input-sm" min='1'
                                                               v-model.number="addTd.quantity"
                                                               :max="addTd.maxQuantity"
                                                               type="number"
                                                               required>
                                                    </td>
                                                        <td v-if="showAddSerial">
                                                            <div>
                                                                <select2  :options="brandsFetch"
                                                                          urlName="../api/brands"
                                                                          name="model[]"
                                                                          v-model.number="addTd.model"
                                                                          required
                                                                >
                                                                    <option disabled value="0">Select one</option>
                                                                </select2>
                                                            </div>
                                                        </td>
                                                        <td v-if="showAddSerial">
                                                            <div>
                                                                <select2 :options="categoriesFetch"
                                                                         name="category[]"
                                                                         v-model.number="addTd.category"
                                                                         urlName="../api/categories"
                                                                         required
                                                                >
                                                                    <option disabled value="0">Select one</option>
                                                                </select2>
                                                            </div>
                                                        </td>
                                                        <td v-if="showAddSerial">
                                                            <div>
                                                                <select2 :options="descriptionsFetch"
                                                                         name="description[]"
                                                                         urlName="../api/descriptions"
                                                                         v-model.number="addTd.description"
                                                                >
                                                                    <option disabled value="0">Select one</option>
                                                                </select2>
                                                            </div>

                                                        </td>
                                                        <td v-if="showAddSerial">
                                                            <div>

                                                                <select2 :options="manufacturesFetch" name="manufactures[]"
                                                                         urlName="../api/manufactures"
                                                                         required
                                                                         v-model.number="addTd.manufacture">
                                                                    <option disabled value="0">Select one</option>
                                                                </select2>
                                                            </div>
                                                        </td>
                                                    <td>
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
                                            <p v-else>Sorry, no items found.</p>
                                            <button class="btn btn-primary pull-right" :disabled = "disableAddSerial" @click="addSerial">Add Serial
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <data-list idList ="serial" :lists="productFetch"></data-list>
    </div>
</template>

<script>
    import Loader from './../Loader/Loader.vue';
    import Select2 from './Select2.vue';
    import Add from './Add.vue';
    import NotyAlert from './../Noty/notyAlert';
    import DataList  from './DataList.vue';

    import brandState from './../Filtering/brandStates.js';
    import categoryState from './../Filtering/categoryStates.js';
    import statusState from './../Filtering/statusStates.js';
    import actionState from './../Filtering/actionStates.js';
    import descriptionState from './../Filtering/descriptionStates.js';
    import ManufacturesState from './../Filtering/ManufacturesStates.js';
    import LocationState from './../Filtering/locationState.js';
    import productState from './../Filtering/productStates.js';
    import fetchAll from './../Filtering/fetchAll.js';

    export default {
        name: 'createCFAT',
        components:{
            'select2': Select2,
            'add':Add,
            'loader':Loader,
            'data-list' : DataList,
        },

        data() {
            return{
                titleHead: 'Create CFAT',
                loading:false,
                laravelToken: window.Laravel.csrfToken,
                addRows: [],

                brands:brandState.data,
                categories:categoryState.data,
                products:productState.data,
                descriptions:descriptionState.data,
                manufactures:ManufacturesState.data,
                locations:LocationState.data,
                statuses:statusState.data,
                actions:actionState.data,
                showAddSerial: false,
                selected:[],
                disabledButton: false
            }
        },
        mounted() {
            document.title = this.titleHead
            //this.fetchAll();
        },
        computed:{
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
            statusesFetch(){
                var vm = this
                return _.map(vm.statuses.brands, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            actionsFetch(){
                var vm = this
                return _.map(vm.actions.brands, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
            },
            productFetch(){
                var vm = this;
                return _.map(vm.products.brands, function(data){
                        var pick = _.pick(data, 'serial','type', 'id', 'quantity','status','manufacture','description','location','category','model', 'assetSerial'  );
                        var object = {
                            id:pick.id,
                            text:pick.serial,
                            quantity:pick.quantity,
                            status:pick.status,
                            manufacture:pick.manufacture,
                            description:pick.description,
                            location:pick.location,
                            category:pick.category,
                            model:pick.model,
                            type:pick.type,
                            assetSerial:pick.assetSerial}
                        return object})
            },
            addTd(){
                return {
                    enter : this.addRow,
                    esc: this.deleteRow
                }
            },
            disableAddSerial(){
                var vm = this
                return _.isEmpty(vm.addRows)
            }
        },
        methods:{
            inputSerial(index){
                var vm = this;
                var datalist_id = document.getElementById("serial")
                var input_id = document.getElementById("inputSerial")
                console.log(datalist_id.options)
                for (var i=0;i<datalist_id.options.length;i++){
                    if (datalist_id.options[i].value == input_id.value)
                    {
                        var value = datalist_id.options[i].value;
                        var domain = document.domain
                        axios.get('../../api/transfers/getSerial/' + value ).then(response => {
                            vm.addRows[index].serial = response.data.data.serial,
                            vm.addRows[index].quantity = 1,
                            vm.addRows[index].type = response.data.data.type,
                            vm.addRows[index].status = response.data.data.status,
                            vm.addRows[index].action = response.data.data.status == 0 ?  3 :  2,
                            vm.addRows[index].model = response.data.data.brand_id,
                            vm.addRows[index].category = response.data.data.category_id,
                            vm.addRows[index].description=response.data.data.description_id,
                            vm.addRows[index].manufacture=response.data.data.manufacture_id,
                            vm.addRows[index].location=response.data.data.location_id,
                            vm.addRows[index].maxQuantity=response.data.data.quantity

                        })
                        break;
                    }
                }

            },
            validateDuplicate(event, index){
            var vm = this
            var product = _.map(vm.addRows, 'product')
            var pluckProduct = _.map(vm.products.brands, 'id')
            var intersect = _.intersection(product, vm.selected)
            this.selected = intersect
            if (_.includes(vm.selected, vm.addRows[index].product)) {
                console.log('Duplicated Entry')
                this.addRows[index].hasError = true
            }else{
                this.selected = intersect
                this.selected.push(this.addRows[index].product)
                this.addRows[index].hasError = false
            }
            console.log(pluckProduct)
            console.log(index)
            },

            deleteRow(){
                this.addRows.pop()
            },
            addSerial: function () {

            },
            addRow() {
                this.addRows.push({
                    product:'',
                    serial: null,
                    quantity: null,
                    status:null,
                    action: null,
                    model:'',
                    category:null,
                    description:null,
                    manufacture:null,
                    location:null,
                    type: 1,
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

                    hasError: false,
                    maxQuantity: 1,
                });
            },
            removeTD(index){
                this.addRows.splice(index, 1)
                var vm = this
                var product = _.map(vm.addRows, 'product')
                var intersect = _.intersection(product, vm.selected)
                this.selected = intersect
            },


        },
    }










</script>
