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
                    'id'=>1,
                    'name'=>'1021',
                    'created_at'=>NULL,
                    'updated_at'=>NULL
                ],



                [
                    'id'=>2,
                    'name'=>'1944',
                    'created_at'=>NULL,
                    'updated_at'=>NULL
                ],



                [
                    'id'=>3,
                    'name'=>'1845',
                    'created_at'=>NULL,
                    'updated_at'=>NULL
                ],



                [
                    'id'=>4,
                    'name'=>'ed',
                    'created_at'=>'2017-05-02 21:06:54',
                    'updated_at'=>'2017-05-02 21:06:54'
                ],



                [
                    'id'=>5,
                    'name'=>'ed',
                    'created_at'=>'2017-05-02 21:15:21',
                    'updated_at'=>'2017-05-02 21:15:21'
                ],



                [
                    'id'=>6,
                    'name'=>'ed',
                    'created_at'=>'2017-05-02 21:17:14',
                    'updated_at'=>'2017-05-02 21:17:14'
                ],



                [
                    'id'=>7,
                    'name'=>'ed',
                    'created_at'=>'2017-05-02 21:22:40',
                    'updated_at'=>'2017-05-02 21:22:40'
                ],



                [
                    'id'=>8,
                    'name'=>'d',
                    'created_at'=>'2017-05-02 21:25:29',
                    'updated_at'=>'2017-05-02 21:25:29'
                ],



                [
                    'id'=>9,
                    'name'=>'edw',
                    'created_at'=>'2017-05-02 21:32:15',
                    'updated_at'=>'2017-05-02 21:32:15'
                ],



                [
                    'id'=>10,
                    'name'=>'ed',
                    'created_at'=>'2017-05-02 21:44:05',
                    'updated_at'=>'2017-05-02 21:44:05'
                ],



                [
                    'id'=>11,
                    'name'=>'d',
                    'created_at'=>'2017-05-02 21:50:29',
                    'updated_at'=>'2017-05-02 21:50:29'
                ],



                [
                    'id'=>12,
                    'name'=>'ed',
                    'created_at'=>'2017-05-02 21:54:11',
                    'updated_at'=>'2017-05-02 21:54:11'
                ],



                [
                    'id'=>13,
                    'name'=>'e',
                    'created_at'=>'2017-05-02 21:54:36',
                    'updated_at'=>'2017-05-02 21:54:36'
                ],



                [
                    'id'=>14,
                    'name'=>'e',
                    'created_at'=>'2017-05-02 21:55:21',
                    'updated_at'=>'2017-05-02 21:55:21'
                ],



                [
                    'id'=>15,
                    'name'=>'ds',
                    'created_at'=>'2017-05-02 22:01:44',
                    'updated_at'=>'2017-05-02 22:01:44'
                ],



                [
                    'id'=>16,
                    'name'=>'ds',
                    'created_at'=>'2017-05-02 22:11:13',
                    'updated_at'=>'2017-05-02 22:11:13'
                ],



                [
                    'id'=>17,
                    'name'=>'dv',
                    'created_at'=>'2017-05-02 22:34:38',
                    'updated_at'=>'2017-05-02 22:34:38'
                ],



                [
                    'id'=>18,
                    'name'=>'ed',
                    'created_at'=>'2017-05-02 22:44:32',
                    'updated_at'=>'2017-05-02 22:44:32'
                ],



                [
                    'id'=>19,
                    'name'=>'edwardd',
                    'created_at'=>'2017-05-03 07:15:02',
                    'updated_at'=>'2017-05-03 07:15:02'
                ],



                [
                    'id'=>20,
                    'name'=>'ed',
                    'created_at'=>'2017-05-03 10:40:59',
                    'updated_at'=>'2017-05-03 10:40:59'
                ],



                [
                    'id'=>21,
                    'name'=>'edward',
                    'created_at'=>'2017-05-07 06:06:51',
                    'updated_at'=>'2017-05-07 06:06:51'
                ],



                [
                    'id'=>22,
                    'name'=>'edwar',
                    'created_at'=>'2017-05-07 06:23:38',
                    'updated_at'=>'2017-05-07 06:23:38'
                ],



                [
                    'id'=>23,
                    'name'=>'sdf',
                    'created_at'=>'2017-05-07 06:25:03',
                    'updated_at'=>'2017-05-07 06:25:03'
                ],



                [
                    'id'=>24,
                    'name'=>'edwards',
                    'created_at'=>'2017-05-07 06:26:32',
                    'updated_at'=>'2017-05-07 06:26:32'
                ],



                [
                    'id'=>25,
                    'name'=>'dasd',
                    'created_at'=>'2017-05-07 06:27:33',
                    'updated_at'=>'2017-05-07 06:27:33'
                ],



                [
                    'id'=>26,
                    'name'=>'test2',
                    'created_at'=>'2017-05-07 06:29:21',
                    'updated_at'=>'2017-05-07 06:29:21'
                ],



                [
                    'id'=>27,
                    'name'=>'test3',
                    'created_at'=>'2017-05-07 06:38:04',
                    'updated_at'=>'2017-05-07 06:38:04'
                ],



                [
                    'id'=>28,
                    'name'=>'test',
                    'created_at'=>'2017-05-07 06:42:02',
                    'updated_at'=>'2017-05-07 06:42:02'
                ],



                [
                    'id'=>29,
                    'name'=>'test4',
                    'created_at'=>'2017-05-07 06:51:09',
                    'updated_at'=>'2017-05-07 06:51:09'
                ],



                [
                    'id'=>30,
                    'name'=>'est',
                    'created_at'=>'2017-05-07 06:53:18',
                    'updated_at'=>'2017-05-07 06:53:18'
                ],



                [
                    'id'=>31,
                    'name'=>'etst',
                    'created_at'=>'2017-05-07 07:10:34',
                    'updated_at'=>'2017-05-07 07:10:34'
                ],



                [
                    'id'=>32,
                    'name'=>'testse',
                    'created_at'=>'2017-05-07 07:16:06',
                    'updated_at'=>'2017-05-07 07:16:06'
                ],



                [
                    'id'=>33,
                    'name'=>'test5',
                    'created_at'=>'2017-05-07 07:17:37',
                    'updated_at'=>'2017-05-07 07:17:37'
                ],



                [
                    'id'=>34,
                    'name'=>'edward',
                    'created_at'=>'2017-05-07 08:07:16',
                    'updated_at'=>'2017-05-07 08:07:16'
                ],



                [
                    'id'=>35,
                    'name'=>'edward1',
                    'created_at'=>'2017-05-07 08:10:27',
                    'updated_at'=>'2017-05-07 08:10:27'
                ],



                [
                    'id'=>36,
                    'name'=>'EDWARD12',
                    'created_at'=>'2017-05-07 08:20:54',
                    'updated_at'=>'2017-05-07 08:20:54'
                ],



                [
                    'id'=>37,
                    'name'=>'EDWARD3',
                    'created_at'=>'2017-05-07 08:23:10',
                    'updated_at'=>'2017-05-07 08:23:10'
                ],



                [
                    'id'=>38,
                    'name'=>'ED1',
                    'created_at'=>'2017-05-07 08:23:40',
                    'updated_at'=>'2017-05-07 08:23:40'
                ],



                [
                    'id'=>39,
                    'name'=>'EASD',
                    'created_at'=>'2017-05-07 08:25:44',
                    'updated_at'=>'2017-05-07 08:25:44'
                ],



                [
                    'id'=>40,
                    'name'=>'edward2',
                    'created_at'=>'2017-05-07 08:30:21',
                    'updated_at'=>'2017-05-07 08:30:21'
                ],



                [
                    'id'=>41,
                    'name'=>'edward5',
                    'created_at'=>'2017-05-07 08:33:52',
                    'updated_at'=>'2017-05-07 08:33:52'
                ],



                [
                    'id'=>42,
                    'name'=>'edward5',
                    'created_at'=>'2017-05-07 08:37:18',
                    'updated_at'=>'2017-05-07 08:37:18'
                ],



                [
                    'id'=>43,
                    'name'=>'edward',
                    'created_at'=>'2017-05-07 08:37:43',
                    'updated_at'=>'2017-05-07 08:37:43'
                ],



                [
                    'id'=>44,
                    'name'=>'edward6',
                    'created_at'=>'2017-05-07 08:37:55',
                    'updated_at'=>'2017-05-07 08:37:55'
                ],



                [
                    'id'=>45,
                    'name'=>'rsdf',
                    'created_at'=>'2017-05-07 08:55:59',
                    'updated_at'=>'2017-05-07 08:55:59'
                ],



                [
                    'id'=>46,
                    'name'=>'edward',
                    'created_at'=>'2017-05-07 08:57:18',
                    'updated_at'=>'2017-05-07 08:57:18'
                ],



                [
                    'id'=>47,
                    'name'=>'test12332',
                    'created_at'=>'2017-05-07 09:05:38',
                    'updated_at'=>'2017-05-07 09:05:38'
                ],



                [
                    'id'=>48,
                    'name'=>'edward12323',
                    'created_at'=>'2017-05-07 09:50:41',
                    'updated_at'=>'2017-05-07 09:50:41'
                ],



                [
                    'id'=>49,
                    'name'=>'ed',
                    'created_at'=>'2017-05-07 09:52:11',
                    'updated_at'=>'2017-05-07 09:52:11'
                ],



                [
                    'id'=>50,
                    'name'=>'e',
                    'created_at'=>'2017-05-07 09:54:17',
                    'updated_at'=>'2017-05-07 09:54:17'
                ],



                [
                    'id'=>51,
                    'name'=>'edwarddsf',
                    'created_at'=>'2017-05-11 22:46:31',
                    'updated_at'=>'2017-05-11 22:46:31'
                ],



                [
                    'id'=>52,
                    'name'=>'edwardasd',
                    'created_at'=>'2017-05-12 00:07:32',
                    'updated_at'=>'2017-05-12 00:07:32'
                ],



                [
                    'id'=>53,
                    'name'=>'edwardtest',
                    'created_at'=>'2017-05-12 05:14:14',
                    'updated_at'=>'2017-05-12 05:14:14'
                ],



                [
                    'id'=>54,
                    'name'=>'modelTest',
                    'created_at'=>'2017-05-12 05:17:48',
                    'updated_at'=>'2017-05-12 05:17:48'
                ]
            ];
      DB::table('brands')->insert($brands);
    }
}



