<?php

namespace ArberMustafa\FilamentGoogleCharts\Widgets;

class DonutChartWidget extends PieChartWidget
{
    protected static ?float $pieHole = 0.4;

    protected function getOptions(): ?array
    {
        return array_merge(parent::getOptions(), ['pieHole' => static::$pieHole]);
    }
}
