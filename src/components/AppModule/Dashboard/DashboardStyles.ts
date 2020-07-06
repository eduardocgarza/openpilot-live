import styled from "styled-components"
import { COLOR_MAIN_BLUE_LIGHT, COLOR_MAIN_BLUE } from "../../../constants/Colors"

export const DataContainer = styled.section`
  margin-bottom: 10px;
  padding: 10px;
`

export const AnalysisContainer = styled.section`
  margin-bottom: 10px;
  padding: 10px;
`

export const ViewAllButton = styled.button`
  background: ${COLOR_MAIN_BLUE_LIGHT};
  border: none;
  border-radius: 20px;
  color: white;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 16px auto;
  min-width: 100px;
  padding: 6px 20px;
  text-align: center;
  &:hover {
    background: ${COLOR_MAIN_BLUE};
  }
`