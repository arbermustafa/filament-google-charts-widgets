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
            <div x-data="googleChart({
                    type: @js($this->getType()),
                    options: @js($this->getOptions()),
                    cachedData: @js($this->getCachedData()),
                })"
                wire:ignore>
                <google-chart
                    x-ref='googleChart'
                    id='filament-google-charts-{{ $id }}'
                ></google-chart>
            </div>
        </div>
    </x-filament::card>
</x-filament::widget>
