<template>
    <div class="container">
        <div class="row">

            <div  class="col-md-8 col-md-offset-2">

                <router-link class="btn btn-primary" tag="button" :to="{ name: 'createProducts' }">Create Products
                </router-link>
                <div class="form-group pull-right">

                    <input type="text" class="form-control" placeholder="search..." name="query"
                           v-model="searchQuery"
                           aria-describedby="basic-addon1">
                </div>

                <demo-grid
                        :data="brands"
                        :columns="brandsColumns"
                        :filter-key="searchQuery">
                </demo-grid>
            </div>

            </div>
        <!-- beforeRouteEnter (to, from, next) {
            console.log('routeEnter');
            $.get("../api/products", function(data, status){
              next(vm => vm.fetchbrands(data, status))
            })
        },
        beforeRouteUpdate (to, from, next) {
            var that = this;
            that.brands = [],
            console.log('befreRouteUpdate')
            $.get("../api/products", function(data, status){
              next(vm => vm.fetchbrands(data, status))
            })
        },-->
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
            brandsColumns: ['serial','quantity','category','description','location','manufacture' ,'model'],
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
                var pick = _.pick(num, 'quantity','serial','manufacture.name','description.name','location.name','category.name','brand.name', 'status');
                var objectProduct = {quantity:pick.quantity, serial:pick.serial, manufacture:pick.manufacture.name, description:pick.description.name, location:pick.location.name,category:pick.category.name,model:pick.brand.name, status: status };
                return objectProduct})
                that.loading = false
             })

        }
    }
}




</script>
