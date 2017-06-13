/**
 * Created by Edward Lance Lorilla on 5/18/2017.
 */
export default{
    data: {
        locations: [],
        editData:{}
    },
    dataReceive(object){
        var vm = this
        vm.data.locations.unshift(object)
    },
    dataEdit(data){
        console.log(data)
        var found = _.findIndex(this.data.locations, data.value)
        this.data.locations[found].name = data.name;
        this.data.locations[found].BU = data.BU;
        this.data.locations[found].OU = data.OU;
        this.data.locations[found].lastLocation = data.lastLocation;
    },
    fetch(urlFetch){
        axios.get(urlFetch).then(response => this.data.locations = _.map(response.data.data, function (num) {
            var pick = _.pick(num, 'id', 'name', 'products', 'BU', 'OU', 'lastLocation')
            var object = {id: pick.id, name: pick.name,BU: pick.BU, OU: pick.OU, lastLocation: pick.lastLocation, serials: _.map(pick.products, 'serial')}
            return object
        }));
    },
    findIndex(data){
        var vm = this;
        var found = _.findIndex(this.data.locations, data)
        vm.data.editData = vm.data.locations[found];
    },
    deleteData(dataId){
        var found = _.find(this.data.locations, ['id', dataId])
        if(typeof found == 'object') {
            var index = _.indexOf(this.data.locations, found)
            this.data.locations.splice(index, 1)
        }
    }
}