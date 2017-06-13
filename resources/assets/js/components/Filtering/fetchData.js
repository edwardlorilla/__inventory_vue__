/**
 * Created by Edward Lance Lorilla on 5/20/2017.
 */
export default {

    data:{
        dataFetch:{}
    },
    fetchData(data){
        var vm = this
        axios.get(data).then(response => {
            var pick = _.pick(response.data.data,
                'id', 'quantity','serial', 'assetSerial','manufacture','description','location','category',
                'brand', 'status' );
            vm.data.dataFetch =  {
                id: pick.id,
                serial:pick.serial,
                assetSerial:pick.assetSerial,
                quantity:pick.quantity,

                description:{
                    id: pick.description ? pick.description.id : null,
                    text:pick.description ? pick.description.name : null
                },
                status:{
                    id: pick.status ? pick.status.id : null,
                    text:pick.status ? pick.status.name : null
                },
                manufacture:{
                    id:pick.manufacture ? pick.manufacture.id : null,
                    text: pick.manufacture ? pick.manufacture.name : null
                },
                location:{
                    id: pick.location ? pick.location.id : null,
                    text: pick.location ? pick.location.name : null
                },
                category:{
                    id:pick.category ? pick.category.id : null,
                    text:pick.category ? pick.category.name : null,
                },
                model:{
                    id:pick.brand ? pick.brand.id : null,
                    text:pick.brand ? pick.brand.name : null
                },
                status: pick.status,
                serialClone: pick.serial,
                assetSerialClone: pick.assetSerial
            }
        })

    }
}