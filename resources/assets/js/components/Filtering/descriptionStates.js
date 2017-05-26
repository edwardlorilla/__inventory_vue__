/**
 * Created by Edward Lance Lorilla on 5/18/2017.
 * descriptionStates
 */
export default{
    data: {
        descriptions: [],
        editData:{}
    },
    dataReceive(id, data, title){
        var vm = this
        vm.data.descriptions.unshift({id: id, name: data})

    },
    dataEdit(data){
        var found = _.findIndex(this.data.descriptions, data)
        this.data.descriptions[found].name = data.name;
    },
    fetch(urlFetch){
        axios.get(urlFetch).then(response => this.data.descriptions = _.map(response.data.data, function (num) {
            var pick = _.pick(num, 'id', 'name', 'products')
            var object = {id: pick.id, name: pick.name, serials: _.map(pick.products, 'serial')}
            return object
        }));
    },
    findIndex(data){
        var vm = this;
        var found = _.findIndex(this.data.descriptions, data)
        vm.data.editData = vm.data.descriptions[found];
    },
    deleteData(dataId){
        var found = _.find(this.data.descriptions, ['id', dataId])
        if(typeof found == 'object') {
            var index = _.indexOf(this.data.descriptions, found)
            this.data.descriptions.splice(index, 1)
        }
    }
}