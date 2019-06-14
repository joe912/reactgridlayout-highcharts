import React, { Component } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Chart from "./Chart";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const ffs = [
  { i: "1", h: 4, w: 5, x: 0, y: 0, lastResize: new Date() },
  { i: "2", h: 3, w: 3, x: 0, y: 4, lastResize: new Date() },
  { i: "3", h: 2, w: 4, x: 0, y: 8, lastResize: new Date() }
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

  onResizeStop = (layout, oldItem, newItem, placeholder, e, element) => {
    console.log("Dashboard item resize:", newItem);
    var widgets = this.state.widgets.slice();
    var index = widgets.findIndex(w => w.i === newItem.i);
    if (index > -1) {
      widgets[index].lastResize = new Date();
      this.setState({ widgets });
    }
  };

  render() {
    return (
      <div className="dashboard-wrapper full-height">
        <div className="dashboard-grid">
          <ResponsiveReactGridLayout
            className="layout"
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={30}
            useCSSTransforms={true}
            layouts={this.state.layouts}
            onLayoutChange={(layout, layouts) =>
              this.onLayoutChange(layout, layouts)
            }
            isDraggable={true}
            isResizable={true}
            compactType="vertical"
            onResizeStop={this.onResizeStop}
          >
            {this.state.widgets.map(l => {
              return (
                <div key={l.i} className="dashboard-widget">
                  <div className="widget widget-edit">
                    {l.i === "1" && (
                      <>
                        <Chart lastResize={l.lastResize} />
                      </>
                    )}
                    {l.i !== "1" && <span> widget other {l.i}</span>}
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
