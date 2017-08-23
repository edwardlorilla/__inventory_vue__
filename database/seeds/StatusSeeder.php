<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('statuses')->truncate();
        $status = [
            [
                'id' => 1,
                'name'=> 'WORKING'
            ],
            [
                'id' => 0,
                'name'=> 'DEFECTIVE'
            ]
        ];
        DB::table('statuses')->insert($status);
    }
}
