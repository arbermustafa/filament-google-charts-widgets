import googleChart from './components/filament-google-charts-widgets'

document.addEventListener('alpine:init', () => {
    window.Alpine.plugin(googleChart)
})
