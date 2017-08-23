<template>
    <dropzone id="myVueDropzone" :url="getId"
              name="file"
              v-on:vdropzone-success="showSuccess"
    >
        <!-- Optional parameters if any! -->
        <input type="hidden" name="token" :value="laravelToken">
    </dropzone>
</template>

<script>
    import Dropzone from 'vue2-dropzone'
    export default{
        data(){
            return{
                 laravelToken: window.Laravel.csrfToken,
            }
        },
        computed:{
            getId(){
                var vm = this
                return '../../api/products/uploader/' + vm.$route.params.id
            }
        },
        components:{
            Dropzone
        },
        methods:{
            showSuccess(){
                console.log('the file has been uploaded')
            }
        }
    }
</script>
