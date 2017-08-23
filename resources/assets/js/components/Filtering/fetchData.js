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
                'id', 'quantity','serial','type', 'assetSerial','manufacture','description','location','category','checkouts',
                'brand', 'status','photos' );
            vm.data.dataFetch =  {
                id: pick.id,
                serial:pick.serial,
                assetSerial:pick.assetSerial,
                quantity:pick.quantity,
                type:pick.type,
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
                    text:pick.category ? pick.category.name : null
                },
                model:{
                    id:pick.brand ? pick.brand.id : null,
                    text:pick.brand ? pick.brand.name : null
                },
                photo: pick.category ? (pick.category.photo ? pick.category.photo.name:'/images/images.jpg') : '/images/images.jpg',
                photos:  _.map(pick.photos, function (p) {
                    return _.pick(p, 'id', 'name')
                }),
                checkouts:  _.map(pick.checkouts, function (p) {
                    return _.pick(p, 'id','created_at', 'updated_at', 'in', 'out')
                }),
                status: pick.status,
                serialClone: pick.serial,
                quantityClone: pick.quantity,
                assetSerialClone: pick.assetSerial
            }
        })

    }
}