<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading ">
                        <a @click="backList">
                            <i class="glyphicon glyphicon-menu-left"></i>
                        </a>{{textLabel}} Edit
                        <a v-if="layout == 'list'" class="pull-right" @click="layout = 'time'">
                            <i class="glyphicon glyphicon-time"></i>
                        </a>
                        <a v-if="layout == 'time'" class="pull-right" @click="layout = 'list'">
                            <i class="glyphicon glyphicon-edit"></i>
                        </a>
                    </div>

                    <div v-if="layout == 'list'" class="panel-body">
                        <div v-if="textLabel == 'Locations'">
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
                        <div v-else-if="textLabel == 'Categories'">
                            <div class="row">
                                <div class="col-md-8">
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
                                <div class="col-md-4">
                                    <div class="thumbnail">
                                        <img v-if="isEmptyPhoto" :src="editData.photo ? editData.photo.name : '/images/images.jpg'" width="100" :alt="editData.photo ? editData.photo.name : '/images/images.jpg'">
                                        <img width="100"  v-else :src="image"/>
                                    </div>
                                    <div class="form-group">
                                        <div v-if="!image">
                                            <label>Select an image</label>
                                        </div>
                                        <div v-else>

                                            <button class="btn btn-danger" @click="removeImage">Remove image</button>
                                        </div>
                                        <input  v-if="!image" name="image" type="file" @change="onFileChange">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="form-group">
                            <label>{{textLabel}} Name</label>
                            <input type="text"
                                   class="form-control"
                                   v-model="editData.name"
                                   placeholder="Name"
                                   @keydown.enter.prevent='postData'
                            >
                        </div>
                    </div>


                    <history v-if="layout == 'time'" :serials="editData.serials"></history>
                    <div class="panel-footer">
                        <span class="btn-group">
                            <button class="btn btn-danger" v-if="isEmpty"
                                    @click="deleteData">Delete {{textLabel}}</button>
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
                layout: 'list',
                image:'',
            }
        },
        computed:{
            isEmpty(){
                var vm = this
                return _.isEmpty(vm.editData.serials)
            },
            isEmptyPhoto(){
                var vm = this
                 return _.isEmpty(vm.image)
            }
        },
        mounted(){
           // this.fetchData(this.$route.params.id)
        },
        methods:{
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                return;
                this.createImage(files[0]);
            },
            createImage(file) {
                var image = new Image();
                var reader = new FileReader();
                var vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            removeImage: function (e) {
            this.image = '';
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
                axios.patch('../' +  vm.urlString + '/' + vm.editData.id  , ((vm.textLabel == 'Categories') ? {name: vm.editData.name, image: vm.image} : vm.editData) ).then(response => {

                     NotyAlert.notyAlert('success', response.data.message)
                    vm.$emit('return', response.data)

                })
                .catch(function (error) {
                console.log(error)
                    NotyAlert.notyAlert('error', 'something went wrong');
                })
            }
        }
    }


</script>
