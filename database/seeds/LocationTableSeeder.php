<?php

use Illuminate\Database\Seeder;

class LocationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('locations')->truncate();
        $location = [
            [
                'name' => 'Luisa 1st flr',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Luisa 2nd flr',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Luisa 3rd flr',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Luisa 4th flr',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Filandial 1st flr',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Filandial 2nd flr',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Filandial 3rd flr',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Filandial 4th flr',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Front Storage',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ],
            [
                'name' => 'Back Storage',
                'BU' => 'PHAM14',
                'OU' => 'P4',
            ]

        ];
        DB::table('locations')->insert($location);
    }
}
