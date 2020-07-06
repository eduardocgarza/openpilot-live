import React from "react"
import infoIcon from "../../../../assets/icons/infoIcon.png"
import { Container } from "react-bootstrap"
import StatsViewer from "../../../Shared/StatsViewer/StatsViewer"
import { getStatsSingleDetails } from "../SingleHeader/generateStatsItems"
import TripFull from "../../../../models/TripFull.model"

const icon = { url: infoIcon, height: 60, width: 60 }

interface SingleDetailsProps {
  trip: TripFull
}

export default function SingleDetails(props: SingleDetailsProps) {
  const statsItems = getStatsSingleDetails(props.trip)
  return (
    <Container>
      <StatsViewer 
        icon={icon}
        header="Trip Analysis"
        items={statsItems}
      />
    </Container>
  )
}