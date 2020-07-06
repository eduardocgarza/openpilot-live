import React from "react"
import SingleGraphs from "../SingleGraphs/SingleGraphs"
import { AnalysisWrapper } from "../../Shared/AnalysisStyles"
import SingleHeader from "../SingleHeader/SingleHeader"
import SingleMap from "../SingleMap/SingleMap"
import SingleDetails from "../SingleDetails/SingleDetails"
import useAppContext from "../../../../state/context/AppContext"
import {
  HeaderContainer,
  MapContainer,
  DetailsContainer,
  GraphContainer,
} from "./SingleAnalysisStyles"

export default function SingleAnalysis () {
  const { contextReady, selectedTrips: trips } = useAppContext()
  if (!contextReady || trips.length !== 1) return null
  const selectedTrip = trips[0]
  
  return (
    <AnalysisWrapper>
      <HeaderContainer>
        <SingleHeader trip={selectedTrip} />
      </HeaderContainer>
      <MapContainer>
        <SingleMap trip={selectedTrip} />
      </MapContainer>
      <DetailsContainer>
        <SingleDetails trip={selectedTrip} />
      </DetailsContainer>
      <GraphContainer>
        <SingleGraphs trip={selectedTrip} />
      </GraphContainer>
    </AnalysisWrapper>
  )
}