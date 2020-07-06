import React from "react"
import TripCoordinate from "../../../../models/TripCoordinate.model"
import {
  CoordinateItemContainer,
  Item,
  TextHeader,
  Text,
} from "./CoordinateItemStyles"

interface CoordinateItemProps {
  coordinate: TripCoordinate
}

export default function CoordinateItem(props: CoordinateItemProps) {
  const { coordinate } = props
  return (
    <CoordinateItemContainer>
      <Item>
        <TextHeader>Time:</TextHeader>
        <Text>{coordinate.getTime()}</Text>
      </Item>
      <Item>
        <TextHeader>Distance:</TextHeader>
        <Text>{coordinate.getDistance()}</Text>
      </Item>
      <Item>
        <TextHeader>Speed:</TextHeader>
        <Text>{coordinate.getSpeed()}</Text>
      </Item>
      <Item>
        <TextHeader>Latitude:</TextHeader>
        <Text>{coordinate.getLatitude()}</Text>
      </Item>
      <Item>
        <TextHeader>Longtiude:</TextHeader>
        <Text>{coordinate.getLongitude()}</Text>
      </Item>
    </CoordinateItemContainer>
  )
}