<?php

namespace ArberMustafa\FilamentGoogleCharts\Widgets;

class LineChartWidget extends GoogleChartWidget
{
    protected function getType(): string
    {
        return 'line';
    }
}
