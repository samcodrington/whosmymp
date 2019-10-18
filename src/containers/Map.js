import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";

// function MyMap(props){
// 	const lat = 57.844750992891; //N
// 		const long = -96.85546875000001; //W
// 		const center = [lat, long];
// 		const viewport = {
// 			center,
// 			zoom: 4
// 		};
// 		this.state = {
// 			viewport: viewport
// 		};

// }
export default class MyMap extends Component {
  constructor(props) {
    super(props);
    const lat = 57.844750992891; //N
    const long = -96.85546875000001; //W
    const center = [lat, long];
    const viewport = {
      center,
      zoom: 4
    };
    this.state = {
      viewport: viewport
    };
    this.onViewportChanged = this.onViewportChanged.bind(this);
  }

  onViewportChanged(viewport) {
    // console.log(viewport);
    this.setState({ viewport });
  }
  render() {
    return (
      <div>
        <Map
          viewport={this.state.viewport}
          onViewportChanged={this.onViewportChanged}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
    );
  }
}
