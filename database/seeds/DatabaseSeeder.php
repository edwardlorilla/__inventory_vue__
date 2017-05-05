<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(BrandTableSeeder::class);
        $this->call(CategoryTableSeeder::class);
        $this->call(DescriptionTableSeeder::class);
        $this->call(LocationTableSeeder::class);
        $this->call(ManufactureTableSeeder::class);
        $this->call(ProductTableSeeder::class);
        $this->call(TransferTableSeeder::class);
    }
}
