/**
 * Created by Edward Lance Lorilla on 5/18/2017.
 */
export default{
    data: {
        categories: [],
        editData:{}
    },
    dataReceive(id, data){
        var vm = this
        vm.data.categories.unshift({id: id, name: data})

    },
    fetch(urlFetch){
        axios.get(urlFetch).then(response => this.data.categories = _.map(response.data.data, function (num) {
            var pick = _.pick(num, 'id', 'name', 'products')
            var object = {id: pick.id, name: pick.name, serials: _.map(pick.products, 'serial')}
            return object
        }))
    },
    findIndex(data){
        var vm = this;
        var found = _.findIndex(this.data.categories, data)
        vm.data.editData = vm.data.categories[found];
    },
    dataEdit(){
        var vm = this
        var DATA = vm.data.editData
        var found = _.findIndex(this.data.categories, {id: DATA.id})
        this.data.categories[found].name = DATA.name;
    },
    deleteData(dataId){
        var found = _.find(this.data.categories, ['id', dataId])
        if(typeof found == 'object') {
            var index = _.indexOf(this.data.categories, found)
            this.data.categories.splice(index, 1)
        }
    }
}
