import React, { Component } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Chart from "./Chart";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const ffs = [
  { i: "1", h: 4, w: 5, x: 0, y: 0 },
  { i: "2", h: 3, w: 3, x: 0, y: 4 },
  { i: "3", h: 2, w: 4, x: 0, y: 8 }
];

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layouts: { lg: ffs },
      widgets: ffs
    };
  }

  onLayoutChange(layout, layouts) {
    this.setState({ layouts });
  }

  render() {
    console.log(this.state.layouts);

    return (
      <div className="dashboard-wrapper full-height">
        <div className="dashboard-grid">
          <ResponsiveReactGridLayout
            className="layout"
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={30}
            useCSSTransforms="true"
            layouts={this.state.layouts}
            onLayoutChange={(layout, layouts) =>
              this.onLayoutChange(layout, layouts)
            }
            isDraggable="true"
            isResizable="true"
            compactType="vertical"
          >
            {this.state.widgets.map(l => {
              return (
                <div key={l.i} className="dashboard-widget">
                  <div className="widget widget-edit">
                    {l.i === "1" && <Chart />}
                    {l.i !== "1" && <span> widget other {l.i} </span>}
                  </div>
                </div>
              );
            })}
          </ResponsiveReactGridLayout>
        </div>
      </div>
    );
  }
}

export default Dashboard;
