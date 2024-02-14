import React, { useEffect, useRef, useState } from 'react'

function MapsAPIgoogle() {
  const [map, setMap] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const mapContainerRef = useRef(null)

  useEffect(() => {
    // Carga la API de Google Maps con tu clave API
    const loadMapScript = () => {
      const script = document.createElement('script')
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDUhRB0IwStmjYYs4m0E6jcCtGD-QfaHHw&callback=initMap'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
      script.onload = () => {
        setLoaded(true)
        initMap()
      }
    }

    // Inicializa el mapa una vez que la API está cargada
    const initMap = () => {
      if (!loaded || !mapContainerRef.current) return

      const mapInstance = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: -42.815442, lng: -65.033969 },  //-42.815442, -65.033969
        zoom: 12,
      })

      setMap(mapInstance)
    }

    // Llama a la función para cargar la API de Google Maps
    loadMapScript()

    // Limpia el mapa al desmontar el componente
    return () => {
      if (map) {
        map.set(null)
      }
    }
  }, [loaded]) // Incluye `loaded` en el array de dependencias para que el efecto se vuelva a ejecutar cuando cambie

  return <div ref={mapContainerRef} style={{ height: '350px' }} />
}

export default MapsAPIgoogle