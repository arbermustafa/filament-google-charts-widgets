@php
    $heading = $this->getHeading();
    $id = $this->getId();
@endphp

<x-filament::widget class="filament-widgets-chart-widget">
    <x-filament::card>
        @if ($heading)
            <div class="flex items-center justify-between gap-8">
                @if ($heading)
                    <x-filament::card.heading>
                        {{ $heading }}
                    </x-filament::card.heading>
                @endif
            </div>

            <x-filament::hr />
        @endif

        <div {!!
            ($interval = $this->getPollingInterval())
            ? "wire:poll.{$interval}=\"updateChart\""
            : ''
        !!}>
            <div class="chart-wrapper">
                <google-chart
                    id='filament-google-charts-{{ $id }}'
                    type='{{ $this->getType() }}'
                    options='{{ json_encode($this->getOptions()) }}'
                    data='{{ json_encode($this->getCachedData()) }}'
                    x-data = "{
                        init: function () {
                            const chart = document.getElementById('filament-google-charts-{{ $id }}')

                            $wire.on('updateChart', async ({ data }) => {
                                chart.data = data
                            })
                        }
                    }"
                wire:ignore>
            </div>
        </div>
    </x-filament::card>
</x-filament::widget>
