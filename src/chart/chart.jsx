import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { fetchData } from '../api/index';
 

class MapChart extends Component {
  state = {
    states: []
  }
  async componentDidMount() {
    const ChartData = await fetchData();
    this.setState({ states: ChartData.data.statewise.splice(1) })
  }


  render() {
    var obj = { ...this.state.states };
    var result = Object.keys(obj).map(function (key) {
      return [obj[key].state , parseInt(obj[key].confirmed), parseInt(obj[key].deaths)];
    });

    result = [['States' , 'Confirmed','Deaths']].concat(result); 
    return (
      <div>
        <Chart
          chartType="GeoChart"
          width="100%"
          position="relative"
          data={result}
          options={{
            region: "IN",
            domain: 'IN',
            colorAxis: { minValue: 0, colors: ['#fd5e53'] },
            datalessRegionColor: "#eee",
            defaultColor: "#000",
            legend: { textStyle: { color: 'blue', fontSize: 20 } },
            enableRegionInteractivity: true,
            displayMode: 'regions',
            resolution: 'provinces',
            magnifyingGlass: { enable: true, zoomFactor: 7.5 },
            tooltip: { textStyle: { color: 'green' }, showColorCode: true }

          }}
        />
      </div> 
    );
  }
}
export default MapChart;
