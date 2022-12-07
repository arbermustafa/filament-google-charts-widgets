import '@google-web-components/google-chart'
;(function () {
    const chart = document.getElementById('filament-google-charts')

    window.addEventListener(
        'resize',
        () => {
            chart.redraw()
        },
        true,
    )

    window.updateChart = function (data) {
        if (!chart) {
            return
        }

        chart.rows = data
    }

    Livewire.on('updateChart', (data) => {
        window.updateChart(data)
    })
})()
