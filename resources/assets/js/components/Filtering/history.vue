<template>
    <ul class="list-group">
        <li  v-for="serial in serials"  class="list-group-item" v-text="serial"></li>
        <li class="list-group-item" v-if="isEmpty">Not found</li>
        </ul>
</template>
<script>

    export default{
        props: ['serials'],
        
        data(){
            return{

            }
        },
        computed:{
            isEmpty(){
                var vm = this;
                return _.isEmpty(vm.serials)
            }
        }
    }


</script>
