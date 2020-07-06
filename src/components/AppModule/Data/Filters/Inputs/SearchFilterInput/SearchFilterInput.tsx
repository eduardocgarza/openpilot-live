import React, { useState, ChangeEvent } from "react"
import { Form } from "react-bootstrap"
import { SearchInput } from "./SearchFilterInputStyles"
import { useDataContext } from "../../../../../../state/context/DataContext"
import { SEARCH_FILTER_CATEGORIES } from "../../FilterTypes"
import {
  FilterContainer,
  AddFilterButton,
  FilterSortInputContainer,
} from "../../FilterStyles"

export default function SearchFilterInput () {
  const { addSearchFilter } = useDataContext()
  const [searchValue, setSearchValue] = useState ("")
  const [sortKey, setSortKey] = useState ("sortBy")
  const [displayKey, setDisplayKey] = useState("")
  
  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    setSearchValue (e.target.value)
  }

  function handleAdd () {
    if (sortKey !== "searchBy" && searchValue) {
      const newFilter = { 
        key: sortKey, 
        displayKey,
        value: searchValue 
      }
      addSearchFilter(newFilter)
      clearState()
    }
  }

  function clearState() {
    setSortKey("searchBy")
    setDisplayKey("")
    setSearchValue("")
  }

  function handleSelectOption (e: ChangeEvent<HTMLInputElement>) {
    const selectedKey = e.target.value
    for (const sortKey of SEARCH_FILTER_CATEGORIES) {
      if (selectedKey === sortKey.key) {
        setDisplayKey(sortKey.name)
        setSortKey(selectedKey)
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
          <option value="searchBy">Search on</option>
          {SEARCH_FILTER_CATEGORIES.map(searchKey => (
            <option value={searchKey.key} key={searchKey.key}>
              {searchKey.name}
            </option>
          ))}
        </Form.Control>
      </FilterSortInputContainer>
      <SearchInput 
        onChange={handleChange} 
        placeholder="Search"
        value={searchValue}
      />
    </FilterContainer>
  )
}