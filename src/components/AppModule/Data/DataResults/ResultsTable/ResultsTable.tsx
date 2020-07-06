import React, { useState } from "react"
import { UploadingTableContainer } from "../../../Upload/UploadingTable/UploadingTableStyles"
import { HeadAction } from "../../ResultsItem/ResultsItemStyles"
import ResultsItem from "../../ResultsItem/ResultsItem"
import TripFull from "../../../../../models/TripFull.model"
import CommaPagination from "../../../../Shared/CommaPagination/CommaPagination"
import {
  Header,
  HeadIcon,
  HeadExpand,
  HeadContent,
} from "../../../../Shared/Layout/TableStyles"

interface ResultsTableProps {
  selectedEnabled?: boolean
  itemsPerPage?: number
  trips: TripFull[]
}

export default function ResultsTable (props: ResultsTableProps) {
  const { itemsPerPage: perPage, trips } = props
  const [pageActive, setPage] = useState(0)

  const pages: TripFull[][] = []
  const itemsPerPage = perPage ? perPage : trips.length
  
  for (let index = 0; index < trips.length; index++) {
    const page = Math.floor (index / itemsPerPage)
    if (!pages[page]) pages[page] = [trips[index]]
    else pages[page].push(trips[index])
  }

  const pageContents = pages.map(page => {
    return page.map(trip => <ResultsItem trip={trip} key={trip.fileName} />)
  })
  
  return (
    <>
      <UploadingTableContainer>
        <Header>
          <HeadIcon />
          <HeadExpand>File name</HeadExpand>
          <HeadContent>City</HeadContent>
          <HeadContent>Country</HeadContent>
          <HeadContent>Distance</HeadContent>
          <HeadContent>Duration</HeadContent>
          <HeadAction>Actions</HeadAction>
        </Header>
      </UploadingTableContainer>

      {pageContents[pageActive]}

      {itemsPerPage ? (
        <CommaPagination
          pageActive={pageActive}
          setPage={setPage}
          pages={pages}
        />
      ) : null}
    </>
  )
}