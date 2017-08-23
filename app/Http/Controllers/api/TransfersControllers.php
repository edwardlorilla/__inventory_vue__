<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class TransfersControllers extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $brands = \App\Tranfer::with([
            'product' => function($query) {
                $query->select(['id', 'serial']);
            },
            'location' => function($query) {
                $query->select(['id', 'lastLocation', 'name']);
            },
            'action' => function($query) {
                $query->select(['id', 'name']);
            }

        ])->orderBy('created_at','desc')->get();
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
     * @return array
     */
    public function store(Request $request)
    {
        $productid = [];
        $data = [];
        if (count($request->all()) == 11) {
            foreach ($request->serial as $key => $value) {
                $productid[] = \App\Product::updateOrCreate(
                    ['serial' => $request->serial[$key]],
                    [
                        'serial' => $request->serial[$key],
                        'type' => $request->type[$key],
                        'quantity' => $request->quantity[$key],
                        'manufacture_id' => $request->manufactures[$key],
                        'description_id' => $request->description[$key],
                        'location_id' => $request->location[$key],
                        'category_id' => $request->category[$key],
                        'brand_id' => $request->model[$key],
                        'status_id' => $request->action[$key]
                    ]
                )->id;
            }
        }else {
            $productid = $request->serial;
        }



        $products = \App\Product::where('id', $productid[0])->select('location_id' )->first();
//        $products);
//        dd($products);
//        $location = \App\Location::where('id', $request->location[0])->select('BU', 'OU', 'name')->first();

////        dd($product->location->name);
        $lastI4 = $products->location->BU;
        $lastI6 = $products->location->OU;
        $lastK6 = $products->location->name;


        foreach ($request->serial    as $key => $value) {
            $checkOut = new \App\Checkout();
            $product = \App\Product::where('id', $productid[$key])->first();
            $location = \App\Location::where('id', $request->location[$key])->first();
            $location->select('lastLocation')->update(['lastLocation' => $lastK6]);

            \App\Tranfer::create(['product_id' => $productid[$key], 'location_id' => $request->location[$key], 'action_id' => $request->status[$key]])->toArray();


            $status = '';
            $serial = '';
            $quantity = 1;
            if ((int)$request->status[$key] === 1) {
                $status = 'TRANSFERS';
            } elseif ((int)$request->status[$key] === 2) {
                $status = 'DEPLOY';
            } elseif ((int)$request->status[$key] === 3) {
                $status = 'REPLACED';
            }


            if ($product->serial) {
                $serial = $product->serial;
            } else {
                $serial = '';
            }
            //

            if ($product->serial && $product->quantity == 1) {
                $quantity = 1;
            } else {
                $quantity = $request->quantity[$key];
                $checkOut = \App\Checkout::create(['out' => $quantity ]);
                $product->checkouts()->save($checkOut);

            }
            $currentLocation = $request->location[$key] ? $request->location[$key] : '';
            $data[] = [
                'Record #' => $key + 1,
                'Asset ID' => '',
                'Asset Category' => $product->category ? $product->category->name : '',
                'Description' => $product->description ? $product->description->name : '',
                'Tag Number' => '',
                'Serial Number' => $serial,
                'Quantity' => (int)$quantity,
                'UOM' => '',
                'PO#' => '',
                'Invoice#' => '',
                'Manufacture' => $product->manufacture ? $product->manufacture->name : '',
                'Model' => $product->brand ? $product->brand->name : '',
                'Status' => $status,
                'OU #' => '',
                'Dept.' => '',
                'Location' => $location ? $location->name : '',
                'Comments' => $status,
            ];

            \App\Product::where('id', $productid[$key])->update(['location_id' => $request->location[$key]]);
        }


        /*
             * * I4 - BU Transferring From: PHAM14 to PHAM14
         * * I6 - Operating Unit Transferring From: P91 TO P91
         * * K6 - From: GTI Front Storage to Fil2 4th Flr Wireline
         * */
        Excel::load(storage_path('excel/exports/CFAT_APPROVAL.xlsx'), function ($reader) use ($data, $lastI4, $lastI6, $lastK6, $location) {
            $reader->sheet('CFAT 1ST FLOOR LUISA', function ($sheet) use ($data, $lastI4, $lastI6, $lastK6, $location) {
                $currentI4 = $location->BU;
                $currentI6 = $location->OU;
                $currentK6 = $location->name;
                $sheet->setOrientation('landscape');
                $sheet->setCellValue('I4', 'BU Transferring From: ' . $lastI4 . ' to ' . $currentI4);
                $sheet->setCellValue('I5', 'Operating Unit Transferring: ' . $lastI6 . ' to ' . $currentI6);
                $sheet->setCellValue('K6', 'From: ' . $lastK6 . ' to ' . $currentK6);
                $sheet->setCellValue("B3", Carbon::now()->toFormattedDateString());
                $sheet->fromArray($data, null, 'A12', false, false);

            });

        })->download('xlsx');


        return redirect('http://' . $request->server('HTTP_HOST') .'/transfers/create');


/*        Excel::create('Report2016', function($excel) {

            // Set the title
            $excel->setTitle('My awesome report 2016');

            // Chain the setters
            $excel->setCreator('Me')->setCompany('Our Code World');

            $excel->setDescription('A demonstration to change the file properties');

            $data = [12, "Hey", 123, 4234, 5632435, "Nope", 345, 345, 345, 345];

            $excel->sheet('Sheet 1', function ($sheet) use ($data) {
                $sheet->setOrientation('landscape');
                $sheet->fromArray($data, NULL, 'A3');
            });

        })->download('xlsx');
        return redirect('http://' . $request->server('HTTP_HOST') .'/transfers/create');*/
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    
    public function history($transfer)
    {
       return  \App\Tranfer::with('product', 'location')->where('product_id', $transfer)->orderBy('updated_at', 'desc')->get();
    }

    public function getSerial($serial)
    {
        $serial = \App\Product::where('serial',$serial )->first();
        return response()->json([
            'data' => $serial
        ]);
    }
}
