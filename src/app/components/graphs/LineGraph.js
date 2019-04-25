import * as React from 'react';

import { ResponsiveLine } from '@nivo/line';

class LineGraph extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <ResponsiveLine
        data={data}
        margin={{
            "top": 50,
            "right": 110,
            "bottom": 50,
            "left": 60
        }}
        xScale={{
            "type": "point"
        }}
        yScale={{
            "type": "linear",
            "stacked": true,
            "min": "auto",
            "max": "auto"
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "transportation",
            "legendOffset": 36,
            "legendPosition": "middle"
        }}
        enableGridX={false}
        enableGridY={false}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "count",
            "legendOffset": -40,
            "legendPosition": "middle"
        }}
        colors={{
            "scheme": "nivo"
        }}
        dotSize={7}
        dotColor={{
            "theme": "background"
        }}
        dotBorderWidth={2}
        dotBorderColor={{
            "from": "color"
        }}
        enableDotLabel={true}
        dotLabel="y"
        dotLabelYOffset={-12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "anchor": "left",
                "direction": "column",
                "justify": false,
                "translateX": 0,
                "translateY": 0,
                "itemWidth": 100,
                "itemHeight": 20,
                "itemsSpacing": 4,
                "symbolSize": 20,
                "symbolShape": "circle",
                "itemDirection": "left-to-right",
                "itemTextColor": "#777",
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemBackground": "rgba(0, 0, 0, .03)",
                            "itemOpacity": 1
                        }
                    }
                ]
            }
        ]}
      />
    )
  };
}

export default LineGraph;
