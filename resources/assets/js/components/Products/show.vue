<template>
    <div>
        <vue-xlsx-table @on-select-file="handleSelectedFile">I</vue-xlsx-table>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{

            }
        },
        methods: {
            handleSelectedFile (convertedData) {
                var vm = this
                axios.post('../api/products/imports', {products :convertedData.body}).then(response => {
                    _.forEach(response.data, function(value) {
                      console.log(value);
                    });
                    //this.$router.push({name:'products'})
                    //NotyAlert.notyAlert('success', 'Tech Item has deleted')
                }).
                catch(function (error) {
                    //NotyAlert.notyAlert('error', 'something went wrong');
                })
            }
        }
    }
</script>
