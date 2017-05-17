<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Transactions</div>

                    <div class="panel-body">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>Status</th>
                                <th>Current Location</th>
                                <th>Last Location</th>
                                <th>Updated Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="dataFetch"  v-for="data in dataFetch">
                                <td>{{data.status}}</td>
                                <td>{{data.currentLocation}}</td>
                                <td>{{data.lastLocation}}</td>
                                <td>{{data.updateDate}}</td>
                            </tr>
                            <tr v-else>NO CONTENT</tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
                dataFetch:[]
            }
        },
        mounted(){
            this.fetchData(this.$route.params.id)
        },
        methods:{

        fetchData(dataId){
        var vm = this;
            axios.get('../../api/transfers/' + dataId + '/history').then(function(response){
                vm.dataFetch = _.map(response.data, function(data){
                    var pick = _.pick(data, 'location.lastLocation', 'location.name', 'updated_at', 'status')
                    var status = '';
                    if(pick.status === 1){
                       status = 'TRANSFER';
                    }else if (pick.status === 2){
                       status= 'DEPLOY';
                    }else{
                       status = 'REPLACED';
                    }
                    var object = {status:status, lastLocation:pick.location.lastLocation, currentLocation:pick.location.name, updateDate:pick.updated_at}
                    return object
                })
            })
        }
        }
    }



</script>