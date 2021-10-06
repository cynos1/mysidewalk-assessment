import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiY3lub3MxIiwiYSI6ImNrdWZveXQwcTF3ZTAyd3FscHV3c2JydWgifQ.EnstwudjuuiHNPsQWsRzag';



// https://api.mapbox.com/datasets/v1/cynos1?access_token=pk.eyJ1IjoiY3lub3MxIiwiYSI6ImNrdWZveXQwcTF3ZTAyd3FscHV3c2JydWgifQ.EnstwudjuuiHNPsQWsRzag



export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
      });

      return (
        <div>
          <div ref={mapContainer} className="map-container" />
        </div>
      );
}