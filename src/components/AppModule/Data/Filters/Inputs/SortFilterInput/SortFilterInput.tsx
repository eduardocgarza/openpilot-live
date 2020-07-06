import React, { useState, ChangeEvent } from "react"
import { Form } from "react-bootstrap"
import { SORT_FILTER_CATEGORIES, SortDirection } from "../../FilterTypes"
import { useDataContext } from "../../../../../../state/context/DataContext"
import {
  FilterContainer,
  AddFilterButton,
  SortDirectionButton,
  FilterSortInputContainer,
} from "../../FilterStyles"

export default function SortFilterInput () {
  const { addSortFilter } = useDataContext()
  const [direction, setDirection] = useState (SortDirection.ASCENDING)
  const [sortKey, setSortKey] = useState ("sortBy")
  const [displayKey, setDisplayKey] = useState("")
  
  function handleAdd () {
    if (sortKey !== "sortBy") {
      const newFilter = { 
        key: sortKey, 
        displayKey,
        direction 
      }
      addSortFilter(newFilter)
      clearState()
    }
  }

  function clearState() {
    setSortKey("sortBy")
    setDisplayKey("")
    setDirection(SortDirection.ASCENDING)
  }
  
  function handleDirectionToggle () {
    if (direction === SortDirection.ASCENDING) {
      setDirection (SortDirection.DESCENDING)    
    }
    else {
      setDirection(SortDirection.ASCENDING)
    }
  }

  function handleSelectOption (e: ChangeEvent<HTMLInputElement>) {
    const selectedKey = e.target.value
    for (const sortKey of SORT_FILTER_CATEGORIES) {
      if (selectedKey === sortKey.key) {
        setDisplayKey(sortKey.name)
        setSortKey(selectedKey)
        return
      }
    }
  }
  
  return (
    <FilterContainer>
      <AddFilterButton onClick={handleAdd}>+</AddFilterButton>
      <FilterSortInputContainer>
        <Form.Control 
          as="select" 
          size="sm" 
          onChange={handleSelectOption}
          value={sortKey}
        >
          <option value="sortBy">Sort by</option>
          {SORT_FILTER_CATEGORIES.map(sortKey => (
          <option value={sortKey.key} key={sortKey.key}>
              {sortKey.name}
            </option>
          ))}
        </Form.Control>
      </FilterSortInputContainer>
      <SortDirectionButton onClick={handleDirectionToggle}>{direction}</SortDirectionButton>
    </FilterContainer>
  )
}