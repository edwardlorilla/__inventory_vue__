<template>
    <datalist :id="idList">
        <option  v-for="value in lists" :value="value.text" >{{value.category.name}}</option>
    </datalist>
</template>
<script>
    
    export default{
        props: ['idList', 'lists']

    }
</script>
