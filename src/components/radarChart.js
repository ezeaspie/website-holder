import React, { Component } from "react";
import Chart from "react-apexcharts";

class RadarChart extends Component {
  constructor(props) {
    super(props);

    const stats = this.props.stats;
    console.log(stats);
    console.log(this.props.color);

    this.state = {
          
      series: [{
        name: '',
        data: [stats.str, stats.end, stats.agi, stats.chr, stats.ldr, stats.int],
      }],
      options: {
        colors: [`#${this.props.color}`],
        chart: {
          height: 350,
          type: 'radar',
        },
        xaxis: {
          categories: ['Strength','Endurance','Agility','Charisma','Leadership','Intelligence'],
          labels: {
            show: true,
            style: {
              colors: ["#000","#000","#000","#000","#000","#000"],
            }
          }
        },
        yaxis:{
          tickAmount: 2,
          min:0,
          max:10
        }
      },
    
    
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radar"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RadarChart;