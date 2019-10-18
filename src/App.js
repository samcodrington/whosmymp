import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";

//import containers
import Map from "./containers/Map";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
          integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
          crossOrigin=""
        />
      </Helmet>
      <div className="leaflet-container">
        <Map />
      </div>
    </div>
  );
}

export default App;
