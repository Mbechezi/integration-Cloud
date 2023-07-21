
//import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp'


import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";


//API Key with mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibWJlY2hlemkxIiwiYSI6ImNsa2N2bDljdzBmZWczbHBtbnlrOGFkZmUifQ.CP2AfFccAq6smg4VKuKFGA';

function App() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-17.457145);
  const [lat, setLat] = useState(14.696662);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });


  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });
    });

    
  return (

    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div>
        <div ref={mapContainer} className="map-container" />
      </div>

      <div className="App">
        <div>
          <form>
            <label>
              Noms :
              <input type="text" name="name" placeholder="Votre nom" />
            </label>
            <label>
              Prénom :
              <input type="text" name="prenom" placeholder="Votre prénom" />
            </label>
            <label>
              Adresse:
              <input type="text" name="adress" />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        </div>

      </div>
    </div>

  );

}

export default App;
