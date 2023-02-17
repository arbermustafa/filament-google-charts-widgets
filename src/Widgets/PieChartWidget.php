<?php

namespace ArberMustafa\FilamentGoogleCharts\Widgets;

class PieChartWidget extends GoogleChartWidget
{
    protected function getType(): string
    {
        return 'pie';
    }
}
