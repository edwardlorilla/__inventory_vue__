<template>
    <div class="container">
        <transition name="fade">

        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <router-link class="btn btn-primary" tag="button" :to="{ name: 'createDescriptions' }">Create Description
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
        </transition>
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
    brands: []
    }
    },
    created(){
    this.fetchbrands();
    },
    methods:{
    fetchbrands(){
    axios.get('api/categories').then(response => this.brands = response.data.categories)
    }
    }
    }
</script>
