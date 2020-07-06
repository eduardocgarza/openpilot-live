import React, { useState } from "react"
import JSONIcon from "../../../Shared/Icons/JSONIcon"
import TripFull from "../../../../models/TripFull.model"
import carIcon from "../../../../assets/icons/carIcon.png"
import { 
  ItemIcon, 
  ItemContent, 
  ItemExpand 
} from "../../../Shared/Layout/TableStyles"
import {
  ResultsItemWrapper,
  ResultsItemPreview,
  ItemButton,
  ItemAction,
  DeleteButton,
  AnalyzeButton,
  DetailsButton,
} from "./ResultsItemStyles"
import useAppContext from "../../../../state/context/AppContext"
import { getStatsSingleHeader } from "../../../AnalysisModule/SingleAnalysis/SingleHeader/generateStatsItems"
import StatsViewer from "../../../Shared/StatsViewer/StatsViewer"

interface ResultsItemProps {
  trip: TripFull
}

const icon = { url: carIcon, height: 60, width: 150 }

export default function ResultsItem (props: ResultsItemProps) {
  const { deleteTripItem, setSelectedTrips } = useAppContext()
  const { trip } = props
  const [toggleDetails, setToggle] = useState (false)
  const [selected] = useState (false)
  const [deleteMode, setDeleteMode] = useState(false)
  const [analyzeMode, setAnalyzeMode] = useState(false)
  
  function handleDelete () {
    if (!deleteMode) {
      return setDeleteMode(true)
    }
    deleteTripItem(trip)
  }

  function handleAnalyze () {
    if (!analyzeMode) {
      return setAnalyzeMode(true)
    }
    setSelectedTrips([trip])
  }

  function handleToggle () {
    setToggle (!toggleDetails)
  }

  const statsItems = getStatsSingleHeader(props.trip)

  return (
    <ResultsItemWrapper selected={selected}>
      <ResultsItemPreview selected={selected}>
        <ItemButton onClick={handleToggle}>
          <ItemIcon><JSONIcon width={26} /></ItemIcon>
          <ItemExpand>{trip.fileName}</ItemExpand>
          <ItemContent>{trip.getCity()}</ItemContent>
          <ItemContent>{trip.getCountry()}</ItemContent>
          <ItemContent>{trip.getDistance()}</ItemContent>
          <ItemContent>{trip.getDuration()}</ItemContent>
        </ItemButton>
        <ItemAction>
          <DetailsButton onClick={handleToggle}>Details</DetailsButton>
          <DeleteButton 
            deleteMode={deleteMode} 
            onClick={handleDelete}
          >
              Delete
          </DeleteButton>
          <AnalyzeButton 
            onClick={handleAnalyze}
            analyzeMode={analyzeMode}
          >
            Analyze
          </AnalyzeButton>
        </ItemAction>
      </ResultsItemPreview>
      {toggleDetails ? (
        <StatsViewer 
          icon={icon}
          header="Trip Information"
          items={statsItems}
        />
      ) : null}
    </ResultsItemWrapper>
  )
}