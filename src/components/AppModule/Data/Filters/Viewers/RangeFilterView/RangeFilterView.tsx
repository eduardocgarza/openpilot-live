import React from "react"
import { Form } from "react-bootstrap"
import { RangeFilterProps } from "../../FilterTypes"
import { useDataContext } from "../../../../../../state/context/DataContext"
import {
  FilterContainer,
  FilterSortInputContainer,
  DeleteFilterButton,
} from "../../FilterStyles"
import {
  RangeInputContainer,
  LowStopInput,
  LowStopButton,
  HighStopInput,
  HighStopButton,
} from "./RangeFilterViewStyles"

export default function RangeFilterView (props: RangeFilterProps) {
  const { deleteRangeFilter } = useDataContext()
  const { filter } = props
  function handleDelete () {
    deleteRangeFilter(filter)
  }
  
  return (
    <FilterContainer>
      <DeleteFilterButton onClick={handleDelete}>x</DeleteFilterButton>
      <RangeInputContainer>
        
        <LowStopInput value={filter.lowerValue} disabled={true} />
        <LowStopButton>
          {filter.lowerRange}
        </LowStopButton>
          
        <FilterSortInputContainer>
          <Form.Control as="select" size="sm" disabled={true}>
            <option>{filter.displayKey}</option>
          </Form.Control>
        </FilterSortInputContainer>
        
        <HighStopButton>
          {filter.upperRange}
        </HighStopButton>
        <HighStopInput value={filter.upperValue} disabled={true} />
        
      </RangeInputContainer>
    </FilterContainer>
  )
}