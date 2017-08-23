<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('actions')->truncate();
        $status = [
            [
                'id' => 1,
                'name'=> 'TRANSFERS'
            ],
            [
                'id' => 2,
                'name'=> 'DEPLOY'
            ],
            [
                'id' => 3,
                'name'=> 'REPLACED'
            ]
        ];
        DB::table('actions')->insert($status);
    }
}
