import React from "react"
import carIcon from "../../../../assets/icons/carIcon.png"
import { Container } from "react-bootstrap"
import StatsViewer from "../../../Shared/StatsViewer/StatsViewer"
import { getStatsSingleHeader } from "./generateStatsItems"
import TripFull from "../../../../models/TripFull.model"

const icon = { url: carIcon, height: 60, width: 150 }

interface SingleHeaderProps {
  trip: TripFull
}

export default function SingleHeader(props: SingleHeaderProps) {
  const statsItems = getStatsSingleHeader(props.trip) 
  return (
    <Container>
      <StatsViewer 
        icon={icon}
        header="Trip Information"
        items={statsItems}
      />
    </Container>
  )
}