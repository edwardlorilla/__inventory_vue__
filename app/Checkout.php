<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Checkout extends Model
{
    protected $fillable = [
        'in','out'
    ];
    public function products(){
        return $this->belongsToMany(\App\Product::class, 'checkout_product');
    }
}
