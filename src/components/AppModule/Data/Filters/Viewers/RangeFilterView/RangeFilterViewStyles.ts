import styled from "styled-components"
import { SortDirectionButton, FitlerInput } from "../../FilterStyles"

export const RangeInputContainer = styled.div`
  align-items: center;
  display: flex;
`

const StopInput = styled(FitlerInput)`
  width: 100px;
`

export const LowStopInput = styled(StopInput)``
export const HighStopInput = styled(StopInput)``

const StopButton = styled(SortDirectionButton)`
  width: 50px;
`
export const LowStopButton = styled(StopButton)``
export const HighStopButton = styled(StopButton)``

export const RangeText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  margin: 0 16px;
`
