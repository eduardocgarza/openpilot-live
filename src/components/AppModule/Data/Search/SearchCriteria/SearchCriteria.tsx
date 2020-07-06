import React, { useState } from "react"
import { SearchFilters } from "../CreateSearch/CreateSearchStyles"
import { HeaderTwo } from "../../../../Shared/Layout/Layout"
import { SearchContainer, SearchHeader } from "../SearchStyles"
import { useDataContext } from "../../../../../state/context/DataContext"
import SearchFilterView from "../../Filters/Viewers/SearchFilterView/SearchFilterView"
import SortFilterView from "../../Filters/Viewers/SortFilterView/SortFilterView"
import RangeFilterView from "../../Filters/Viewers/RangeFilterView/RangeFilterView"

export default function DataSearchCriteria () {
  const { sortFilters, searchFilters, rangeFilters } = useDataContext()
  const [criteriaVisible, toggleCriteriaSearch] = useState (false)

  function toggleSearch () {
    toggleCriteriaSearch(!criteriaVisible)
  }

  return (
    <SearchContainer>
      <SearchHeader onClick={toggleSearch}>
        <HeaderTwo text="My Search Criteria" />
      </SearchHeader>
      {criteriaVisible ? (
        <SearchFilters>
          {(sortFilters.length > 0) && sortFilters.map (filter => (
            <SortFilterView filter={filter} key={filter.key} /> 
          ))}
          {(searchFilters.length > 0) && searchFilters.map(filter => (
            <SearchFilterView filter={filter} key={filter.key} />
          ))}
          {(rangeFilters.length > 0) && rangeFilters.map(filter => (
            <RangeFilterView filter={filter} key={filter.key} />
          ))}
        </SearchFilters>
      ) : null}
    </SearchContainer>
  )
}