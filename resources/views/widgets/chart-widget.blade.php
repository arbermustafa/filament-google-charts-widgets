@php
    $chartId = $this->getChartId();
    $heading = $this->getHeading();
@endphp

<x-filament-widgets::widget>
    <x-filament::section
        :heading="$heading"
        class="fi-wi-chart"
    >
        <div
            @if ($pollingInterval = $this->getPollingInterval())
                wire:poll.{{ $pollingInterval }}="updateChart"
            @endif
        >
            <div
                ax-load
                ax-load-src="{{ \Filament\Support\Facades\FilamentAsset::getAlpineComponentSrc('filament-google-charts-widgets', 'arbermustafa/filament-google-charts-widgets') }}"
                wire:ignore
                x-data="googleChart({
                    type: @js($this->getType()),
                    options: @js($this->getOptions()),
                    cachedData: @js($this->getCachedData()),
                })"
                x-ignore
            >
                <google-chart
                    x-ref="googleChart"
                    id='{{ $chartId }}'
                ></google-chart>
            </div>
        </div>
    </x-filament::section>
</x-filament-widgets::widget>
