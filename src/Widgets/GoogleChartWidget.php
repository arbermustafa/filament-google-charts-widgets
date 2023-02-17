<?php

namespace ArberMustafa\FilamentGoogleCharts\Widgets;

use ArberMustafa\FilamentGoogleCharts\FilamentGoogleCharts;
use Filament\Widgets\Concerns\CanPoll;
use Filament\Widgets\Widget;

class GoogleChartWidget extends Widget
{
    use CanPoll;

    protected ?array $cachedData = null;

    public string $dataChecksum;

    protected static ?string $heading = null;

    protected static ?array $options = null;

    protected static string $view = 'filament-google-charts-widgets::widgets.chart-widget';

    public function getId(): ?string
    {
        return $this->id;
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

            $this->emitSelf('updateChart', [
                'data' => $this->getCachedData(),
            ]);
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
