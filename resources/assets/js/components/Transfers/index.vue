<template>
    <div class="container">
        <div class="row">

            <div  class="col-lg-12">

                <router-link class="btn btn-primary" tag="button" :to="{ name: 'createTransfers' }">Create CFAT
                </router-link>
                <div class="form-group pull-right">

                    <input type="text" class="form-control" placeholder="search..." name="query"
                           v-model="searchQuery"
                           aria-describedby="basic-addon1">
                </div>

                <demo-grid
                        titleHead="Transactions"
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
            brandsColumns: ['updated', 'serial', 'to', 'from', 'status'],
            brands: [],

            loading: true,
            post: null,
            error: null
        }
    },

    mounted(){
        this.fetchBrands()
    },

    methods:{
        fetchBrands(){
            var that = this;
            that.loading = true

             axios.get("../api/transfers").then(function(response){
                that.brands = _.map(response.data.data, function(num){
                var pick = _.pick(num, 'product.serial','location','updated_at', 'action.name');
                var objectData = {
                    updated:pick.updated_at,
                    serial: _.isEmpty(pick.product) ? 'NOT SERIAL DEFINED' : pick.product.serial,
                    to:pick.location.lastLocation,
                    from:pick.location.name,
                    status: pick.action.name
                };
                return objectData})
                that.loading = false
             })

        }
    }
}




</script>
