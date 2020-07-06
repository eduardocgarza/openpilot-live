import styled from "styled-components"
import { 
  COLOR_MAIN_GREEN, 
  COLOR_MAIN_WARNING,
  COLOR_MAIN_WARNING_DARK,
  COLOR_MAIN_BLUE, 
  COLOR_MAIN_RED,
  COLOR_MAIN_BLUE_DARK,
  COLOR_MAIN_RED_DARK,
  COLOR_MAIN_GREEN_DARK
} from "../../../../constants/Colors"

export const UploadingWrapper = styled.div`
  margin-bottom: 30px;
`

export const UploadInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  & > * {
    flex: 1;
  }
`

export const UploadInfoText = styled.div`
  font-size: 15px;
`

export const UploadInfoDetails = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

const Badge = styled.div`
  display: block;
  border-radius: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 14px;
  margin: 0 6px;
  padding: 4px 16px;
  min-width: 150px;
  text-align: center;
`

/**
 * @Upload Buttons
 */
const UploadButton = styled.button`
  align-items: center;
  border: none;
  border-radius: 20px;
  display: flex;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  margin: 0;
  margin-left: 6px;
  padding: 4px 16px;
  white-space: nowrap;
  text-align: center;
`

export const ShowAllButton = styled(UploadButton)`
  background: F3A712;
  color: black;
`

export const ShowPendingButton = styled(UploadButton)`
  background: #00272b;
  color: white;

  &:hover {
    background: #001214;
  }
`

export const ShowFailedButton = styled(UploadButton)`
  background: ${COLOR_MAIN_RED};
  color: white;
  &:hover {
    background: ${COLOR_MAIN_RED_DARK};
  }
`

export const ShowUploadedButton = styled(UploadButton)`
  background: ${COLOR_MAIN_GREEN};
  color: white;
  &:hover {
    background: ${COLOR_MAIN_GREEN_DARK};
    color: white;
  }
`

export const ShowDuplicatesButton = styled(UploadButton)`
  background: ${COLOR_MAIN_WARNING};
  color: #111;

  &:hover {
    background: ${COLOR_MAIN_WARNING_DARK};
  }
`

export const BeginUploadButton = styled(UploadButton)`
  background: ${COLOR_MAIN_BLUE};
  color: white;
  white-space: nowrap;

  &:hover {
    background: ${COLOR_MAIN_BLUE_DARK};
  }
`

/**
 * End @Upload Buttons
 */

export const UploadBadgeSuccess = styled(Badge)`
  background: ${COLOR_MAIN_GREEN};
  color: white;
`

export const UploadBadgeFailed = styled(Badge)`
  background: ${COLOR_MAIN_RED};
  color: white;
`

export const ButtonBadge = styled.span`
  background: black;
  color: white;
  border-radius: 4px;
  padding: 2px 4px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  margin-left: 8px;
  font-weight: bold;
`