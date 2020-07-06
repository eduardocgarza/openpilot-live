import React from "react"
import { useDataContext } from "../../../../../../state/context/DataContext"
import { Form } from "react-bootstrap"
import { SearchInput } from "./SearchFilterStyles"
import { SearchFilterProps } from "../../FilterTypes"
import {
  FilterContainer,
  FilterSortInputContainer,
  DeleteFilterButton,
} from "../../FilterStyles"

export default function SearchFilterView (props: SearchFilterProps) {
  const { deleteSearchFilter } = useDataContext()
  const { filter } = props
  function handleDelete () {
    deleteSearchFilter(filter)
  }

  return (
    <FilterContainer>
      <DeleteFilterButton onClick={handleDelete}>x</DeleteFilterButton>
      <FilterSortInputContainer>
        <Form.Control as="select" size="sm" disabled={true}>
          <option>{filter.displayKey}</option>
        </Form.Control>
      </FilterSortInputContainer>
      <SearchInput value={filter.value} disabled={true} />
    </FilterContainer>
  )
}