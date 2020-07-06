import React from "react"
import { Wrapper } from "../../../Shared/Layout/LayoutStyles"
import CreateSearch from "../Search/CreateSearch/CreateSearch"
import SearchCriteria from "../Search/SearchCriteria/SearchCriteria"
import DataResults from "../DataResults/DataResults"
import DataSelectedItems from "../DataSelectedItems/DataSelectedItems"
import useAppContext from "../../../../state/context/AppContext"
import { DataContextProvider } from "../../../../state/context/DataContext"
import TripFull from "../../../../models/TripFull.model"
import DeleteData from "../DeleteData/DeleteData"

export default function Data () {
  const { contextReady, trips } = useAppContext()
  const tripsSelected: TripFull[] = []
  if (!contextReady) return null
  return (
    <Wrapper>
      <DataContextProvider>
        {trips.length > 0 ? <CreateSearch /> : null}
        {trips.length > 0 ? <SearchCriteria /> : null}
        <DataResults />
        {trips.length > 0 ? <DataSelectedItems selected={tripsSelected} /> : null}
        {trips.length > 0 ? <DeleteData /> : null}
      </DataContextProvider>
    </Wrapper>
  )
}