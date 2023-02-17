<?php

namespace ArberMustafa\FilamentGoogleCharts\Widgets;

class AreaChartWidget extends GoogleChartWidget
{
    protected function getType(): string
    {
        return 'area';
    }
}
