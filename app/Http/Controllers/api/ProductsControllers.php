<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductsControllers extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $brands = \App\Product::with([
        'location' => function($query) {
            $query->select(['id', 'name']);
        },
        'manufacture' => function($query) {
            $query->select(['id', 'name']);
        },'description' => function($query) {
            $query->select(['id', 'name']);
        }, 'category' => function($query) {
            $query->select(['id', 'name']);
        },  'brand' => function($query) {
            $query->select(['id', 'name']);
        }] )->orderBy('updated_at','desc')->get();
        return response()->json([
            'products' => $brands
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       foreach ($request->products as $key => $value) {
           \App\Product::updateOrCreate(
               ['serial' => $request->input('products.'.$key.'.serial')],
               [
                   'serial' => $request->input('products.'.$key.'.serial'),
                   'quantity' => $request->input('products.'.$key.'.quantity'),
                   'manufacture_id' => $request->input('products.'.$key.'.manufacture'),
                   'description_id' => $request->input('products.'.$key.'.description'),
                   'location_id' => $request->input('products.'.$key.'.location'),
                   'category_id' => $request->input('products.'.$key.'.category'),
                   'brand_id' => $request->input('products.'.$key.'.model'),
                   'status' => $request->input('products.'.$key.'.status'),
                   'assetSerial' => $request->input('products.'.$key.'.assetSerial')
               ]
           );
       }

    }
    public function importData(Request $request)
    {

        $manufacture = [] ;
        $description = [];
        $category = [];
        $model = [];
        $productsConvert = [];
        foreach ($request->products as $key => $value) {
            $manufacture[$key] = \App\Manufacture::updateOrCreate(
                ['name' => $request->input('products.'.$key.'.manufacture')],
                [
                    'name' =>  $request->input('products.'.$key.'.manufacture')
                ]
            )->id;
            $description[$key] = \App\Description::updateOrCreate(
                ['name' => $request->input('products.'.$key.'.description')],
                [
                    'name' =>  $request->input('products.'.$key.'.description')
                ]
            )->id;
            $category[$key] = \App\Category::updateOrCreate(
                ['name' => $request->input('products.'.$key.'.category')],
                [
                    'name' =>  $request->input('products.'.$key.'.category')
                ]
            )->id;
            $model[$key]= \App\Brand::updateOrCreate(
                ['name' => $request->input('products.'.$key.'.model')],
                [
                    'name' =>  $request->input('products.'.$key.'.model')
                ]
            )->id;

            $productsConvert[] =
            [
                'serial' => $request->input('products.'.$key.'.serial'),
                'quantity' => $request->input('products.'.$key.'.quantity'),
                'manufacture_id' => $manufacture[$key],
                'description_id' => $description[$key],
                'category_id' => $category[$key],
                'brand_id' => $model[$key],
                'status' =>  1,
                'assetSerial' => $request->input('products.'.$key.'.assetSerial')
            ];
        }

        return response()
            ->json($productsConvert);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = \App\Product::with(['location' => function($query) {
            $query->select(['id', 'name']);
        },'manufacture' => function($query) {
            $query->select(['id', 'name']);
        },'description' => function($query) {
            $query->select(['id', 'name']);
        }, 'category' => function($query) {
            $query->select(['id', 'name']);
        },  'brand' => function($query) {
            $query->select(['id', 'name']);
        }] )->where('id' , $id)->first();
        return response()->json([
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

       \App\Product::where('id', $id)->update(
            [
                'serial' => $request->input('products.serial'),
                'quantity' => $request->input('products.quantity'),
                'manufacture_id' => $request->input('products.manufacture'),
                'description_id' => $request->input('products.description'),
                'location_id' => $request->input('products.location'),
                'category_id' => $request->input('products.category'),
                'brand_id' => $request->input('products.model'),
                'status' => $request->input('products.status'),
                'assetSerial' => $request->input('products.assetSerial')
            ]
        );
        return response()->json([
            'data' => ['message' => 'Tech Item ' . $request->input('products.serial') . ' has updated' ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = \App\Product::where('id', $id)->first();

        $product->delete();

    }
}
