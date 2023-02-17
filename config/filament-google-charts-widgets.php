<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Chart Options
    |--------------------------------------------------------------------------
    |
    | See: https://developers.google.com/chart/interactive/docs/gallery/areachart#configuration-options
    | See: https://developers.google.com/chart/interactive/docs/gallery/barchart#configuration-options
    | See: https://developers.google.com/chart/interactive/docs/gallery/columnchart#configuration-options
    | See: https://developers.google.com/chart/interactive/docs/gallery/piechart#donut
    | See: https://developers.google.com/chart/interactive/docs/gallery/linechart#configuration-options
    | See: https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options
    |
    */
    'default_options' => [
        'hAxis' => [
            'titleTextStyle' => [
                'color' => '#607d8b',
            ],
            'gridlines' => [
                'count' => 0,
            ],
            'textStyle' => [
                'color' => '#b0bec5',
                'fontName' => 'Roboto',
                'fontSize' => '13',
                'bold' => true,
            ],
        ],
        'vAxis' => [
            'minValue' => 0,
            'gridlines' => [
                'color' => '#37474f',
                'count' => 4,
            ],
            'baselineColor' => 'transparent',
        ],
        'areaOpacity' => 0.24,
        'lineWidth' => 2,
        'chartArea' => [
            'backgroundColor' => 'transparent',
            'width' => '100%',
            'height' => '80%',
            'top' => '15%',
        ],
        'bar' => [
            'groupWidth' => '40',
        ],
        'colorAxis' => [
            'colors' => [
                '#3f51b5',
                '#2196f3',
                '#03a9f4',
                '#00bcd4',
            ],
        ],
        'datalessRegionColor' => '#37474f',
        'displayMode' => 'regions',
        'legend' => [
            'position' => 'top',
            'alignment' => 'center',
            'textStyle' => [
                'color' => '#607d8b',
                'fontName' => 'Roboto',
                'fontSize' => '13',
            ],
        ],
        'backgroundColor' => 'transparent',
    ],

];
