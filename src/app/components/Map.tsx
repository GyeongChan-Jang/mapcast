'use client'
import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxLanguage from '@mapbox/mapbox-gl-language'
import localFont from 'next/font/local'

const jalnanGothic = localFont({
  src: '../fonts/JalnanGothic.otf'
})

const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/zeronejang/clvelei9d00z201rj5ex39slt',
      center: [126.978, 37.566],
      zoom: 10,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      localFontFamily: jalnanGothic.style.fontFamily
    })
    const language = new MapboxLanguage()
    map.addControl(language)
  }, [])

  return (
    <div>
      <div
        ref={mapContainerRef}
        id="map"
        className={'w-200 h-200'}
      />
    </div>
  )
}
export default Map
