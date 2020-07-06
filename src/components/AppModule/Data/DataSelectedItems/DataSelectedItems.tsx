import React, { useState } from "react"
import { HeaderTwo } from "../../../Shared/Layout/Layout"
import ResultsHeader from "../DataResults/ResultsHeader/ResultsHeader"
import ResultsTable from "../DataResults/ResultsTable/ResultsTable"
import TripFull from "../../../../models/TripFull.model"

const ITEMS_PER_PAGE = 25

interface DataSelectedItemsProps {
  selected: TripFull[]
}

export default function DataSelectedItems (props: DataSelectedItemsProps) {
  const { selected } = props
  const [resultsPerPage, setResultsPerPage] = useState(ITEMS_PER_PAGE)
  return (
    <>
      <HeaderTwo text="Selected" />
      <ResultsHeader 
        resultsPerPage={resultsPerPage}
        setResultsPerPage={setResultsPerPage}
        trips={selected}
      />
      <ResultsTable 
        itemsPerPage={resultsPerPage} 
        trips={selected} 
      />
    </>
  )
}