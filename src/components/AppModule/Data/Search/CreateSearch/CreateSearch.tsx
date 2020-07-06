import React, { useState } from "react"
import { HeaderTwo } from "../../../../Shared/Layout/Layout"
import { SearchFilters } from "./CreateSearchStyles"
import { SearchContainer, SearchHeader } from "../SearchStyles"
import SortFilterInput from "../../Filters/Inputs/SortFilterInput/SortFilterInput"
import SearchFilterInput from "../../Filters/Inputs/SearchFilterInput/SearchFilterInput"
import RangeFilterInput from "../../Filters/Inputs/RangeFilterInput/RangeFilterInput"

export default function CreateSearch () {
  const [searchVisible, toggleCreateSearch] = useState (false)

  function toggleSearch () {
    toggleCreateSearch (!searchVisible)
  }
  
  return (
    <SearchContainer>
      <SearchHeader onClick={toggleSearch}>
        <HeaderTwo text="Create Search" />
      </SearchHeader>
      {searchVisible ? (
        <SearchFilters>
          <SortFilterInput /> 
          <SearchFilterInput />
          <RangeFilterInput />
        </SearchFilters>
      ) : null}
    </SearchContainer>
  )
}