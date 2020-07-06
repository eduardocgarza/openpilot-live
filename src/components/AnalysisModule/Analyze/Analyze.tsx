import React from "react"
import SingleAnalysis from "../SingleAnalysis/SingleAnalysis/SingleAnalysis"
import useAppContext from "../../../state/context/AppContext"
import { HeaderOne, ParagraphItem } from "../../Shared/Layout/Layout"
import { Wrapper } from "../../Shared/Layout/LayoutStyles"

function WaitingForContext () {
  return (
    <Wrapper>
      <HeaderOne text="Analyze" />
      <ParagraphItem text="Waiting for trips to load.. please wait a few seconds. If the page does not load, try reloading." />
    </Wrapper>
  )
}

function NoTripSelected () {
  return (
    <Wrapper>
      <HeaderOne text="Analyze" />
      <ParagraphItem text="No trip selected. Go back to Data to select a trip to analyze." />
    </Wrapper>
  )
}

export default function Analyze () {
  const { contextReady, selectedTrips } = useAppContext()
  if (!contextReady) {
    return <WaitingForContext />
  }
  else if (selectedTrips.length === 0) {
    return <NoTripSelected />
  }
  else if (selectedTrips.length === 1) {
    return <SingleAnalysis />
  } else  {
    // TODO
    return <div>Aggregate Analysis</div>
  }
}