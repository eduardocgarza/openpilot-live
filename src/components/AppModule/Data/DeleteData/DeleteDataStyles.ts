import styled from "styled-components"
import { 
  COLOR_MAIN_RED_LIGHT,
  COLOR_MAIN_RED_DARK
} from "../../../../constants/Colors"

export const DeleteDataWrapper = styled.section`
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 10px;
  margin-top: 20px;
`

export const DeleteDataContainer = styled.section`
  padding: 20px;
  padding-bottom: 0;
`

interface DeleteDataButtonProps { deleteMode: boolean }

export const DeleteDataButton = styled.button`
  background: ${(props: DeleteDataButtonProps) => {
    return props.deleteMode ?  "#333" : COLOR_MAIN_RED_LIGHT
  }};
  border: none;
  border-radius: 20px;
  color: white;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: bold;
  margin: 20px auto;
  padding: 10px 30px;
  text-align: center;
  width: 300px;

  &:hover {
    background: ${(props: DeleteDataButtonProps) => {
      return props.deleteMode ? "#111" : COLOR_MAIN_RED_DARK;
    }};
  } 
`