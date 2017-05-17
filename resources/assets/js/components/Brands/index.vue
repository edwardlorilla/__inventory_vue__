<template>
    <div class="container">
        <transition name="fade">

        <div class="row">
            <div class="col-md-8 col-md-offset-2">
        <!--<form method="POST" action="http://localhost:8000/api/brands">
            <input name="_token" type="hidden" :value="tokenLaravel">
            <input type="text" name="test">
            <button type="submit">Submit</button>
        </form>-->

        <router-link class="btn btn-primary" tag="button" :to="{ name: 'createBrands' }">Create Brand
        </router-link>
        <div class="form-group pull-right">

            <input type="text" class="form-control" placeholder="search..." name="query"
                   v-model="searchQuery"
                   aria-describedby="basic-addon1">
        </div>
        <div v-if="brands">
            <demo-grid
                titleHead="Models"
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
    tokenLaravel: window.Laravel.csrfToken,
    searchQuery: '',
    brandsColumns: ['id', 'name','productCount'],
    brands: [],


    }
    },
    created(){
    this.fetchbrands();
    },

    methods:{
        fetchbrands(){
            axios.get('api/brands').then(response => this.brands = _.map(response.data.brands, function(num){
                        var pick = _.pick(num, 'id', 'name', 'products')
                        var object = {id: pick.id, name: pick.name, productCount: _.size(pick.products)}
                        return object
                    }))
        }
    }
    }

</script>
