import styled from "styled-components"

export const CoordinateItemContainer = styled.div`
  border-bottom: 1px solid #DDD;
  display: flex;
  flex-wrap: wrap;
  padding: 4px 8px;
`

export const Item = styled.div`
  display: flex;
  white-space: nowrap;
`

const CoordinateText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 0 6px 0 0;
`

export const TextHeader = styled(CoordinateText)`
  font-weight: bold;
`

export const Text = styled(CoordinateText)``