import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  cardData = [
    {
      counts: 982,
      title: 'افراد آنلاین در سایت',
    },
    { counts: 982, title: 'درخواست های تایید شده' },
    { counts: 982, title: 'درخواست های رد شده' },
    { counts: 982, title: 'مجموع مبالغ' },
  ];
  SecondCardData = [
    {
      counts: 982,
      title: 'افراد آنلاین در سایت',
    },
    { counts: 982, title: 'درخواست های تایید شده' },
    { counts: 982, title: 'درخواست های رد شده' },
    { counts: 982, title: 'مجموع مبالغ' },
  ]

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
        type: 'pie',
        data: [1, 2, 3, 4, 5],
      },
    ],
  };

  constructor() {}
  ngOnInit(): void {}
}
