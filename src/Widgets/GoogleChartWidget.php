<?php

namespace ArberMustafa\FilamentGoogleCharts\Widgets;

use ArberMustafa\FilamentGoogleCharts\FilamentGoogleCharts;
use Filament\Widgets\Concerns\CanPoll;
use Filament\Widgets\Widget;
use Illuminate\Support\Str;

class GoogleChartWidget extends Widget
{
    use CanPoll;

    protected static ?string $chartId = null;

    protected ?array $cachedData = null;

    public string $dataChecksum;

    protected static ?string $heading = null;

    protected static ?array $options = null;

    protected static string $view = 'filament-google-charts-widgets::widgets.chart-widget';

    public function getChartId(): ?string
    {
        return static::$chartId ?? 'googleChart_' . Str::random(10);
    }

    public function mount(): void
    {
        $this->dataChecksum = $this->generateDataChecksum();
    }

    protected function generateDataChecksum(): string
    {
        return md5(json_encode($this->getCachedData()));
    }

    protected function getCachedData(): array
    {
        return $this->cachedData ??= $this->getData();
    }

    protected function getData(): array
    {
        return [];
    }

    public function updateChart(): void
    {
        $newDataChecksum = $this->generateDataChecksum();

        if ($newDataChecksum !== $this->dataChecksum) {
            $this->dataChecksum = $newDataChecksum;

            $this
                ->dispatch('updateChart', data: $this->getCachedData());
        }
    }

    protected function getHeading(): ?string
    {
        return static::$heading;
    }

    protected function getOptions(): ?array
    {
        return FilamentGoogleCharts::mergeArrays(
            config('filament-google-charts-widgets.default_options'),
            static::$options,
        );
    }
}
