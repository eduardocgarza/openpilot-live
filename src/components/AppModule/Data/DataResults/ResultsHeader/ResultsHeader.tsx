import React, { ChangeEvent } from "react"
import {
  ActionsContainer,
  HeaderContainer,
  ResultsInputContainer,
  ResultsInput,
  AggregateButton,
  AggregateSelectedButton,
  MatchesBadge,
} from "./ResultsHeaderStyles"
import TripFull from "../../../../../models/TripFull.model"

interface ResultsHeaderProps {
  resultsPerPage: number
  setResultsPerPage: (n: number) => void
  trips: TripFull[]
}

export default function ResultsHeader (props: ResultsHeaderProps) {
  const { resultsPerPage, setResultsPerPage, trips } = props

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    setResultsPerPage(Number(e.target.value))
  }

  function handleAggregateClick () {}
  function handleAggregateSelectedClick () {}

  const MIN = trips.length < resultsPerPage ? trips.length : resultsPerPage
  const INITIAL_VALUE = trips.length < resultsPerPage ? trips.length : resultsPerPage
  
  return (
    <HeaderContainer>
      <ResultsInputContainer>
        Results per page
        <ResultsInput 
          onChange={handleChange}
          type="number"
          min={MIN}
          max={100}
          value={INITIAL_VALUE}
        />
      </ResultsInputContainer>
      <ActionsContainer>
        <AggregateButton onClick={handleAggregateClick} disabled={true}>
          Analysis on All Results
        </AggregateButton>
        <AggregateSelectedButton onClick={handleAggregateSelectedClick} disabled={true}>
          Analysis on Selected
        </AggregateSelectedButton>
        <MatchesBadge>{trips.length} matches</MatchesBadge>
      </ActionsContainer>
    </HeaderContainer>
  )
}