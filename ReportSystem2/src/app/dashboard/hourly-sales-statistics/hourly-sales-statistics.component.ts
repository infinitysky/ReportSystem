import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hourly-sales-statistics',
  templateUrl: './hourly-sales-statistics.component.html',
  styleUrls: ['./hourly-sales-statistics.component.css']
})
export class HourlySalesStatisticsComponent implements OnInit {

  constructor( private router: Router ) { }

   //convert Hex to RGBA
  public convertHex(hex:string,opacity:number){
    hex = hex.replace('#','');
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);

    let rgba = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return rgba;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  // mainChart
  public random(min:number, max:number) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  public mainChartData:Array<any> = [{
    type: 'line',
    data: [1, 2, 3, 4, 5, 4, 3, 3, 4, 5, 5, 6, 6, 5, 5, 4, 6, 5, 4, 3, 2, 1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 2],
    label: 'Current'
  }, {
    data: [1, 2, 3, 4, 5, 4, 3, 3, 4, 5, 5, 6, 6, 5, 5, 4, 6, 5, 4, 3, 2, 1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 2],
    label: 'Current'
  }];

  public mainChartLabels:Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  public mainChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        categoryPercentage: .5,
        barPercentage: 1,
        position: 'top',
        gridLines: {
          color: '#C7CBD5',
          zeroLineColor: '#C7CBD5',
          drawTicks: true,
          borderDash: [8, 5],
          offsetGridLines: false,
          tickMarkLength: 10,
          callback: function(value) {
            console.log(value)
            // return value.charAt(0) + value.charAt(1) + value.charAt(2);
          }
        },
        ticks: {
          callback: function(value) {
            return value.charAt(0) + value.charAt(1) + value.charAt(2);
          }
        }
      }],
      yAxes: [{
        display:false,
        gridLines: {
          drawBorder: false,
          drawOnChartArea: false,
          borderDash: [8, 5],
          offsetGridLines: false
        },
        ticks: {
          beginAtZero: true,
          max: 8,
          maxTicksLimit: 5,
        }
      }]
    },
    legend: {
      display: false
    }
  };
  public mainChartColours:Array<any> = [{
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    hoverBackgroundColor: 'transparent',
    hoverBorderColor: 'transparent',
  },
    {
      backgroundColor: '#C7CBD5',
      borderColor: '#C7CBD5',
      hoverBackgroundColor: '#36A9E1',
      hoverBorderColor: '#36A9E1'
    }];

  public mainChartLegend:boolean = false;
  public mainChartType:string = 'bar';




  ngOnInit(): void { }

}
