<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoriesControllers extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $brands = \App\Category::with(['products', 'photo' => function($query){ $query->select(['id', 'name']);}])->orderBy('created_at','desc')->get();
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
        $name = $request->name;
        if ($request->image){
            $photo = $this->getPhoto($request);
        }
        $brands = \App\Category::create([ 'name' => $name, 'photo_id' => $request->image ?  $photo->id : null ]);
        return response()->json([
            'data' => $brands,  'message' => 'brands ' .$name . 'has been created'
        ]);
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
        $data = \App\Category::where('id' , $id)->first();
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
        $photo = $this->getPhoto($request);
        \App\Category::where('id', $id)->update(
            [
                'name' => $request->input('name'),
                'photo_id' => $photo->id
            ]
        );
        return response()->json([
            'message' => 'Tech Item ' . $request->input('name') . ' has updated', 'getImageName' =>$photo->name
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
        $data = \App\Category::where('id', $id)->first();
        $data->delete();
    }

    /**
     * @param Request $request
     * @return \App\Photo
     */
    public function getPhoto(Request $request)
    {
        $photo = new \App\Photo();
        if ($file = $request->image) {
            list($type, $imageData) = explode(';', $request->image);
            list(, $extension) = explode('/', $type);
            list(, $imageData) = explode(',', $imageData);
            $fileName = uniqid() . '.' . $extension;
            $source = fopen($request->image, 'r');
            $destination = fopen('images/' . $fileName, 'w');
            stream_copy_to_stream($source, $destination);
            fclose($source);
            fclose($destination);
            $photo = \App\Photo::create(['name' => $fileName]);
            return $photo;
        }
        return $photo;
    }
}
