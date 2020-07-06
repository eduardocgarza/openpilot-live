import React, { useState, ChangeEvent } from "react"
import { Form } from "react-bootstrap"
import { useDataContext } from "../../../../../../state/context/DataContext"
import { validateRange } from "./rangeFilterHelpers"
import { FilterContainer, AddFilterButton, FilterSortInputContainer } from "../../FilterStyles"
import {  RANGE_FILTER_CATEGORIES,  RangeDirection, RangeFilter } from "../../FilterTypes"
import {
  RangeInputContainer,
  LowStopInput,
  LowStopButton,
  HighStopInput,
  HighStopButton,
  UnitsInput,
} from "./RangeFilterInputStyles"

export default function RangeFilterInput () {
  const { addRangeFilter } = useDataContext()
  const [units, setUnits] = useState("")
  const [lowerValue, setLowerValue] = useState("")
  const [lowerRange, setLowerToggle] = useState(RangeDirection.LESS_THAN)
  const [upperValue , setUpperValue] = useState("")
  const [upperRange, setUpperToggle] = useState (RangeDirection.LESS_THAN)
  const [sortKey, setRangeKey] = useState ("sortBy")
  const [displayKey, setDisplayKey] = useState("")

  function handleLowerStopChange (e: ChangeEvent<HTMLInputElement>) {
    if (sortKey === "sortBy") return
    setLowerValue(e.target.value)    
  }
  
  function handleUpperStopChange (e: ChangeEvent<HTMLInputElement>) {
    if (sortKey === "sortBy") return
    setUpperValue(e.target.value)
  }

  function handleLowerStopToggle () {   
    if(lowerRange === RangeDirection.LESS_THAN) {
      // set GREATER_THAN
      if (lowerValue && !upperValue) {
        return setLowerToggle(RangeDirection.GREATER_THAN)
      }
      else if (lowerValue && upperValue)
      setLowerToggle(RangeDirection.GREATER_THAN)
      setUpperToggle(RangeDirection.GREATER_THAN)
      return 
    }
    // set LOWER_THAN
    else { 
      if (lowerValue && !upperValue) {
        return setLowerToggle(RangeDirection.LESS_THAN)
      } 
      else if (lowerValue && upperValue) {
        setLowerToggle(RangeDirection.LESS_THAN)
        setUpperToggle(RangeDirection.LESS_THAN)
        return 
      }
    }
  }
  
  function handleUpperStopToggle () {
    // set GREATER_THAN
    if(upperRange === RangeDirection.LESS_THAN) {
      if (upperValue && !lowerValue) {
        return setUpperToggle(RangeDirection.GREATER_THAN)
      }
      else if (upperValue && lowerValue) {
        setLowerToggle(RangeDirection.GREATER_THAN)
        setUpperToggle(RangeDirection.GREATER_THAN)
        return
      }
    }
    // set LESS_THAN
    else {
      if (upperValue && !lowerValue) {
        return setUpperToggle(RangeDirection.LESS_THAN)
      }
      else if (upperValue && lowerValue) {
        setLowerToggle(RangeDirection.LESS_THAN)
        setUpperToggle(RangeDirection.LESS_THAN)
        return 
      }
    }
  }

  function isRangeValid () {
    if (sortKey === "sortBy") return false
    const isValid = validateRange(sortKey, lowerValue, upperValue)
    return isValid
  }

  function clearState() {
    setLowerValue("")
    setUpperValue("")
    setUnits("")
    setRangeKey("sortBy")
    setDisplayKey("")
    setLowerToggle(RangeDirection.LESS_THAN)
    setUpperToggle(RangeDirection.LESS_THAN)
  }
  
  function handleAdd () {
    if (isRangeValid()) {
      const newFilter: RangeFilter = {
        lowerValue,
        lowerRange,
        upperValue,
        upperRange,
        key: sortKey,
        displayKey
      }
      addRangeFilter(newFilter)
      clearState()
    }
  }

  function handleSelectOption (e: ChangeEvent<HTMLInputElement>) {
    const optionSelected = e.target.value
    if (optionSelected === "rangeBy") {
      setRangeKey("rangeBy")
      setDisplayKey("")
      setUnits("")
      return
    }
    for (const sortKey of RANGE_FILTER_CATEGORIES) {
      if (optionSelected === sortKey.key) {
        setRangeKey(sortKey.key)
        setDisplayKey(sortKey.name)
        setUnits(sortKey.units)
        return
      }
    }
  }

  return (
    <FilterContainer>
      <AddFilterButton onClick={handleAdd}>+</AddFilterButton>
      <RangeInputContainer>
        <LowStopInput 
          onChange={handleLowerStopChange}
          placeholder="#"
          value={lowerValue}
        />
        <LowStopButton 
          onClick={handleLowerStopToggle}
        >
          {lowerRange}
        </LowStopButton>

        <FilterSortInputContainer>
          <Form.Control 
            as="select" 
            size="sm"
            onChange={handleSelectOption}
            value={sortKey}
          >
            <option value="rangeBy">Range on</option>
            {RANGE_FILTER_CATEGORIES.map (rangeKey => (
              <option value={rangeKey.key} key={rangeKey.key}>
                {rangeKey.name}
              </option>
            ))}
          </Form.Control>
        </FilterSortInputContainer>
        
        <HighStopButton 
          onClick={handleUpperStopToggle}
        >
          {upperRange}
        </HighStopButton>
        <HighStopInput 
          onChange={handleUpperStopChange} 
          placeholder="#"
          value={upperValue}
        />
        {units ? <UnitsInput value={units} disabled={true} /> : null}
      </RangeInputContainer>
    </FilterContainer>
  )
}