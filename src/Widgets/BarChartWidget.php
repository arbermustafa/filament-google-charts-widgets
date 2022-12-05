<?php

namespace ArberMustafa\FilamentGoogleCharts\Widgets;

class BarChartWidget extends GoogleChartWidget
{
    protected function getType(): string
    {
        return 'bar';
    }
}
