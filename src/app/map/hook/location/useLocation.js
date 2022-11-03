import { useState, useEffect } from 'react'

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    error: "Localización no cargada aún",
    coord: {
      lat: "",
      lng: ""
    }
  })

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coord: {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }
    })
  }

  const onError = error => {
    setLocation({
      loaded: true,
      error: "Localización no cargada aún"
    })
  }

  useEffect(() => {
    if (!("geolocation") in navigator) {
      onError({
        code: 0,
        message: "El navegador no soporta la geolocalización"
      })
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])
  return location
}

export default useGeoLocation