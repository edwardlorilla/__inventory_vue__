/**
 * Created by Edward Lance Lorilla on 5/22/2017.
 */
export default{
    data: {
        brands: []

    },
    dataReceive(id, data){
        var vm = this
        vm.data.brands.unshift({id: id, name: data})
    },
    fetch(urlFetch){
        axios.get(urlFetch).then(response => this.data.brands = _.map(response.data.data, function (num) {
            var pick = _.pick(num, 'id', 'name')
            var object = {id: pick.id, name: pick.name}
            return object
        }))
    }
}
