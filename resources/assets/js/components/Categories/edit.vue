<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Edit {{textData}}</div>

                    <div class="panel-body">
                        <edit-data
                                :urlString="urlData"
                                :textLabel="textData"
                        >
                        </edit-data>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="noty/lib/noty.css"></style>
<script>
    import NotyAlert from './../Noty/notyAlert';
    import editData from './../Filtering/Edit.vue';
    import categoryState from './../Filtering/Edit.vue';
    export default {
        data(){
            return{
                textData: 'Categories',
                urlData: '../api/categories',
            }
        },
        components:{
            'edit-data':editData
        },
        mounted() {
            var vm = this
            document.title = 'Edit ' + this.textData
        },
        methods:{
            fetchData(dataId){
                categoryState.fetchObject('../../api/categories/' + dataId + '/edit')
            }
        }
    }
</script>
