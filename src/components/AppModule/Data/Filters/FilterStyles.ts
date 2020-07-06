import styled from "styled-components"

export const FilterContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid #DDD;
  display: flex;
  margin-bottom: 4px;
  padding: 6px 10px;
`

const FilterButton = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  height: 30px;
  margin: 0 16px 0 0;
  padding: 0;
  width: 30px;
`

export const AddFilterButton = styled(FilterButton)`
  background: white;
  border: 1px solid #DDD;

  &:hover {
    background: #F4F4F4;
  }
`

export const DeleteFilterButton = styled(FilterButton)`
  background: #FE654F;
  color: white;
`

export const FilterSortInputContainer = styled.div`
  margin: 0 16px;
`

export const SortDirectionButton = styled.button`
  background: #F4F4F4;
  border: 1px solid #DDD;
  border-radius: 2px;
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  padding: 4px 12px;

  &:focus {
    outline: none;
  }
`

export const FitlerInput = styled.input`
  background: white;
  border: 1px solid #CCC;
  border-radius: 2px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 0;
  width: 300px;
  padding: 4px 6px;
`