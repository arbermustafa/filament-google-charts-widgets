@php
    $heading = $this->getHeading();
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

        <div {!! ($interval = $this->getPollingInterval()) ? "wire:poll.{$interval}=\"updateChart\"" : '' !!}>
            <div class="chart-wrapper-{{ $this->getId() }}">
                <google-chart
                    id='filament-google-charts-{{ $this->getId() }}'
                    type='{{ $this->getType() }}'
                    options='{{ json_encode($this->getOptions()) }}'
                    data='{{ json_encode($this->getCachedData()) }}'
                    x-data = "{
                        init: function () {
                            const chart = document.getElementById('filament-google-charts-{{ $this->getId() }}')

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
