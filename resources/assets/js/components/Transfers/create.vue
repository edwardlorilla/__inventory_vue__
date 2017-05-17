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
                                                    <td :class="{'has-error' : addTd.hasError}">
                                                        <div v-if="showAddSerial" class="input-group input-group-sm">
                                                            <input class="form-control input-sm"
                                                                   required
                                                                   name="serial[]"
                                                                   type="text"
                                                                   v-model="addTd.createSerial"
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
                                                            <select2 :options="products"
                                                                     name="serial[]"
                                                                     required
                                                                     v-model.number="addTd.product"

                                                                     @selectValue = "validateDuplicate($event, index)"
                                                                     @selectQuantityValue = "addTd.maxQuantity = $event"
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
                                                        <select class="form-control input-sm"
                                                                v-model="addTd.status"
                                                                required
                                                                name="action[]"
                                                        >
                                                            <option value="1">
                                                                Working
                                                            </option>
                                                            <option value="0">
                                                                Defective
                                                            </option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select class="form-control input-sm"
                                                                v-model="addTd.action"
                                                                required
                                                                name="status[]"
                                                        >
                                                            <option value="1">
                                                                TRANSFER
                                                            </option>
                                                            <option value="2">
                                                                DEPLOY
                                                            </option>
                                                            <option value="3">
                                                                REPLACED
                                                            </option>

                                                        </select>
                                                    </td>
                                                    <td>
                                                        <input name="quantity[]" class="form-control input-sm" min='1'
                                                               v-model.number="addTd.quantity ? 1 : addTd.quantity"
                                                               :max="addTd.maxQuantity ? addTd.maxQuantity : addTd.maxQuantity == 0 ? 1 : 0  "
                                                               type="number"
                                                               required>
                                                    </td>
                                                        <td v-if="showAddSerial">
                                                            <div v-if="addTd.showModel" >
                                                                <add
                                                                    @close = "addTd.showModel = false"
                                                                    urlName="../api/brands"
                                                                    @fetch="fetchModel"
                                                                >
                                                                </add>

                                                            </div>
                                                            <div v-else class="input-group input-group-sm p">

                                                                <!--<select class="form-control input-sm"
                                                                        v-model="addTd.model">
                                                                    <option v-for="option in brands" v-bind:value="option.id">
                                                                        {{ option.name }}
                                                                    </option>
                                                                </select>-->
                                                                <span class="input-group-btn">
                                                                    <button class="btn btn-sm btn-primary"
                                                                            @click.prevent="addTd.showModel =! addTd.showModel">
                                                                            <i class="glyphicon glyphicon-plus"></i>
                                                                    </button>
                                                                </span>
                                                                <select2  :options="brands"
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
                                                            <div v-if="addTd.showCategory">
                                                                <add
                                                                        @close = "addTd.showCategory = false"
                                                                        urlName="../api/categories"
                                                                        @fetch="fetchCategory"
                                                                >
                                                                </add>
                                                            </div>
                                                            <div v-else class="input-group input-group-sm">

                                                                <!--<select class="form-control"
                                                                        v-model="addTd.category">
                                                                    <option v-for="option in categories"
                                                                            v-bind:value="option.id">
                                                                        {{ option.name }}
                                                                    </option>
                                                                </select>-->
                                                                <span class="input-group-btn">
                                                                    <button class="btn btn-sm btn-primary"
                                                                            @click.prevent="addTd.showCategory =! addTd.showCategory">
                                                                        <i class="glyphicon glyphicon-plus"></i>
                                                                    </button>
                                                                </span>
                                                                <select2 :options="categories"
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
                                                            <div v-if=addTd.showDescription>
                                                                <add
                                                                        @close = "addTd.showDescription = false"
                                                                        urlName="../api/descriptions"
                                                                        @fetch="fetchDescriptions"
                                                                >
                                                                </add>
                                                            </div>
                                                            <div v-else class="input-group input-group-sm">

                                                                <!--<select class="form-control"
                                                                        v-model="addTd.description">
                                                                    <option v-for="option in descriptions"
                                                                            v-bind:value="option.id">
                                                                        {{ option.name }}
                                                                    </option>
                                                                </select>-->
                                                                <span class="input-group-btn">
                                                                    <button class="btn btn-sm btn-primary"
                                                                            @click.prevent="addTd.showDescription =! addTd.showDescription">
                                                                        <i class="glyphicon glyphicon-plus"></i>
                                                                    </button>
                                                                </span>
                                                                <select2 :options="descriptions"
                                                                         name="description[]"
                                                                         urlName="../api/descriptions"
                                                                         v-model.number="addTd.description"
                                                                >
                                                                    <option disabled value="0">Select one</option>
                                                                </select2>
                                                            </div>

                                                        </td>
                                                        <td v-if="showAddSerial">
                                                            <div v-if="addTd.showManufacture">
                                                                <add
                                                                        @close = "addTd.showManufacture = false"
                                                                        urlName="../api/manufactures"
                                                                        @fetch="fetchManufacture"
                                                                >
                                                                </add>
                                                            </div>
                                                            <div v-else class="input-group input-group-sm">

                                                                <!--<select class="form-control"
                                                                        v-model="addTd.manufacture">
                                                                    <option v-for="option in manufactures"
                                                                            v-bind:value="option.id">
                                                                        {{ option.name }}
                                                                    </option>
                                                                </select>-->
                                                                <span class="input-group-btn">
                                                                    <button class="btn btn-sm btn-primary"
                                                                            @click.prevent="addTd.showManufacture =! addTd.showManufacture">
                                                                        <i class="glyphicon glyphicon-plus"></i>
                                                                    </button>
                                                                </span>
                                                                <select2 :options="manufactures" name="manufactures[]"
                                                                         urlName="../api/manufactures"
                                                                         required
                                                                         v-model.number="addTd.manufacture">
                                                                    <option disabled value="0">Select one</option>
                                                                </select2>
                                                            </div>
                                                        </td>
                                                    <td>
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

    </div>
</template>

<script>
    import Loader from './../Loader/Loader.vue';
    import Select2 from './Select2.vue';
    import Add from './Add.vue';
    import NotyAlert from './../Noty/notyAlert';
    export default {

        data() {
            return{
                titleHead: 'Create CFAT',
                loading:false,
                laravelToken: window.Laravel.csrfToken,
                addRows: [],
                brands:[],
                categories:[],
                products:[],
                descriptions:[],
                manufactures:[],
                locations:[],
                showAddSerial: false,
                selected:[],
                disabledButton: false
            }
        },
        mounted() {
            document.title = this.titleHead
            this.fetchAll();
        },
        computed:{
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
            validateDuplicate(event, index){
            var vm = this
            var product = _.map(vm.addRows, 'product')
            var pluckProduct = _.map(vm.products, 'id')
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
                    quantity: 1,
                    status:null,
                    action: null,
                    model:'',
                    category:null,
                    description:null,
                    manufacture:null,
                    location:null,

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
            },

        },
        components:{
            'select2': Select2,
            'add':Add,
            'loader':Loader
        },
    }










</script>
