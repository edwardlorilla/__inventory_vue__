<template>
    <div class="container">
        <!--<transition name="fade">
        <loader v-if="loading"></loader>-->
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
        <router-link class="btn btn-primary" tag="button" :to="{ name: 'createLocations' }">Create Location
        </router-link>
        <div class="form-group pull-right">

            <input type="text" class="form-control" placeholder="search..." name="query"
                   v-model="searchQuery"
                   aria-describedby="basic-addon1">
        </div>
        <div v-if="brands">
            <demo-grid
                :data="brands"
                :columns="brandsColumns"
                :filter-key="searchQuery">
            </demo-grid>
            </div>
        <div v-else>
            Loading...
        </div>
    </div>
    </div>
        <!--</transition>-->
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
    brandsColumns: ['name',],
    brands: [],

    loading: true
    }
    },
    created(){
    this.fetchbrands();
    },
    methods:{
    fetchbrands(){
    //axios.get('api/locations').then(response => this.brands = response.data.locations)
    var that = this;
        that.loading = true
         $.get("api/locations", function(data, status){
            that.brands =_.map(data.locations, function(data){
                        return  _.pick(data, 'name', 'id');})
                that.loading = false
        });
    }
    }
    }
</script>
