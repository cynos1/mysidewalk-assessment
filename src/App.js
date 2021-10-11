import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; 

mapboxgl.accessToken = 'pk.eyJ1IjoiY3lub3MxIiwiYSI6ImNrdWZveXQwcTF3ZTAyd3FscHV3c2JydWgifQ.EnstwudjuuiHNPsQWsRzag';

export default function App() {
    const mapContainer = useRef();
 

    useEffect(() => {
       
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-94.4159888785519, 39.0263622595943],
          zoom: 9
        });

        map.on("load", () =>{
          map.addSource("kc-neighborhoods", {
            type: "geojson",
            data: "kc-neighborhoods.json",
          });
          map.addSource("kc-tracts", {
            type: "geojson",
            data: "kc-tracts.json",
          });

          map.addLayer({
            'id': 'kc-neighborhoods',
            'type': 'fill',
            'source': 'kc-neighborhoods',
            'paint': {
              'fill-color': '#0080ff',
              'fill-opacity': 0.8
            }
          });

          map.addLayer({
            'id': 'kc-tracts',
            'type': 'fill',
            'source': 'kc-tracts',
            'paint': {
              'fill-color': 'yellow',
              'fill-opacity': 0.3,
              'fill-outline-color': 'white'
            }
          });
        })
         
      return () => map.remove();  
    },[]);


      return (

          <div ref={mapContainer} className="map-container" />

      );
}