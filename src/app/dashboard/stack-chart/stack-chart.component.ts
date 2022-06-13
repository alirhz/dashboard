import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stack-chart',
  templateUrl: './stack-chart.component.html',
  styleUrls: ['./stack-chart.component.scss'],
})
export class StackChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: '#f0f7f9',
      width: 400,
      height: 200,
    },
    title: {
      text: undefined,
    },
    legend: {
      floating: true,
      align: 'left',
      layout: 'vertical',
      verticalAlign: 'top',
      width: 300,
      x: 200,
      y: 0,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'column',
        data: [1, 2, 3, 4, 5],
      },
    ],
  };
}
