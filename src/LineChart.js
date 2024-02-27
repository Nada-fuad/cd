import React from 'react';
import Plot from 'react-plotly.js';

function LineChart() {
    // Beispiel-Daten (fiktiv)
    const xData = [1, 2, 3, 4, 5];
    const yData = [10, 15, 13, 17, 10];

    return ( <
        Plot data = {
            [{
                x: xData,
                y: yData,
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'blue' },
            }, ]
        }
        layout = {
            { width: 800, height: 400, title: 'Liniendiagramm' } }
        />
    );
}

export default LineChart;