 <template>
    <div>
        <edit   v-if="layout == 'edit'"
                :urlString="urlData"
                :textLabel="textData"
                :editData ="brands.editData"
                @backList="layout = $event"
                @return ="editPost()"
                @goBack = "spliceData($event)"
        >
        </edit>
        <create v-if="layout == 'create'"
                :urlString="urlData"
                :textData="textData"
                :nameData="nameData"
                @dataId = "nameData.id =$event"
                @dataName = "dataReceive(nameData.id, $event)"
                :dataArray="brands.brands"
        ></create>
        <div v-if = "layout == 'list'" class="container">
            <div  class="row">
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
                                titleHead="Manufactures"
                                :data="brands.brands"
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
            <!--</transition>-->
        </div>
    </div>
</template>
<style>

</style>
<script>
    import Create from './../Filtering/create.vue';
    import Edit from './../Filtering/Edit.vue';
    import DemoGrid from './../Filtering/Filter.vue';
    import DataReceive from './../Filtering/ManufacturesStates.js';

    export default{
    components:{
        DemoGrid, Create, Edit
    },
    data(){
        return{
            searchQuery: '',
            brandsColumns: ['id', 'name',],
            brands: DataReceive.data,
            layout:'list',

            textData: 'Manufactures',
            urlData: '../api/manufactures',
            nameData: {
                id: null,
                name: ''
            },
            loading: true,
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
        dataReceive(id, data){
                var vm = this
                DataReceive.dataReceive(id, data)
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
            DataReceive.dataEdit()
            vm.layout = 'list'
        },
        fetchbrands(){
            DataReceive.fetch('api/manufactures')

        }
    }
    }
</script>
