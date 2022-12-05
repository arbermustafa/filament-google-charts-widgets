<?php

namespace ArberMustafa\FilamentGoogleCharts\Widgets;

class ColumnChartWidget extends GoogleChartWidget
{
    protected function getType(): string
    {
        return 'column';
    }
}
