<?php

use Illuminate\Database\Seeder;

class BrandTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brands')->truncate();
        $brands = [
            [
                'name' => rand(1000, 2000)
                ],
            [
                'name' => rand(1000, 2000)
                ],
            [
                'name' => rand(1000, 2000)
                ],
            ];
        DB::table('brands')->insert($brands);
    }
}
