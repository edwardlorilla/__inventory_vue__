<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $uploads = '/images/';
    protected $fillable = [
        'name',
    ];
    public function categories()
    {
        return $this->hasMany(Category::class);
    }
    public function getNameAttribute($photo)
    {
        return $this->uploads . $photo;
    }
    public function products(){
        return $this->belongsToMany(\App\Product::class);
    }
}
