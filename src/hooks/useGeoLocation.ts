import { useEffect, useRef, useState } from 'react'

interface UseGeoLocation extends AddValue<GeolocationPosition['coords'], null> {
  date: Date | null
  loading: boolean
  error: GeolocationPositionError | null
}

export const useGeoLocation = (options?: PositionOptions) => {
  const [location, setLocation] = useState<UseGeoLocation>({
    accuracy: null,
    altitude: null,
    heading: null,
    speed: null,
    latitude: null,
    longitude: null,
    altitudeAccuracy: null,
    date: null,
    loading: true,
    error: null,
  })

  const watchId = useRef<number>()

  const onSuccess = (position: GeolocationPosition) => {
    setLocation((prev) => ({ ...prev, ...position.coords, date: new Date(position.timestamp), loading: false }))
  }

  const onError = (error: GeolocationPositionError) => {
    setLocation((prev) => ({ ...prev, error, loading: false }))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
    watchId.current = navigator.geolocation.watchPosition(onSuccess, onError, options)

    return () => {
      if (watchId.current) navigator.geolocation.clearWatch(watchId.current)
    }
  }, [options])

  return location
}
