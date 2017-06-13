<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTranfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tranfers', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('location_id')->default(0);
            $table->integer('product_id')->unsigned();
            $table->foreign('product_id')
                ->references('id')->on('products')
                ->onDelete('cascade');
            $table->integer('action_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tranfers');
    }
}
