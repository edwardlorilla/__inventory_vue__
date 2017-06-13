<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
    <meta name="_token" content="{{ csrf_token() }}"/>
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

    <title>Inventory</title>
</head>
<body>
<div id="el">
</div>
</body>
<script src="{{mix('/js/app.js')}}"></script>

</html>
