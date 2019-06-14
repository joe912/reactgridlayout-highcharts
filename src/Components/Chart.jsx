import React, { Component } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// npm install highcharts
// npm install highcharts-react-official

class Chart extends Component {
  constructor(props) {
    super(props);
    console.log("ctpr pro[ps", props);
    this.state = {
      options: {
        chart: {
          height: 200,
          borderWidth: 1,
          borderColor: "#00ff00"
        },
        title: {
          text: "My chart 2"
        },
        series: [
          {
            data: [1, 2, 3]
          }
        ]
      },
      mychartheight: 0
    };
  }

  componentDidMount() {
    const mychartheight = this.divElement.clientHeight;
    this.setState({ mychartheight });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.lastResize !== newProps.lastResize) {
      console.log("fecking resize this fucker");
      const mychartheight = this.divElement.clientHeight;
      this.setState({ mychartheight });
    }
  }

  render() {
    console.log(
      "render chart 42",
      this.state.mychartheight,
      ", and last resize: ",
      this.props.lastResize
    );

    console.log("current height === ", this.state.options.chart.height);
    var mynewoptions = Object.assign({}, this.state.options);
    mynewoptions.chart.height = this.state.mychartheight;
    console.log("debugging ", mynewoptions);

    return (
      <div
        className="trend-widget"
        ref={divElement => (this.divElement = divElement)}
      >
        <HighchartsReact highcharts={Highcharts} options={mynewoptions} />
      </div>
    );
  }
}

export default Chart;
