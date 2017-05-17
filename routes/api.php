<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('brands', 'api\BrandControllers');
Route::resource('categories', 'api\CategoriesControllers');
Route::resource('descriptions', 'api\DescriptionsControllers');
Route::resource('locations', 'api\LocationsControllers');
Route::resource('manufactures', 'api\ManufacturesControllers');
Route::resource('transfers', 'api\TransfersControllers');
Route::get('transfers/{transfers}/history', 'api\TransfersControllers@history');
Route::post('products/imports', 'api\ProductsControllers@importData');
Route::resource('products', 'api\ProductsControllers');