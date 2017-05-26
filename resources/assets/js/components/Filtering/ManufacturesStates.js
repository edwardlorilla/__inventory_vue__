/**
 * Created by Edward Lance Lorilla on 5/18/2017.
 * ManufacturesStates
 */
export default{
    data: {
        brands: [],
        editData:{}
    },
    dataReceive(id, data){
        var vm = this
        vm.data.brands.unshift({id: id, name: data})

    },
    fetch(urlFetch){
        axios.get(urlFetch).then(response => this.data.brands = _.map(response.data.data, function (num) {
            var pick = _.pick(num, 'id', 'name', 'products')
            var object = {id: pick.id, name: pick.name, serials: _.map(pick.products, 'serial')}
            return object
        }))
    },
    findIndex(data){
        console.log(data)
        var vm = this;
        var found = _.findIndex(this.data.brands, data)
        vm.data.editData = vm.data.brands[found];
    },
    dataEdit(){
        var vm = this
        var DATA = vm.data.editData
        var found = _.findIndex(this.data.brands, {id: DATA.id})
        this.data.brands[found].name = DATA.name;
    },
    deleteData(dataId){
        var found = _.find(this.data.brands, ['id', dataId])
        if(typeof found == 'object') {
            var index = _.indexOf(this.data.brands, found)
            this.data.brands.splice(index, 1)
        }
    }
}
