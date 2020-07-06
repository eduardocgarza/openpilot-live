import styled from "styled-components"
import FileUploadStatusTypes from "../../../../models/types/FileUploadStatusTypes.types"
import { 
  COLOR_MAIN_GREEN, 
  COLOR_MAIN_RED, 
  COLOR_MAIN_RED_LIGHT, 
  COLOR_MAIN_WARNING,
  COLOR_MAIN_GREEN_LIGHT
} from "../../../../constants/Colors"

interface WrapperProps {
  status: FileUploadStatusTypes
}

export const UploadItemWrapper = styled.div`
  background: ${(props: WrapperProps) => {
    switch (props.status) {
      case FileUploadStatusTypes.UPLOADED: {
        return COLOR_MAIN_GREEN_LIGHT
      }
      case FileUploadStatusTypes.DUPLICATE: {
        return COLOR_MAIN_WARNING
      }
      case FileUploadStatusTypes.FAILED: {
        return COLOR_MAIN_RED_LIGHT
      }
      default: {
        return "#F4F4F4"
      }
    }
  }};
  border-bottom: 1px solid #DDD;
  color: ${(props: WrapperProps) => {
    switch (props.status) {
      case FileUploadStatusTypes.PENDING:
      case FileUploadStatusTypes.DUPLICATE: {
        return "black"
      }
      default: {
        return "black"
      }
    }
  }};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  display: flex;
  padding: 6px 16px;
`

interface DeleteButtonProps { 
  deleteMode: boolean
}

export const SuccessBadge = styled.div`
  align-items: center;
  background: ${COLOR_MAIN_GREEN};
  border: 1px solid #333;
  border-radius: 2px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  justify-content: center;
  font-size: 12px;
  margin: 0;
  padding: 0;
  height: 25px;
  text-align: center;
  width: 25px;
`

export const DeleteButton = styled.button`
  background: ${(props: DeleteButtonProps) => {
    return (props.deleteMode ? COLOR_MAIN_RED : "#333")
  }};
  border: none;
  border-radius: 2px;
  color: #FFF;
  font-size: 12px;
  height: 25px;
  width: 25px;

  &:hover {
    background: ${(props: DeleteButtonProps) => {
    return (props.deleteMode ? COLOR_MAIN_RED_LIGHT : "#222")
  }};
  }
`
