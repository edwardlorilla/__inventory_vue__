<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'quantity', 'serial','type', 'manufacture_id', 'description_id', 'location_id', 'category_id', 'brand_id', 'status_id','assetSerial'
    ];
    public function transfers()
    {
        return $this->hasMany(Tranfer::class);
    }
    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function manufacture()
    {
        return $this->belongsTo(Manufacture::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function description()
    {
        return $this->belongsTo(Description::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }
    public function photos(){
        return $this->belongsToMany(\App\Photo::class);
    }
    public function checkouts(){
        return $this->belongsToMany(\App\CheckOut::class, 'checkout_product');
    }
}
