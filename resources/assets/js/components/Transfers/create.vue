<template>
    <div class="container-fluid">
        <div class="row">
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
                                            <table class="table table-bordered ">

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
                                                                   name="serial[]"
                                                                   type="text"
                                                                   v-model="addTd.createModel"
                                                                    @change = 'getQuantity(addTd.product, index)'
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
                                                            <select2 :options="products"  name="serial[]"
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
                                                               v-bind:max="addTd.maxQuantity ? addTd.maxQuantity : addTd.maxQuantity == 0 ? 1 : 0  "
                                                               type="number"
                                                               required>
                                                    </td>
                                                    <td v-if="showAddSerial">
                                                        <div v-if="addTd.showModel" class="input-group input-group-sm">
                                                            <input class="form-control  input-sm"
                                                                   name="createModel[]"
                                                                   type="text"
                                                                   v-model="addTd.createModel"

                                                            />
                                                            <span class="input-group-btn">
                                                                <button class="btn btn-sm btn-primary"
                                                                        @click.prevent="createModelMethod(index)">
                                                                    <i class="glyphicon glyphicon-plus"></i>
                                                                </button>
                                                                <button class="btn btn-sm btn-danger"
                                                                        @click.prevent="addTd.showModel = false">
                                                                    <i class="glyphicon glyphicon-remove"></i>
                                                                </button>
                                                                </span>
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
                                                            <select2  :options="brands" name="model[]"
                                                                      v-model.number="addTd.model">
                                                                <option disabled value="0">Select one</option>
                                                            </select2>
                                                        </div>
                                                    </td>
                                                    <td v-if="showAddSerial">
                                                        <div v-if="addTd.showCategory"
                                                             class="input-group input-group-sm">
                                                            <input class="form-control input-sm"
                                                                   name="createCategory[]"
                                                                   type="text"
                                                                   v-model="addTd.createCategory"

                                                            />
                                                            <span class="input-group-btn">
                                                                <button class="btn btn-sm btn-primary"
                                                                        @click.prevent="createCategoryMethod(index)">
                                                                    <i class="glyphicon glyphicon-plus"></i>
                                                                </button>
                                                                <button class="btn btn-sm btn-danger"
                                                                        @click.prevent="addTd.showCategory = false">
                                                                    <i class="glyphicon glyphicon-remove"></i>
                                                                </button>
                                                            </span>
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
                                                            <select2 :options="categories" name="category[]"
                                                                     v-model.number="addTd.category">
                                                                <option disabled value="0">Select one</option>
                                                            </select2>
                                                        </div>
                                                    </td>
                                                    <td v-if="showAddSerial">
                                                        <div v-if=addTd.showDescription
                                                             class="input-group input-group-sm">
                                                            <input class="form-control input-sm"
                                                                   name="createDescription[]"
                                                                   type="text"
                                                                   v-model="addTd.createDescription"

                                                            />
                                                            <span class="input-group-btn">
                                                                    <button class="btn btn-sm btn-primary"
                                                                            @click.prevent="createDescriptionMethod(index)">
                                                                        <i class="glyphicon glyphicon-plus"></i>
                                                                    </button>
                                                                    <button class="btn btn-sm btn-danger"
                                                                            @click.prevent="addTd.showDescription = false">
                                                                        <i class="glyphicon glyphicon-remove"></i>
                                                                    </button>
                                                            </span>
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
                                                            <select2 :options="descriptions" name="description[]"
                                                                     v-model.number="addTd.description">
                                                                <option disabled value="0">Select one</option>
                                                            </select2>
                                                        </div>

                                                    </td>
                                                    <td v-if="showAddSerial">
                                                        <div v-if="addTd.showManufacture"
                                                             class="input-group input-group-sm">
                                                            <input class="form-control input-sm"
                                                                   name="createManufacture[]"
                                                                   type="text"
                                                                   v-model="addTd.createManufacture"

                                                            />
                                                            <span class="input-group-btn">
                                                                    <button class="btn btn-sm btn-primary"
                                                                            @click.prevent="createManufactureMethod(index)">
                                                                        <i class="glyphicon glyphicon-plus"></i>
                                                                    </button>
                                                                    <button class="btn btn-sm btn-danger"
                                                                            @click.prevent="addTd.showManufacture = false">
                                                                        <i class="glyphicon glyphicon-remove"></i>
                                                                    </button>
                                                            </span>
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
                                                                     v-model.number="addTd.manufacture">
                                                                <option disabled value="0">Select one</option>
                                                            </select2>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <select2 :options="locations" name="location[]"
                                                                 v-model.number="addTd.location">
                                                            <option disabled value="0">Select one</option>
                                                        </select2>
                                                    </td>
                                                    <td>
                                                        <button @click.prevent="addRows.splice(index, 1)"
                                                                class="btn btn-sm btn-danger">
                                                            <i class="glyphicon glyphicon-remove"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <button class="btn btn-primary pull-right" @click="addSerial">Add Serial
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
    import Select2 from './Select2.vue';
    export default {

        data() {
            return{
                laravelToken: window.Laravel.csrfToken,
                addRows: [],
                brands:[],
                categories:[],
                products:[],
                descriptions:[],
                manufactures:[],
                locations:[],
                showAddSerial: false,
                selected:[]
            }
        },
        mounted() {
            this.fetchProducts();
            this.fetchModel();
            this.fetchCategory();
            this.fetchDescriptions();
            this.fetchManufacture();
            this.fetchLocation();
        },
        computed:{
            addTd(){
                return {
                    enter : this.addRow,
                    esc: this.deleteRow
                }
            }
        },
        methods:{
            validateDuplicate(event, index){
            var vm = this
            var product = _.map(vm.addRows, 'product')
            var pluckProduct = _.map(vm.products, 'id')
            var intersect = _.intersection(product, vm.selected)
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
                var addRows = _.map(this.addRows, function(num){ return _.pick(num, 'quantity','serial','manufacture','description','location','category','model', 'status') });

                $.post("../api/transfers", {products :addRows, _token: window.Laravel.csrfToken}, function(result){

                   console.log(result);

                });
            },
            addRow() {
                this.addRows.push({
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

                    showAddSerial:false,
                    showModel: false,
                    showCategory: false,
                    showDescription: false,
                    showManufacture: false,

                    hasError: false,
                    maxQuantity: 0,
                });
            },
            createModelMethod(index){

            },
            getQuantity(quantity, index){
                console.log(index)
            },
            fetchModel: function () {
                var that = this;
                 $.get("../api/brands", function(data, status){
                        that.brands =_.map(data.brands, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                });
                //axios.get('../api/brands').then(response => this.brands = _.map(response.data.brands, function(data){ return _.pick(data, 'name', 'id');}))
            },
            fetchCategory: function () {
                var that = this;
                 $.get("../api/categories", function(data, status){
                        that.categories =_.map(data.categories, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                });
               // axios.get('../api/categories').then(response => this.categories = _.map(response.data.categories, function(data){ return _.pick(data, 'name', 'id');}))
            },
            fetchProducts: function () {
                var that = this;
                 $.get("../api/products", function(data, status){
                        that.products = _.map(data.products, function(data){
                        var pick = _.pick(data, 'serial', 'id', 'quantity','status','manufacture.id','description.id','location.id','category.id','brand.id'  );
                        var object = {id:pick.id, text:pick.serial,quantity:pick.quantity,status:pick.status,manufacture:pick.manufacture.id, description:pick.description.id, location:pick.location.id,category:pick.category.id,model:pick.brand.id}
                        return object})
                });
                //axios.get('../api/products').then(response => this.products = response.data.products)
            },
            fetchDescriptions: function () {
                var that = this;
                 $.get("../api/descriptions", function(data, status){
                        that.descriptions = _.map(data.descriptions, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                });
               // axios.get('../api/descriptions').then(response => this.descriptions =  _.map(response.data.descriptions, function(data){ return _.pick(data, 'name', 'id');}))
            },
            fetchManufacture: function () {
                var that = this;
                 $.get("../api/manufactures", function(data, status){
                        that.manufactures =_.map(data.manufactures, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                });
             //   axios.get('../api/manufactures').then(response => this.manufactures =  _.map(response.data.manufactures, function(data){ return _.pick(data, 'name', 'id');}));
            },
            fetchLocation: function () {
                var that = this;
                 $.get("../api/locations", function(data, status){
                        that.locations =_.map(data.locations, function(data){
                        var pick = _.pick(data, 'name', 'id');
                        var object = {id:pick.id, text:pick.name}
                        return object})
                });
                //axios.get('../api/locations').then(response => this.locations =  _.map(response.data.locations, function(data){ return _.pick(data, 'name', 'id');}));
            }

        },
        components:{
            'select2': Select2
        },
    }










</script>
