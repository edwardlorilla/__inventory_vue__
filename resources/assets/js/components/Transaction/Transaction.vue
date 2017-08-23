<template>
    <tr >
        <td>{{transaction.in === null ? 'OUT' : 'IN' }}</td>
        <td>{{transaction.in === null ? transaction.out : transaction.in }}</td>
        <td>{{transaction.created_at}}</td>
        <td>{{transaction.updated_at}}</td>
    </tr>
</template>

<script>

    export default{
        props: ['transaction'],
        data(){
            return{
            }
        }
    }
</script>
