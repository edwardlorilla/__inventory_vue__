<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Create {{textData}}</div>

                    <div class="panel-body">
                        <create-data
                                :urlString="urlData"
                                :textLabel="textData"
                                :nameData="nameData"
                        >

                        </create-data>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import createData from './../Filtering/create.vue';
    export default {
        data(){
            return{
                textData: 'Descriptions',
                urlData: '../api/descriptions',
                nameData: {
                    name: ''
                }
            }
        },
        components:{
            'create-data':createData
        },
        mounted() {
            document.title = 'Create ' + this.textData
        }
    }
</script>
