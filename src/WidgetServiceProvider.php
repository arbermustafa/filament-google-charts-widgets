<?php

namespace ArberMustafa\FilamentGoogleCharts;

use Filament\PluginServiceProvider;
use Spatie\LaravelPackageTools\Package;

class WidgetServiceProvider extends PluginServiceProvider
{
    public static string $name = 'filament-google-charts-widgets';

    public function configurePackage(Package $package): void
    {
        parent::configurePackage($package);

        $package
            ->name(static::$name)
            ->hasAssets()
            ->hasConfigFile();
    }

    protected function getStyles(): array
    {
        return [
            self::$name . '-styles' => __DIR__ . '/../resources/dist/filament-google-charts-widgets.css',
        ];
    }

    protected function getBeforeCoreScripts(): array
    {
        return [
            self::$name . '-scripts' => __DIR__ . '/../resources/dist/filament-google-charts-widgets.js',
        ];
    }
}
