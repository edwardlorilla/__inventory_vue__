<?php

use Illuminate\Database\Seeder;

class TransferTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        DB::table('tranfers')->truncate();
        $tranfers = [
            [
                'product_id' => rand(1, 5),
                'location_id' => rand(1, 5),
                'action_id' => rand(1, 3),
            ], [
                'product_id' => rand(1, 5),
                'location_id' => rand(1, 5),
                'action_id' => rand(1, 3),
            ], [
                'product_id' => rand(1, 5),
                'location_id' => rand(1, 5),
                'action_id' => rand(1, 3),
            ], [
                'product_id' => rand(1, 5),
                'location_id' => rand(1, 5),
                'action_id' => rand(1, 3),
            ],
        ];
        DB::table('tranfers')->insert($tranfers);
    }
}
