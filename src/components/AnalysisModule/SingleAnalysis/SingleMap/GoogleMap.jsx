import React, { useState } from "react"
import { Map, GoogleApiWrapper, Polyline, Marker, InfoWindow } from "google-maps-react"

const { REACT_APP_GOOGLE_API_KEY } = process.env
const MARKER_INCREMENT = 60 // every 60 seconds

function GoogleMapsContainer (props) {
  const { trip } = props
  const [showingInfoWindow, setShowingInfoWindow] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState({})
  const [activeMarker, setActiveMarker] = useState({})
  
  const { google } = props
  const firstPoint = trip.coordinates[0]
  const startCoordinate = { lat: firstPoint.latitude, lng: firstPoint.longitude }
  const coordinates = trip.coordinates.map (coord => ({ lat: coord.latitude, lng: coord.longitude }))
  
  function handleMarkerClick (props, marker, e) {
    setSelectedPlace(props.name)
    setActiveMarker(marker)
    setShowingInfoWindow(true)
  }

  function handleInfoWindowClose () {
    if (showingInfoWindow) {
      setShowingInfoWindow(false)
      setActiveMarker (null)
    }
  }
  
  return (
    <Map 
      google={google}
      zoom={14}
      initialCenter={startCoordinate}
    >
      <Polyline
        path={coordinates}
        strokeColor="#0000FF"
        strokeOpacity={0.8}
        strokeWeight={2}
      />

      {trip.coordinates.map ((coordinate, index) => {
        const isMinuteCoordinate = index % MARKER_INCREMENT === 0
        const isLastCoordinate = index === trip.coordinates.length - 1
        if (isMinuteCoordinate || isLastCoordinate) {
          return (
            <Marker
              key={coordinate.index}
              name={coordinate}
              position={{ lat: coordinate.latitude, lng: coordinate.longitude }}
              onClick={handleMarkerClick}
            />
          )
        }
        return null
      })}
    
      <InfoWindow 
        onClose={handleInfoWindowClose}
        marker={activeMarker}
        visible={showingInfoWindow}
      >
      {showingInfoWindow ? (
        <div>
          <p>
            <span style={{ fontWeight: "bold" }}>Time:</span> {selectedPlace.getTime()}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Speed:</span> {selectedPlace.getSpeed()}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Distance:</span> {selectedPlace.getDistance()}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Longitude:</span> {selectedPlace.getLongitude()}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Latitude:</span> {selectedPlace.getLatitude()}
          </p>
        </div>
      ) : null}
      </InfoWindow>

    </Map>
  )
}

export default GoogleApiWrapper ({ apiKey: String (REACT_APP_GOOGLE_API_KEY) })(GoogleMapsContainer)