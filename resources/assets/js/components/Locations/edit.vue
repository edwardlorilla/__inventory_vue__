/**
* Created by Edward Lance Lorilla on 5/17/2017.
*/
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
    export default {
        data(){
            return{
                textData: 'Location',
                urlData: '../api/locations'
            }
        },
        components:{
            'edit-data':editData
        },
        mounted() {

            document.title = 'Edit ' + this.textData
        },
    }
</script>
