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
const Categories = resolve => require(['./components/Categories/index.vue'], resolve);
const createCategories = resolve => require(['./components/Categories/create.vue'], resolve);
const Descriptions = resolve => require(['./components/Descriptions/index.vue'], resolve);
const createDescriptions = resolve => require(['./components/Descriptions/create.vue'], resolve);
const Locations = resolve => require(['./components/Locations/index.vue'], resolve);
const createLocations = resolve => require(['./components/Locations/create.vue'], resolve);
const Manufactures = resolve => require(['./components/Manufactures/index.vue'], resolve);
const createManufactures = resolve => require(['./components/Manufactures/create.vue'], resolve);
const Products = resolve => require(['./components/Products/index.vue'], resolve);
const ProductEdit = resolve => require(['./components/Products/edit.vue'], resolve);
const ProductShow = resolve => require(['./components/Products/show.vue'], resolve);
const ProductHistory = resolve => require(['./components/Products/History.vue'], resolve);
const createProducts = resolve => require(['./components/Products/create.vue'], resolve);
const createTransfers = resolve => require(['./components/Transfers/create.vue'], resolve);
export default [
    {
        path: '/brands',
        component: Brands,
        name: 'brands',

    },
    {
        path: '/brands/create',
        component: createBrands,
        name: 'createBrands',
    },
    //products
    {
        path: '/products',
        component: Products,
        name: 'products',

    },
    {
        path: '/products/:id', component: ProductShow,
    },
    {
        path: '/products/:id/edit', component: ProductEdit
    },
    {
        path: '/products/:id/history', component: ProductHistory
    },
    {
        path: '/products/create',
        component: createProducts,
        name: 'createProducts',
    },
    //end of products
    {
        path: '/categories',
        component: Categories,
        name: 'categories',
        meta: {
            progress: {
                func: [
                    {call: 'color', modifier: 'temp', argument: '#E91E63'},
                    {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                    {call: 'location', modifier: 'temp', argument: 'top'},
                    {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                ]
            }
        }
    },
    {
        path: '/categories/create',
        component: createCategories,
        name: 'createCategories',
        meta: {
            progress: {
                func: [
                    {call: 'color', modifier: 'temp', argument: '#E91E63'},
                    {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                    {call: 'location', modifier: 'temp', argument: 'top'},
                    {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                ]
            }
        }
    },
    {
        path: '/descriptions',
        component: Descriptions,
        name: 'descriptions',
        meta: {
            progress: {
                func: [
                    {call: 'color', modifier: 'temp', argument: '#E91E63'},
                    {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                    {call: 'location', modifier: 'temp', argument: 'top'},
                    {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                ]
            }
        }
    },
    {
        path: '/descriptions/create',
        component: createDescriptions,
        name: 'createDescriptions',
        meta: {
            progress: {
                func: [
                    {call: 'color', modifier: 'temp', argument: '#E91E63'},
                    {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                    {call: 'location', modifier: 'temp', argument: 'top'},
                    {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                ]
            }
        }
    },
    {
        path: '/locations',
        component: Locations,
        name: 'locations',
        meta: {
            progress: {
                func: [
                    {call: 'color', modifier: 'temp', argument: '#E91E63'},
                    {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                    {call: 'location', modifier: 'temp', argument: 'top'},
                    {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                ]
            }
        }
    },
    {
        path: '/locations/create',
        component: createLocations,
        name: 'createLocations',
        meta: {
            progress: {
                func: [
                    {call: 'color', modifier: 'temp', argument: '#E91E63'},
                    {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                    {call: 'location', modifier: 'temp', argument: 'top'},
                    {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                ]
            }
        }
    },
    {
        path: '/manufactures',
        component: Manufactures,
        name: 'manufactures',
        meta: {
            progress: {
                func: [
                    {call: 'color', modifier: 'temp', argument: '#E91E63'},
                    {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                    {call: 'location', modifier: 'temp', argument: 'top'},
                    {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                ]
            }
        }
    },
    {
        path: '/manufactures/create',
        component: createManufactures,
        name: 'createManufactures',
        meta: {
            progress: {
                func: [
                    {call: 'color', modifier: 'temp', argument: '#E91E63'},
                    {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                    {call: 'location', modifier: 'temp', argument: 'top'},
                    {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                ]
            }
        }
    },
    {
        path: '/transfers/create',
        component: createTransfers,
        name: 'createTransfers',
        meta: {
            progress: {
                func: [
                    {call: 'color', modifier: 'temp', argument: '#E91E63'},
                    {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                    {call: 'location', modifier: 'temp', argument: 'top'},
                    {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                ]
            }
        }
    },

]