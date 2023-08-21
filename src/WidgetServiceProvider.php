<?php

namespace ArberMustafa\FilamentGoogleCharts;

use Filament\Support\Assets\AlpineComponent;
use Filament\Support\Assets\Css;
use Filament\Support\Facades\FilamentAsset;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class WidgetServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-google-charts-widgets';

    public function configurePackage(Package $package): void
    {
        $package
            ->name(static::$name)
            ->hasViews()
            ->hasConfigFile();
    }

    public function packageBooted(): void
    {
        FilamentAsset::register(
            assets: [
                Css::make(static::$name, __DIR__ . '/../resources/dist/filament-google-charts-widgets.css'),
                AlpineComponent::make(static::$name, __DIR__ . '/../resources/dist/filament-google-charts-widgets.js'),
            ],
            package: 'arbermustafa/filament-google-charts-widgets'
        );
    }
}
