<template>
    <div>
        <edit   v-if="layout == 'edit'"
                :urlString="urlData"
                :textLabel="textData"
                :editData ="brands.editData"
                @return ="editPost()"
                @backList="layout = 'list'"
                @goBack = "spliceData($event)"
        >
        </edit>
        <create v-if="layout == 'create'"
                :urlString="urlData"
                :textData="textData"
                :nameData="nameData"
                :dataArray="brands.locations"
                @object = "dataReceive($event)"
        >
        </create>
        <div v-if="layout == 'list'" class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <button class="btn btn-primary"
                            @click="layout = 'create'"
                    >Create {{textData}}
                    </button>
                    <div class="form-group pull-right">

                        <input type="text" class="form-control" placeholder="search..." name="query"
                               v-model="searchQuery"
                               aria-describedby="basic-addon1">
                    </div>
                    <div v-if="brands">
                        <demo-grid
                                titleHead="Locations"
                                :data="brands.locations"
                                :columns="brandsColumns"
                                :filter-key="searchQuery"
                                @editData ="findIndex( $event)"
                        >
                        </demo-grid>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import DemoGrid from './../Filtering/Filter.vue';
    import Edit from './../Filtering/Edit.vue';
    import Create from './../Filtering/create.vue';
    import DataReceive from './../Filtering/locationState.js';
    export default{
    components:{
        DemoGrid, Create, Edit
    },
    data(){
        return{
            searchQuery: '',
            brandsColumns: ['name'],
            brands: DataReceive.data,
            layout: 'list',
            textData: 'Locations',
            urlData: '../api/locations',
            nameData: {
                id: null,
                name: null,
                BU: null,
                OU: null
            },
            loading: true,
        }
    },
    computed:{

    },
    created(){
        this.fetchbrands();
    },
    methods:{
        spliceData(data){
            var vm = this;
            DataReceive.deleteData(data)
            vm.layout = 'list'
        },
        findIndex(data){
            console.log(data)
            var vm = this
            DataReceive.findIndex(data)
            vm.layout = 'edit'
        },
        editPost(){
            var vm = this;
                DataReceive.dataEdit(vm.editData)
                vm.layout = 'list'
        },
        dataReceive(data){
            var vm = this
            DataReceive.dataReceive(data)
            vm.layout = 'list'
        },
        fetchbrands(){
            DataReceive.fetch('api/locations')
        }
    }
    }
</script>
