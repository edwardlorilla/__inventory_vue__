<?php

use Illuminate\Database\Seeder;

class DescriptionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('descriptions')->truncate();
        $descriptions = [
            [
                'name' => 'CPU'
            ],
            [
                'name' => 'Laptop'
            ],
            [
                'name' => 'Monitor'
            ],
            [
                'name' => 'System Unit'
            ],

        ];
        DB::table('descriptions')->insert($descriptions);
    }
}
