<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->truncate();
        $categories = [
            [
                'name' => 'Tech Items'
            ], [
                'name' => 'Tech Items'
            ], [
                'name' => 'Tech Items'
            ], [
                'name' => 'Tech Items'
            ],
        ];
        DB::table('categories')->insert($categories);
    }
}
