<template>
    <div>
        <div class="form-group">
            <label>{{textLabel}} Name</label>
            <input type="text"
                   class="form-control"
                   v-model="nameData"
                   placeholder="Name"
                   @keydown.enter.prevent = 'postData'
            >
        </div>
    </div>
</template>
<style src="noty/lib/noty.css"></style>
<script>
    import NotyAlert from './../Noty/notyAlert';
    export default{
        props: {
            urlString: String,
            textLabel: String
        },
        data(){
            return{
                nameData: ''
            }
        },
        methods:{

            postData(){
            var vm = this
            axios.post( vm.urlString , {name: vm.nameData }).then(response => {
                 NotyAlert.notyAlert('success', response.data.message)
            })
            .catch(function (error) {
                NotyAlert.notyAlert('error', 'something went wrong');
            })
            }
        }
    }
</script>
