<template>
    <div class="container">
        <div class="row">

            <div class="col-lg-12">

                <router-link class="btn btn-primary" tag="button" :to="{ name: 'createProducts' }">Create Products
                </router-link>
                <div class="form-group pull-right">

                    <input type="text" class="form-control" placeholder="search..." name="query"
                           v-model="searchQuery"
                           aria-describedby="basic-addon1">
                </div>

                <demo-grid
                        titleHead="Products"
                        :data="productsFetch"
                        :columns="brandsColumns"
                        :filter-key="searchQuery">
                </demo-grid>
            </div>

        </div>
    </div>
</template>
<style>

</style>
<script>
    import DemoGrid from './../Filtering/Filter.vue';
    import DataReceive from './../Filtering/productStates.js';
    export default{
    components:{
        DemoGrid
    },
    data(){
    return{
            searchQuery: '',
            brandsColumns: ['id','updated', 'serial' , 'assetSerial','quantity','status','category','description','location','manufacture' ,'model'],
            brands: DataReceive.data,
            limitLength: 5,

            loading: true,
            post: null,
            error: null
        }
    },

    mounted(){
        this.fetchBrands()
    },
    computed:{
        productsFetch(){
                var vm = this
                return _.map(vm.brands.brands, function(data){
                            var pick = _.pick(data, 'id', 'quantity','serial','manufacture','description','location','category','model', 'status', 'updated','assetSerial');
                            var objectProduct = {
                            id:pick.id,
                            quantity:pick.quantity ? pick.quantity :  '',
                            serial: _.isEmpty(pick.serial) ? 'NOT SERIAL DEFINED' : pick.serial,
                            assetSerial: _.isEmpty(pick.assetSerial) ? 'NOT DEFINED' : pick.assetSerial,
                            manufacture:pick.manufacture ? pick.manufacture : 'NOT DEFINED',
                            description:pick.description ? pick.description : 'NOT DEFINED',
                            location:pick.location ? pick.location : 'NOT DEFINED',
                            category:pick.category ? pick.category.name : 'NOT DEFINED',
                            model:pick.model ?  pick.model : 'NOT DEFINED',
                            status: pick.status ? pick.status : 'NOT DEFINED' ,
                            updated:pick.updated ? pick.updated : 'NOT DEFINED'
                        };
                return objectProduct})
        }
    },

    methods:{
        fetchBrands(){
            var that = this;
            that.loading = true
            DataReceive.fetch('../api/products', that.loading)
        }
    }
}





</script>
