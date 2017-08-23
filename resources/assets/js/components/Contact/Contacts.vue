<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Developers</div>

                    <div class="panel-body">
                        <div  v-for="develop in developer">
                            {{develop}}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                developer:['Edward Lance Lorilla', 'Keijie Chatto', 'Benn Flores']
            }
        },
    }
</script>
