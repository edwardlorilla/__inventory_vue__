<template>
    <div class="container">
        <div class="row">

            <div  class="col-lg-12">

                <router-link class="btn btn-primary" tag="button" :to="{ name: 'createProducts' }">Create Products
                </router-link>
                <div class="form-group pull-right">

                    <input type="text" class="form-control" placeholder="search..." name="query"
                           v-model="searchQuery"
                           aria-describedby="basic-addon1">
                </div>

                <demo-grid
                        titleHead="Products"
                        :data="brands"
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
    export default{
    components:{
        DemoGrid
    },
    data(){
    return{
            searchQuery: '',
            brandsColumns: ['id','updated', 'serial' , 'assetSerial','quantity','status','category','description','location','manufacture' ,'model'],
            brands: [],
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
        productLimit() {
            return  this.brands.slice(0, this.limitLength);
        },
    },

    methods:{
        fetchBrands(){
            var that = this;
            that.loading = true

             axios.get("../api/products").then(function(response){
                that.brands = _.map(response.data.products, function(num){
                var pick = _.pick(num, 'id', 'quantity','serial','manufacture','description','location','category','brand', 'status', 'updated_at','assetSerial');
                var objectProduct = {
                id:pick.id,
                quantity:pick.quantity,
                serial: _.isEmpty(pick.serial) ? 'NOT SERIAL DEFINED' : pick.serial,
                assetSerial: _.isEmpty(pick.assetSerial) ? 'NOT DEFINED' : pick.assetSerial,
                manufacture:pick.manufacture ? pick.manufacture.name : 'NOT DEFINED',
                description:pick.description.name,
                location:pick.location.name,
                category:pick.category.name,
                model:pick.brand.name,
                status: pick.status === 1 ? 'WORKING' : 'DEFECTIVE',
                updated:pick.updated_at};
                return objectProduct})
                that.loading = false
             })

        }
    }
}




</script>
