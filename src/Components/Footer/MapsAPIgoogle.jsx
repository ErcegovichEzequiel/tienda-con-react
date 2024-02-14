import React, { useEffect, useRef, useState } from 'react';

function MapsAPIgoogle() {
  const [map, setMap] = useState(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Carga la API de Google Maps con tu clave API
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA2sR8yUAgPBaFq01aIIr_P8HNAIJ1SuMs&libraries=places';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = () => {
        initMap();
      };
    };

    // Inicializa el mapa una vez que la API está cargada
    const initMap = () => {
      if (!mapContainerRef.current) return;

      const mapInstance = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 12,
      });

      setMap(mapInstance);
    };

    // Llama a la función para cargar la API de Google Maps
    loadMapScript();

    // Limpia el mapa al desmontar el componente
    return () => {
      if (map) {
        map.setMap(null);
      }
    };
  }, []);

  return <div id="mapa" ref={mapContainerRef} style={{ height: '400px' }} />;
}

export default MapsAPIgoogle;