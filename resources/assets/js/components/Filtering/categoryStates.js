/**
 * Created by Edward Lance Lorilla on 5/18/2017.
 */
export default{
    data: {
        categories: [],
        editData:{}
    },
    dataReceive(recieveData){
        var vm = this
        var rd = recieveData
        // it reieve the data that pass hrought the create component and make an object of everything that end-user enter if there is none the value the variable the temporarily null
        vm.data.categories.unshift({id: rd.id , name: rd.name, photo: _.isEmpty(rd.photo) ? { name: '/images/images.jpg'} : rd.photo})

    },
    fetch(urlFetch){
        axios.get(urlFetch).then(response => this.data.categories = _.map(response.data.data, function (num) {
            var pick = _.pick(num, 'id', 'name', 'products', 'photo')
            var object = {id: pick.id, name: pick.name, serials: _.map(pick.products, 'serial'), photo: _.isEmpty(pick.photo) ?  { name : '/images/images.jpg'} : pick.photo}
            return object
        }))
    },
    findIndex(data){
        var vm = this;
        var found = _.findIndex(this.data.categories, data)
        vm.data.editData = vm.data.categories[found];
    },

    dataEdit(getImage){
        var vm = this
        var DATA = vm.data.editData
        var found = _.findIndex(this.data.categories, {id: DATA.id})
        /**
         * it override the existing data, and replaced the updated data
         */
        this.data.categories[found].name = DATA.name;
        if(this.data.categories[found].photo){
            this.data.categories[found].photo.name = getImage.getImageName;
        }
    },
    deleteData(dataId){
        /*
            it find the data using id of given id and once it found and check if the data is type of object then delete
         */
        var found = _.find(this.data.categories, ['id', dataId])
        if(typeof found == 'object') {
            var index = _.indexOf(this.data.categories, found)
            this.data.categories.splice(index, 1)
        }
    }
}
