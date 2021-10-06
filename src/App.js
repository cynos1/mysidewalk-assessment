import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; 
import neighbordata from './kc-neighborhoods.json';
import tractdata from './kc-tracts.json';

mapboxgl.accessToken = 'pk.eyJ1IjoiY3lub3MxIiwiYSI6ImNrdWZveXQwcTF3ZTAyd3FscHV3c2JydWgifQ.EnstwudjuuiHNPsQWsRzag';







export default function App() {
    const mapContainer = useRef();
    // const map = useRef(null);
    // const [lng, setLng] = useState(-70.9);
    // const [lat, setLat] = useState(42.35);
    // const [zoom, setZoom] = useState(9);
   

    useEffect(() => {
        // if (map.current) return; // initialize map only once
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-70.9, 42.35],
          zoom: 9
        });
        


        map.on("load", () =>{
        //   map.addSource("neighbors", {
        //     type: "vector",
        //     data: neighbordata,
            
        // });

        // map.addSource("tract", {
        //   type: "geojson",
        //   data: tractdata,
        // });
        map.addLayer({
          
        })
        })
         
      return () => map.remove();  
    },[]);


      return (
        
          <div ref={mapContainer} className="map-container" />
        
      );
}