/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import CoordinateItem from "../../Shared/CoordinateItem/CoordinateItem"
import GoogleMap from "./GoogleMap"
import { 
  SingleMapContainer, 
  GoogleMapsContainer,
  CoordinatesContainer, 
} from "./SingleMapStyles"
import TripFull from "../../../../models/TripFull.model"

const COORDINATES_INCREMENT = 50

interface SingleMapProps {
  trip: TripFull
}

export default function SingleMap (props: SingleMapProps) {
  const { trip } = props
  const [moreCoordinates, setMoreCoordinates] = useState(false)
  const [amountVisible, setAmountVisible] = useState(0)
  const [coordinatesVisible, setCoordinatesVisible] = useState<JSX.Element[]>([])

  useEffect(function startup() {
    const initialCoordinates = []
    for (let index = 0; index < COORDINATES_INCREMENT; index++) {
      if (index === trip.coordinates.length) {
        setMoreCoordinates(false)
        setAmountVisible(index)
        setCoordinatesVisible(initialCoordinates)
        return
      }
  
      const coordinate = trip.coordinates[index]
      initialCoordinates.push(
        <CoordinateItem coordinate={coordinate} key={coordinate.index} />
      )
    }
    setMoreCoordinates(true)
    setCoordinatesVisible(initialCoordinates)
    setAmountVisible(COORDINATES_INCREMENT)
  }, [])
  
  function handleAddCoordinates () {
    if (!moreCoordinates) {
      return
    }

    const newAmountVisible = (amountVisible + COORDINATES_INCREMENT)
    let newAmountToAdd

    if (newAmountVisible > trip.coordinates.length) {
      setMoreCoordinates(false)
      newAmountToAdd = trip.coordinates.length
    } 
    else {
      newAmountToAdd = newAmountVisible
    }
    const newCoordinates = []
    for (let index = amountVisible; index < newAmountToAdd; index++) {
      const coordinate = trip.coordinates[index]
      newCoordinates.push(
        <CoordinateItem coordinate={coordinate} key={coordinate.index} />
        )
      }
      setAmountVisible(newAmountToAdd)
      setCoordinatesVisible([...coordinatesVisible, ...newCoordinates])
  }
  
  return (
    <SingleMapContainer>
      <GoogleMapsContainer>
        <GoogleMap trip={trip} />
      </GoogleMapsContainer>
      <CoordinatesContainer>
        {coordinatesVisible}
        <div className="d-flex justify-content-center">
          {moreCoordinates ? (
            <Button onClick={handleAddCoordinates} variant="primary">Show more</Button>
          ) : null}
        </div>
      </CoordinatesContainer>
    </SingleMapContainer>
  )
}