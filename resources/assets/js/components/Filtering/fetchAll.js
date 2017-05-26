/**
 * Created by Edward Lance Lorilla on 5/20/2017.
 */
import brands from './brandStates.js';
import category from './categoryStates.js';
import description from './descriptionStates.js';
import location from './locationState.js';
import manufacture from './ManufacturesStates.js';
import product from './productStates.js';
import status from './statusStates';
import action from './actionStates';
export default{

    fetchAll(){
        var that = this;
        axios.all([
            axios.get('../../api/brands'),
            axios.get('../../api/categories'),
            axios.get('../../api/descriptions'),
            axios.get('../../api/manufactures'),
            axios.get('../../api/locations'),
            axios.get('../../api/products'),
            axios.get('../../api/statuses'),
            axios.get('../../api/actions')
        ])
        .then(axios.spread(function (dataBrands, dataCategories, dataDescription, dataManufactures, dataLocations, dataProducts, dataStatus,dataAction) {
            brands.data.brands = dataBrands.data.data
            category.data.categories = dataCategories.data.data
            description.data.descriptions = dataDescription.data.data
            manufacture.data.brands = dataManufactures.data.data
            location.data.locations = dataLocations.data.data
            product.data.brands = dataProducts.data.data
            status.data.brands = dataStatus.data.data
            action.data.brands = dataAction.data.data
        }));
    },
}
