import React from "react"
import { Form } from "react-bootstrap"
import { SortFilterProps } from "../../FilterTypes"
import { useDataContext } from "../../../../../../state/context/DataContext"
import {
  FilterContainer,
  SortDirectionButton,
  FilterSortInputContainer,
  DeleteFilterButton,
} from "../../FilterStyles"

export default function SortFilterView (props: SortFilterProps) {
  const { deleteSortFilter } = useDataContext()
  const { filter } = props
  function handleDelete () {
    deleteSortFilter(filter)
  }

  return (
    <FilterContainer>
      <DeleteFilterButton onClick={handleDelete}>x</DeleteFilterButton>
      <FilterSortInputContainer>
        <Form.Control as="select" size="sm" disabled={true}>
          <option>{filter.displayKey}</option>
        </Form.Control>
      </FilterSortInputContainer>
      <SortDirectionButton>
        {filter.direction}
      </SortDirectionButton>
    </FilterContainer>
  )
}