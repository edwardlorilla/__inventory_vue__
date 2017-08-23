<template>
    <div class="col-lg-3 col-sm-4 col-xs-6">
        <a class="thumbnail">
            <img :src="item.name" class="img-responsive">
        </a>
    </div>
</template>

<script>

    export default{
        props: ['item'],

        data(){
            return{
            }
        },
    }
</script>
