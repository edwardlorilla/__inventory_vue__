<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading ">
                        <a @click="backList">
                            <i  class="glyphicon glyphicon-menu-left"></i>
                        </a>{{textLabel}} Edit
                        <a v-if="layout == 'list'" class="pull-right" @click="layout = 'time'">
                            <i  class="glyphicon glyphicon-time"></i>
                        </a>
                        <a v-if="layout == 'time'" class="pull-right" @click="layout = 'list'">
                            <i  class="glyphicon glyphicon-edit"></i>
                        </a>
                    </div>

                    <div v-if="layout == 'list'" class="panel-body">
                        <div v-if="textLabel == 'Locations'" class="panel-body">
                            <div class="form-group">
                                <label>{{textLabel}} Name</label>
                                <input type="text"
                                       class="form-control"
                                       v-model="editData.name"
                                       placeholder="Name"
                                >
                            </div>
                            <div class="form-group">
                                <label>Last {{textLabel}}</label>
                                <input type="text"
                                       class="form-control"
                                       v-model="editData.lastLocation"
                                       placeholder="Name"
                                >
                            </div>
                            <div class="form-group">
                                <label>Business Unit {{textLabel}} Name</label>
                                <input type="text"
                                       class="form-control"
                                       v-model="editData.BU"
                                       placeholder="Name"
                                >
                            </div>
                            <div class="form-group">
                                <label>Operating Unit {{textLabel}} Name</label>
                                <input type="text"
                                       class="form-control"
                                       v-model="editData.OU"
                                       placeholder="Name"
                                       @keydown.enter.prevent='postData'
                                >
                            </div>

                        </div>
                        <div v-else class="panel-body">
                            <div class="form-group">
                                <label>{{textLabel}} Name</label>
                                <input type="text"
                                       class="form-control"
                                       v-model="editData.name"
                                       placeholder="Name"
                                       @keydown.enter.prevent='postData'
                                >
                            </div>
                        </div>
                    </div>
                    <history v-if="layout == 'time'" :serials = "editData.serials"></history>
                    <div class="panel-footer">
                        <span class="btn-group">
                            <button class="btn btn-danger" v-if="isEmpty" @click="deleteData">Delete {{textLabel}}</button>
                            <button class="btn btn-success" @click="postData">Update {{textLabel}}</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="noty/lib/noty.css"></style>
<script>
    import History from './history.vue';
    import NotyAlert from './../Noty/notyAlert';
    export default{
        components:{
            History
        },
        props: [
            'urlString',
            'textLabel',
            'editData'
        ],
        data(){
            return{
                nameData: {},
                layout: 'list'
            }
        },
        computed:{
            isEmpty(){
                var vm = this
                return _.isEmpty(vm.editData.serials)
            }
        },
        mounted(){
           // this.fetchData(this.$route.params.id)
        },
        methods:{
            fetchData(dataId){
                /*
                var vm = this
                axios.get('../' + vm.urlString + '/' + dataId + '/edit').then(response => {
                console.log(response)
                    vm.nameData = response.data.data
                })
                .catch(function (error) {
                    NotyAlert.notyAlert('error', 'something went wrong');
                })
                */
            },

            deleteData(){
            var vm = this
               vm.$emit('goBack', vm.editData.id)
                axios.delete('../' +  vm.urlString + '/' + vm.editData.id).then(response => {
                     NotyAlert.notyAlert('success', 'Tech Item has deleted')

                     //m.$router.push({ name:  vm.$route.name})
                })
                .catch(function (error) {
                    NotyAlert.notyAlert('error', 'something went wrong');
                })

            },
            backList(){
                var vm = this
                vm.$emit('backList', 'list')
            },
            postData(){
                var vm = this
                axios.patch('../' +  vm.urlString + '/' + vm.editData.id  , vm.editData ).then(response => {

                     NotyAlert.notyAlert('success', response.data.message)
                    vm.$emit('return', 'list')

                })
                .catch(function (error) {
                console.log(error)
                    NotyAlert.notyAlert('error', 'something went wrong');
                })
            }
        }
    }

</script>
