export function km(lat1: number | null | undefined, lng1: number | null | undefined, lat2: number | null | undefined, lng2: number | null | undefined) {
  if (lat1 == null || lng1 == null || lat2 == null || lng2 == null) return null
  const r = (d: number) => (d * Math.PI) / 180
  const a = Math.sin(r(lat2 - lat1) / 2) ** 2 + Math.cos(r(lat1)) * Math.cos(r(lat2)) * Math.sin(r(lng2 - lng1) / 2) ** 2
  return 6371 * 2 * Math.asin(Math.sqrt(a))
}

export const fmtDistance = (k: number | null) => (k == null ? 'Unknown' : k < 1 ? `${Math.round(k * 1000)} m` : `${k.toFixed(1)} km`)

export const MEPPADI = { lat: 11.505, lng: 76.135 }

export function getPosition(timeout = 10000): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in navigator)) return reject(new Error('This device cannot share its location'))
    navigator.geolocation.getCurrentPosition(resolve, () => reject(new Error('Could not get your location')), {
      enableHighAccuracy: true,
      timeout,
      maximumAge: 30000,
    })
  })
}
