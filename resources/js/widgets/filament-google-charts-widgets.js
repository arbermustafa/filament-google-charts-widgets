import '@google-web-components/google-chart'

window.updateChart = function (data) {
    const chart = document.getElementById('filament-google-charts')

    if (!chart) {
        return
    }

    chart.rows = data
}

Livewire.on('updateChart', (data) => {
    window.updateChart(data)
})
