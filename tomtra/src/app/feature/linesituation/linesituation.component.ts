import { Component, OnInit } from '@angular/core';
import { DataService } from "app/feature/dataservice";

@Component({
  selector: 'app-linesituation',
  templateUrl: './linesituation.component.html',
  styleUrls: ['./linesituation.component.css'],
})

export class LinesituationComponent implements OnInit {
    optionsTrc: Object;
    optionsTotalGroup: Object;
    title:any;
  constructor(public dataService:DataService) { 
    this.title = dataService.GetCounterPartName();
    this.optionsTrc ={
    chart: {
        type: 'column',
      },
       credits: {
      enabled: false
  },
    title: {
        text: this.title.Name,
        margin:10,
        style:{
            fontSize: "12px"
        }
    },
    xAxis: {
        categories: [
            'Unspecific',
            'LG',
            'LC'
        ]
    },
    yAxis: [{
        min: 0,
        title: {
            text: 'Price in euro'
        },
    }],
    legend: {
        shadow: false,
        verticalAlign : 'top',
    },
    tooltip: {
        shared: true
    },
   plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },

    series: [{
        name: 'Limit',
        color: 'rgba(165,170,217,1)',
        data: [150, 200, 20],
        pointPadding: 0.1,
        pointPlacement: 0.2
    }, {
        name: 'Outstanding',
        color: 'rgba(126,86,134,.9)',
        data: [140, 90, 40],
        pointPadding: 0.2,
        pointPlacement: 0.2,
    }]
    };


  this.optionsTotalGroup = {
    chart: {
        type: 'column'
    },
     credits: {
      enabled: false
  },
    title: {
        text: '',
        margin:10,
        style:{
            fontSize: "12px"
        }
    },
    xAxis: {
        categories: [
            'Unspecific',
            'LG',
            'LC'
        ]
    },
    yAxis: [{
        min: 0,
        title: {
            text: 'Price in euro'
        },
    }],
    legend: {
        shadow: false,
        verticalAlign : 'top'
    },
    tooltip: {
        shared: true
    },
   plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },

    series: [{
        name: 'Limit',
        color: 'rgba(165,170,217,1)',
        data: [150, 200, 1000],
        pointPadding: 0.1,
        pointPlacement: 0.2
    }, {
        name: 'Outstanding',
        color: 'rgba(126,86,134,.9)',
        data: [140, 90, 980],
        pointPadding: 0.2,
        pointPlacement: 0.2,
    }]
    };

  }

  ngOnInit() {
  }

}
