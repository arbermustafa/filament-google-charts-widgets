<?php

namespace ArberMustafa\FilamentGoogleCharts;

use Illuminate\Support\Arr;

class FilamentGoogleCharts
{
    public static function mergeArrays(array $original, array $merging): array
    {
        $array = array_merge($original, $merging);

        foreach ($original as $key => $value) {
            if (! is_array($value)) {
                continue;
            }

            if (! Arr::exists($merging, $key)) {
                continue;
            }

            if (is_numeric($key)) {
                continue;
            }

            $array[$key] = static::mergeArrays($value, $merging[$key]);
        }

        return $array;
    }
}
