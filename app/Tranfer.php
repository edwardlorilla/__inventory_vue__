<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tranfer extends Model
{
        protected $fillable = ['product_id', 'location_id', 'status'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }
}
