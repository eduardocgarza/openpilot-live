import styled from "styled-components"
import { 
  COLOR_MAIN_WARNING_DARK, 
  COLOR_MAIN_WARNING, 
  COLOR_MAIN_RED_DARK, 
  COLOR_MAIN_BLUE_DARK,
  COLOR_MAIN_BLUE_LIGHT, 
  COLOR_MAIN_RED_LIGHT, 
  COLOR_MAIN_GREEN, 
  COLOR_MAIN_GREEN_DARK
} from "../../../../constants/Colors"

interface WrapperProps { selected: boolean }

export const ResultsItemWrapper = styled.section`
  background: ${(props: WrapperProps) => {
    return props.selected ? COLOR_MAIN_WARNING : "none"
  }};
  border-bottom: 1px solid #CCC;
  border-left: 1px solid #CCC;;
  border-right: 1px solid #CCC;;
  padding: 2px 0;
`

export const ResultsItemPreview = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  
  &:hover {
    background: ${(props: WrapperProps) => {
      return props.selected ? COLOR_MAIN_WARNING_DARK : "#F4F4F4"
    }}
  }

  &:focus {
    outline: none;
  }
`
export const ItemButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  text-align: left;
  width: 100%;
`

export const HeadAction = styled.div`
  margin-left: 8px;
  min-width: 200px;
`

export const ItemAction = styled.div`
  align-items: center;
  display: flex;
  margin-left: 8px;
  min-width: 200px;
`

const ResultsButton = styled.button`
  background: none;
  border: none;
  border-radius: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 2px 8px;
  margin: 0 8px 0 0;
  z-index: 1;
`

export const DetailsButton = styled(ResultsButton)`
  background: ${COLOR_MAIN_BLUE_LIGHT};
  color: white;

  &:hover {
    background: ${COLOR_MAIN_BLUE_DARK};
  }
`

interface DeleteButtonProps { deleteMode: boolean }

export const DeleteButton = styled(ResultsButton)`
  background: ${(props: DeleteButtonProps) => {
    return props.deleteMode ? COLOR_MAIN_RED_DARK : COLOR_MAIN_RED_LIGHT
  }};
  color: white;
  &:hover {
    background: ${COLOR_MAIN_RED_DARK};
  }
`

interface AnalyzeButtonProps { analyzeMode: boolean }

export const AnalyzeButton = styled(ResultsButton)`
  background: ${(props: AnalyzeButtonProps) => {
    return props.analyzeMode ? COLOR_MAIN_GREEN_DARK : COLOR_MAIN_GREEN
  }};
  color: white;
  &:hover {
    background: ${COLOR_MAIN_GREEN_DARK};
  }
`
