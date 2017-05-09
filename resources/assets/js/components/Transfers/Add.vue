<template>
    <div

            :class="{'has-error' : hasError}"
    >
        <div
                class="input-group input-group-sm"
        >
            <input class="form-control  input-sm"
                   v-model="value"
                   type="text"
            />
            <span class="input-group-btn">
                <button class="btn btn-sm btn-primary"
                        :disabled="disableButton"
                        @click.prevent="createMethod()">
                    <i class="glyphicon glyphicon-plus"></i>
                </button>
                <button class="btn btn-sm btn-danger"
                        :disabled="disableButton"
                        @click.prevent="$emit('close')">
                    <i class="glyphicon glyphicon-remove"></i>
                </button>
            </span>
        </div>
        <span id="helpBlock2" :class="{'hidden' : !hasError}"
              class="help-block">Not Valid Entry</span>
    </div>
</template>
<style>
</style>
<script>
    export default{
        props: {
            urlName: String,
        },
        data(){
            return{
                value: '',
                disableButton: false,
                hasError:false
            }
        },
        methods:{

            createMethod(){
                var vm = this
               vm.disableButton = true;
               if(!_.isEmpty(vm.value)){
                axios.post(vm.urlName, {name : vm.value}).then(response => {
                     vm.disableButton = false;
                     vm.hasError = false
                     this.$emit('fetch');
                })
               }else{
                    vm.disableButton = false;
                    vm.hasError = true
               }
            }
        }
    }
</script>
