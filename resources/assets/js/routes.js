/**
 * Created by Edward Lance Lorilla on 4/17/2017.
 */

/*import createBrands from './components/Brands/create.vue';
import Categories from './components/Categories/index.vue';
import createCategories from './components/Categories/create.vue';
import Descriptions from './components/Descriptions/index.vue';
import createDescriptions from './components/Descriptions/create.vue';
import Locations from './components/Locations/index.vue';
import createLocations from './components/Locations/create.vue';
import Manufactures from './components/Manufactures/index.vue';
import createManufactures from './components/Manufactures/create.vue';
import Products  from './components/Products/index.vue';
import createProducts from './components/Products/create.vue';
import createTransfers from './components/Transfers/create.vue';*/
const Brands = resolve => {
    require.ensure(['./components/Brands/index.vue'], () => {
        resolve(require('./components/Brands/index.vue'))
    })
}
// const Brands = resolve => require(['./components/Brands/index.vue'], resolve);
const createBrands = resolve => require(['./components/Brands/create.vue'], resolve);
const editBrands = resolve => require(['./components/Brands/edit.vue'], resolve);

const Categories = resolve => require(['./components/Categories/index.vue'], resolve);
const createCategories = resolve => require(['./components/Categories/create.vue'], resolve);
const editCategories = resolve => require(['./components/Categories/edit.vue'], resolve);

const Descriptions = resolve => require(['./components/Descriptions/index.vue'], resolve);
const createDescriptions = resolve => require(['./components/Descriptions/create.vue'], resolve);
const editDescriptions = resolve => require(['./components/Descriptions/edit.vue'], resolve);

const Locations = resolve => require(['./components/Locations/index.vue'], resolve);
const createLocations = resolve => require(['./components/Locations/create.vue'], resolve);
const editLocations = resolve => require(['./components/Locations/edit.vue'], resolve);

const Manufactures = resolve => require(['./components/Manufactures/index.vue'], resolve);
const createManufactures = resolve => require(['./components/Manufactures/create.vue'], resolve);
const editManufactures = resolve => require(['./components/Manufactures/edit.vue'], resolve);

const Products = resolve => require(['./components/Products/index.vue'], resolve);
const ProductEdit = resolve => require(['./components/Products/edit.vue'], resolve);
const ProductShow = resolve => require(['./components/Products/show.vue'], resolve);
const ProductHistory = resolve => require(['./components/Products/History.vue'], resolve);
const createProducts = resolve => require(['./components/Products/create.vue'], resolve);

const createTransfers = resolve => require(['./components/Transfers/create.vue'], resolve);
const Transfers = resolve => require(['./components/Transfers/index.vue'], resolve);
const Error404 = resolve => require(['./components/Error/404.vue'], resolve);
const Contact = resolve => require(['./components/Contact/Contacts.vue'], resolve);
export default [
    {
        path: '/brands',
        component: Brands,
        name: 'brands',

    },{
        path: '*',
        component: Transfers,
        name: '404',

    },{
        path: '/developers',
        component: Contact,
        name: 'developer',

    },
    {
        path: '/brands/create',
        component: createBrands,
        name: 'createBrands',
    },
    {
        path: '/brands/:id/edit',
        component: editBrands,
        name: 'editBrands',
    },
    //products
    {
        path: '/techitems/create',
        component: createProducts,
        name: 'createProducts',
    },
    {
        path: '/techitems',
        component: Products,
        name: 'products',

    },
    {
        path: '/techitem/import', component: ProductShow,
    },
    {
        path: '/techitem/:id/edit', component: ProductEdit
    },
    {
        path: '/techitem/:id/history', component: ProductHistory
    },

    //end of products
    {
        path: '/categories',
        component: Categories,
        name: 'categories'
    },
    {
        path: '/categories/create',
        component: createCategories,
        name: 'createCategories'
    },
    {
        path: '/categories/:id/edit',
        component: editCategories,
        name: 'editCategories'
    },
    {
        path: '/descriptions',
        component: Descriptions,
        name: 'descriptions'
    },
    {
        path: '/descriptions/create',
        component: createDescriptions,
        name: 'createDescriptions'
    },
    {
        path: '/descriptions/:id/edit',
        component: editDescriptions,
        name: 'editDescriptions'
    },
    {
        path: '/locations',
        component: Locations,
        name: 'locations'
    },
    {
        path: '/locations/create',
        component: createLocations,
        name: 'createLocations'
    },
    {
        path: '/locations/:id/edit',
        component: editLocations,
        name: 'editLocations'
    },
    {
        path: '/manufactures',
        component: Manufactures,
        name: 'manufactures'
    },
    {
        path: '/manufactures/create',
        component: createManufactures,
        name: 'createManufactures'
    },
    {
        path: '/manufactures/:id/edit',
        component: editManufactures,
        name: 'editManufactures'
    },
    {
        path: '/transfers/create',
        component: createTransfers,
        name: 'createTransfers'
    },
    {
        path: '/transfers',
        component: Transfers,
        name: 'indexTransfers'
    },

]