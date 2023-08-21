import '@google-web-components/google-chart'
import { dataTable } from '@google-web-components/google-chart/loader'

export default function googleChart({ type, options, cachedData }) {
    return {
        chart: null,

        init: function () {
            let chart = this.initChart()

            this.$wire.$on('updateChart', async ({ data }) => {
                chart.data = data
            })
        },

        initChart: function (data = null) {
            this.chart = this.$refs.googleChart
            this.chart.type = type
            this.chart.options = options ?? {}

            dataTable(data ?? cachedData).then((dataTable) => {
                this.chart.data = dataTable
            })

            return this.chart
        },
    }
}
