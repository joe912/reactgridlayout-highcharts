import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "My chart"
  },
  series: [
    {
      data: [1, 2, 3]
    }
  ]
};

// npm install highcharts
// npm install highcharts-react-official

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default Chart;
