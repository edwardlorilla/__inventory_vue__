<?php

namespace App\Http\Controllers\api;
use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;

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
        }, 'category.photo' => function($query) {
            $query->select(['id', 'name']);
        }, 'status' => function($query) {
            $query->select(['id', 'name']);
        },  'brand' => function($query) {
            $query->select(['id', 'name']);
        }] )->orderBy('updated_at','desc')->get();
        return response()->json([
            'data' => $brands
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
                   'type' => $request->input('products.'.$key.'.type'),
                   'quantity' => $request->input('products.'.$key.'.quantity'),
                   'manufacture_id' => $request->input('products.'.$key.'.manufacture'),
                   'description_id' => $request->input('products.'.$key.'.description'),
                   'location_id' => $request->input('products.'.$key.'.location'),
                   'category_id' => $request->input('products.'.$key.'.category'),
                   'brand_id' => $request->input('products.'.$key.'.model'),
                   'status_id' => $request->input('products.'.$key.'.status'),
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
        $data = \App\Product::with([
        'checkouts' => function($query) {
            $query->orderBy('created_at', 'desc');
        },
        'photos',
        'location' => function($query) {
            $query->select(['id', 'name']);
        },'manufacture' => function($query) {
            $query->select(['id', 'name']);
        },'description' => function($query) {
            $query->select(['id', 'name']);
        },'status' => function($query) {
            $query->select(['id', 'name']);
        }, 'category.photo' => function($query) {
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
		/*//dd(count($request->input('products.*')) == 12);
		//dd(count($request->input('products.*')));
		//dd($request->input('products'));
        //dd($request->input('products'));
        //($collection->only(['serial', 'type', 'quantity','manufacture_id', 'description_id', 'location_id', 'category_id', 'brand_id', 'status_id', 'assetSerial']));
        //dd($productArray->intersect([$only])->all());

        //$intersect = collect($onlys)->diffKeys($only)->all();
        //dd( $intersect->all());
        //dd(array_diff_assoc($only, $onlys));*/
        $quantity = $request->input('products.quantity');
        $quantityClone = $request->input('products.quantityClone');
        $checkIn = new \App\Checkout();
        $product = \App\Product::where('id', $id)->first();
        if($quantity > $quantityClone){
            $checkinData = $quantity-$quantityClone;
            $saveData = $checkIn->create(['in' => $checkinData ]);
            $product->checkouts()->save($saveData);
        }else{
            $checkinData = $quantityClone-$quantity;
            $saveData = $checkIn->create(['out' => $checkinData ]);
            $product->checkouts()->save($saveData);
        }
        $collection = collect($request->input('products'));
        $collections = collect($product->toArray());
        $only = $collection->only(['serial', 'type', 'quantity','manufacture_id', 'description_id', 'location_id', 'category_id', 'brand_id', 'status_id', 'assetSerial'])->all();
        $onlys = $collections->only(['serial', 'type', 'quantity','manufacture_id', 'description_id', 'location_id', 'category_id', 'brand_id', 'status_id', 'assetSerial'])->all();
            $update = array_diff_assoc($only, $onlys);
            if(collect($update)->isNotEmpty()){
                $product->update($update);
            }

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

    public function uploadImage(Request $request, $product)
    {
        $productId = $product;
        $productData = \App\Product::where('id', $productId )->first();
        $manager = new ImageManager();
        if ($file = $request->file('file')){
            $resize = $manager->make($file->getRealPath())->fit(100)->encode('jpg');
            $hash = md5($resize->__toString());
            $path = "images/{$hash}.jpg";
            $resize->save(public_path($path));
            $photo = \App\Photo::create(['name'=>"{$hash}.jpg"]);
            $productData->photos()->save($photo);
        }


    }

    public function checkin(Request $request, $id)
    {
//        $checkin = $request->q
//uantity;
//
//        \App\Product::where('id', $id)->update(['quantity' =>$request->input('quantity')] );

    }
}
