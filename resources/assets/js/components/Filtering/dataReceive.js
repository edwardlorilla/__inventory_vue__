/**
 * Created by Edward Lance Lorilla on 5/18/2017.
 */
export default{
    data:{
        brands:[],
        descriptions:[],
        categories: []

    },
    dataReceive(id, data, title){
        var vm = this
        if (title == 'Model') {
            vm.data.brands.unshift({id: id, name: data, productCount: 0})
        }else{
            vm.data.brands.unshift({id: id, name: data})
        }

    },
    fetch(urlFetch, title ){
        if (title == 'Model'){
            axios.get(urlFetch).then(response => this.data.brands = _.map(response.data.data, function(num){
                var pick = _.pick(num, 'id', 'name', 'products')
                var object = {id: pick.id, name: pick.name, productCount: _.size(pick.products)}
                return object
            }))
        }else if(title == 'Categories'){
            axios.get(urlFetch).then(response => this.data.categories = response.data.data)
        }else if(title == 'Descriptions'){
            axios.get(urlFetch).then(response => this.data.descriptions = response.data.data)
        }
    }
}