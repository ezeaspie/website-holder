import React, { Component } from "react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,ResponsiveContainer
} from 'recharts';

class RadarChartStats extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const stats = this.props.stats;
    const data = [
      { subject: 'Strength', A: stats.str, B: 0, fullMark: 12 },
      { subject: 'Endurance', A: stats.end, B: 0, fullMark: 12 },
      { subject: 'Agility', A: stats.agi, B: 0, fullMark: 12 },
      { subject: 'Charisma', A: stats.chr, B: 0, fullMark: 12 },
      { subject: 'Leadership', A: stats.ldr, B: 0, fullMark: 12 },
      { subject: 'Intelligence', A: stats.int, B: 5, fullMark: 12 },
    ];
    console.log(this.props.color);
  	return (
      <ResponsiveContainer height={200}>
    	<RadarChart outerRadius='80%' data={data}>
          <PolarGrid stroke="#737373"/>
          <PolarAngleAxis stroke="#373737" dataKey="subject" />
          <PolarRadiusAxis  stroke='#737373' domain={[0,12]}/>
          <Radar name="StatsPart1" dataKey="A" stroke={'#' + this.props.color} fill={'#' + this.props.color} fillOpacity={0.6}/>
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default RadarChartStats;