import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import chartJs from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('pieCanvas') pieCanvas;

  barChart: any;
  pieChart: any;
  title: string;
  userid: string;
  rates: Array<{name: string, count: number}>;
  status: Array<{name: string, count: number}>;
  
  constructor() {
      this.title = 'title';
      this.userid = '12345';
      this.rates = [];
      this.status = [];
      //get all cues to classify
      let goodCueIndex = 1;
      let badCueIndex = 2;
      let neverCueIndex = 3;
      this.rates.push({name: 'good', count: goodCueIndex});
      this.rates.push({name: 'bad', count: badCueIndex});
      this.rates.push({name: 'never show', count: neverCueIndex});

      //get all stacks to classify
      let favorStackIndex = 3;
      let studyStackIndex = 2;
      let allStackIndex = 1;
      this.status.push({name: 'favorite', count: favorStackIndex});
      this.status.push({name: 'study', count: studyStackIndex});
      this.status.push({name: 'all', count: allStackIndex});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.barChart = this.getBarChart();
    }, 150);
    setTimeout(() => {
      this.pieChart = this.getPieChart();
    }, 350);

  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType,
    });
  }

  getPieChart() {
    const data = {
      labels: [this.rates[0].name, this.rates[1].name, this.rates[2].name],
      datasets: [
        {
          data: [this.rates[0].count, this.rates[1].count, this.rates[2].count],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    };
    return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
  }

  getBarChart() {
    const data = {
      labels: [this.status[0].name, this.status[1].name, this.status[2].name],
      datasets: [{
        label: '# of Votes',
        data: [this.status[0].count, this.status[1].count, this.status[2].count],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
  }

}
