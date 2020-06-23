﻿var dataSource = [
    { continent: 'Africa', population: 1022234000 },
    { continent: 'Europe', population: 738199000 },
    { continent: 'Australia', population: 29127000 },
    { continent: 'North America', population: 542056000 },
    { continent: 'Asia', population: 4164252000 },
    { continent: 'Antarctica', population: 4490 },
    { continent: 'South America', population: 392555000 }
];

$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        series: {
            argumentField: 'continent',
            valueField: 'population'
        },
        startAngle: 0,
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        title: 'Population by Continent',
        palette: 'Violet'
    });

    $("input[name='startAngle']").change(function () {
        var pieChart = $('#pieChartContainer').dxPieChart('instance');
        pieChart.option({
            startAngle: +$(this).val()
        })
    });
});