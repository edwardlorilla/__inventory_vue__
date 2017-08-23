<template>
    <div>
        <edit   v-if="layout == 'edit'"
                :urlString="urlData"
                :textLabel="textData"
                :editData ="brands.editData"
                @backList="layout = 'list'"
                @return ="editPost($event)"
                @goBack = "spliceData($event)"
        >
        </edit>
        <create v-if="layout == 'create'"
                :urlString="urlData"
                @backList="layout = 'list'"
                :textData="textData"
                :nameData="nameData"
                @object = "dataReceive($event)"
                :dataArray="brands.categories"

        ></create>
        <div v-if="layout == 'list'" class="container">
            <transition name="fade">

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
                                    :titleHead="textData"
                                    :data="brands.categories"
                                    :columns="brandsColumns"
                                    :filter-key="searchQuery"
                                    @editData ="findIndex( $event)"
                            >
                            </demo-grid>
                        </div>
                        <div v-else>
                            Loading...
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import Create from './../Filtering/create.vue';
    import Edit from './../Filtering/Edit.vue';
    import DemoGrid from './../Filtering/Filter.vue';
    import DataReceive from './../Filtering/categoryStates.js';
    export default{
    components:{
        DemoGrid,Create, Edit
    },
    data(){
        return{
            searchQuery: '',
            brandsColumns: ['name',],
            brands: DataReceive.data,
            layout:'list',

            textData: 'Categories',
            urlData: '../api/categories',
            nameData: {
                id: null,
                name: '',
                photo:{
                    name:'/images/images.jpg'
                }
            }

        }
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
            dataReceive(data){
                var vm = this
                DataReceive.dataReceive(data)
                vm.layout = 'list'
            },
            findIndex(data){
                var vm = this
                DataReceive.findIndex(data)
                vm.layout = 'edit'
            },
            editPost(getImage){
                var vm = this;
                DataReceive.dataEdit(getImage)
                vm.layout = 'list'
            },
            fetchbrands(){
                var vm = this
                DataReceive.fetch('api/categories')
            }
        }
    }
</script>
