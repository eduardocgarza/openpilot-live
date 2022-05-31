import React from "react"
import { useHistory } from "react-router-dom"
import { Wrapper } from "../../Shared/Layout/LayoutStyles"
import useAppContext from "../../../state/context/AppContext"
import { HeaderTwo, ParagraphItem } from "../../Shared/Layout/Layout"
import { DataRoute } from "../../../router/Routes"
import ResultsTable from "../Data/DataResults/ResultsTable/ResultsTable"
import { DataContainer, ViewAllButton } from "./DashboardStyles"

const MAX_DISPLAY_ITEMS = 5

export default function Dashboard () {
  const history = useHistory()
  const { contextReady, trips: allTrips } = useAppContext()
  const noItemsText = "You have no items on this account. To do trip analysis, head over to the Upload tab to upload data"

  if (!contextReady) return null
  
  const maxItems = allTrips.length > MAX_DISPLAY_ITEMS ? MAX_DISPLAY_ITEMS : allTrips.length
  const trips = allTrips.slice(0, maxItems)
  
  function handleViewData () {
    history.push(DataRoute)
  }
  
  
  return (
    <Wrapper>
      <DataContainer>
        <HeaderTwo text="My Data" />
        {trips && trips.length === 0 ? <ParagraphItem text={noItemsText} / > : null}
        {trips && trips.length > 0 ? (
          <ResultsTable selectedEnabled={false} trips={trips} />
        ) : null}
        {trips.length > 0 ? (
          <ViewAllButton onClick={handleViewData}>View All</ViewAllButton>
        ) : null}
      </DataContainer>
    </Wrapper>
  )
}