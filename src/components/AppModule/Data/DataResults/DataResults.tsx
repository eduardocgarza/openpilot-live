import React, { useState } from "react"
import { HeaderTwo } from "../../../Shared/Layout/Layout"
import ResultsHeader from "./ResultsHeader/ResultsHeader"
import ResultsTable from "./ResultsTable/ResultsTable"
import { DataResultsWrapper } from "./DataResultsStyles"
import filterTrips from "./ResultsTable/filterTrips"
import { useDataContext } from "../../../../state/context/DataContext"
import useAppContext from "../../../../state/context/AppContext"

const ITEMS_PER_PAGE = 25

export default function DataResults () {
  const { contextReady, trips } = useAppContext()
  const { sortFilters, searchFilters, rangeFilters } = useDataContext()
  const [resultsPerPage, setResultsPerPage] = useState(ITEMS_PER_PAGE)
  if (!contextReady) return null
  const filteredTrips = filterTrips(trips, sortFilters, searchFilters, rangeFilters)
  return (
    <DataResultsWrapper>
      <HeaderTwo text="Results" />
      <ResultsHeader 
        resultsPerPage={resultsPerPage}
        setResultsPerPage={setResultsPerPage}
        trips={trips}
      />
      <ResultsTable 
        itemsPerPage={resultsPerPage} 
        trips={filteredTrips} 
      />
    </DataResultsWrapper>
  )
}