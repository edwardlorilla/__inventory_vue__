<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading "><a @click="backList">
                        <i class="glyphicon glyphicon-menu-left"></i>
                    </a>Create {{textData}}</div>
                    <div v-if="textData == 'Locations'" class="panel-body">
                        <div class="form-group" :class="{'has-error' : validateDuplicateName || errors.Name }">
                            <label>{{textData}} Name</label>
                            <input type="text"
                                   name="name"
                                   autofocus
                                   required
                                   class="form-control"
                                   v-model="nameData.name"
                                   placeholder="Name"
                            >
                            <span :class="{'hidden' : !validateDuplicateName}"
                                  class="help-block">Duplicated {{textData}} name Entry</span>
                            <span :class="{'hidden' : !errors.Name}"
                                  class="help-block">The Name field is required.</span>
                        </div>
                        <div class="form-group" :class="{'has-error' : errors.BU }">
                            <datalist id="BU">
                                <option value="PHAM14"></option>
                            </datalist>
                            <label>Business Unit {{textData}} Name</label>
                            <input type="text"
                                   list="BU"
                                   required
                                   class="form-control"
                                   v-model="nameData.BU"
                                   placeholder="Name"
                            >
                            <span :class="{'hidden' : !errors.BU}"
                                  class="help-block">The Business Unit field is required.</span>
                        </div>
                        <div class="form-group" :class="{'has-error' : errors.OU}">
                            <datalist id="OU">
                                <option value="P14"></option>
                            </datalist>
                            <label>Operating Unit {{textData}} Name</label>
                            <input type="text"
                                   class="form-control"
                                   v-model="nameData.OU"
                                   placeholder="Name"
                                   required
                                   list="OU"
                                   @keydown.enter.prevent='postData'
                            >
                            <span :class="{'hidden' : !errors.OU}"
                                  class="help-block">The Operating Unit field is required.</span>
                        </div>

                    </div>
                    <div v-else-if="textData == 'Categories'" class="panel-body">
                        <div class="form-group" :class="{'has-error' : validateDuplicateName || errors.Name}">
                            <label>{{textData}} Name</label>
                            <input type="text"
                                   class="form-control"
                                   autofocus
                                   v-model="nameData.name"
                                   required
                                   placeholder="Name"
                                   @keydown.enter.prevent='postData'
                            >
                            <span :class="{'hidden' : !validateDuplicateName}"
                                  class="help-block">Duplicated {{textData}} name Entry</span>
                            <span :class="{'hidden' : !errors.Name}"
                                  class="help-block">The {{textData}} Name field is required.</span>
                        </div>
                        <div class="form-group">
                            <div v-if="!image">
                                <label> Select an image</label>
                            </div>
                            <div v-else>
                                <img :src="image"/>
                                <button @click="removeImage">Remove image</button>
                            </div>
                            <input name="image" type="file" @change="onFileChange">
                        </div>
                    </div>
                    <div v-else class="panel-body">
                        <div class="form-group" :class="{'has-error' : validateDuplicateName || errors.Name}">
                            <label>{{textData}} Name</label>
                            <input type="text"
                                   class="form-control"
                                   autofocus
                                   v-model="nameData.name"
                                   required
                                   placeholder="Name"
                                   @keydown.enter.prevent='postData'
                            >
                            <span :class="{'hidden' : !validateDuplicateName}"
                                  class="help-block">Duplicated {{textData}} name Entry</span>
                            <span :class="{'hidden' : !errors.Name}"
                                  class="help-block">The {{textData}} Name field is required.</span>
                        </div>
                    </div>
                    <div class="panel-footer">
                        <button class="btn btn-primary" :disabled="validateDuplicateName || validationEntry" @click="postData">Create {{textData}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="noty/lib/noty.css"></style>
<script>
    import NotyAlert from './../Noty/notyAlert';
    export default{
        props: {
            urlString: String,
            textData: String,
            nameData: Object,
            dataArray: Array
        },
        data(){
            return{
                errors:{
                    Name: false
                },
                image:''
            }
        },
        mounted(){
            document.title = 'Create ' + this.textData
        },
        computed:{
            validateDuplicateName(){
                var vm = this
                var data = _.map(vm.dataArray, 'name')
                return _.includes(data, vm.nameData.name)
            },
            validationEntry(){
                var vm = this
                return vm.textData == 'Locations' ? _.isEmpty(vm.nameData.name) || _.isEmpty(vm.nameData.BU) || _.isEmpty(vm.nameData.OU)  :  _.isEmpty(vm.nameData.name)
            }
        },
        methods:{
             backList(){
                var vm = this
                vm.$emit('backList', 'list')
            },
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

            postData(){
                var vm = this
                axios.post( vm.urlString , vm.textData == 'Categories' ? {name: vm.nameData.name, image: vm.image} : vm.nameData).then(response => {
                    vm.$emit('dataId', response.data.data.id)
                    vm.$emit('dataName', response.data.data.name)
                    vm.$emit('object', response.data.data)

                     NotyAlert.notyAlert('success', response.data.message)
                })
                .catch(function (error) {

                    NotyAlert.notyAlert('error', 'something went wrong')
                })
            }
        }
    }



</script>
