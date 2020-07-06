import styled from "styled-components"
import { COLOR_MAIN_BLUE, COLOR_MAIN_BLUE_DARK } from "../../../../constants/Colors"

export const OuterDecorator = styled.div`
  background: #F1F1F1;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 30px auto 50px auto;
  min-height: 300px;
  padding: 16px;
  position: relative;
`

export const InnerDecorator = styled.div`
  background: #E4E4E4;
  border: 1px solid #C4C4C4;
  bottom: 12px;
  left: 12px;
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 1;
`

export const ContentContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex: 1 1 auto;
  z-index: 2;
`

export const UploadFileInput = styled.input`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  padding: 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto; 
`

export const UploadButtonContainer = styled.div`
`

export const Icons = styled.header`
  margin: 20px 0;
  & > * {
    margin: 0 10px;
  }
`

export const Button = styled.button`
  background: ${COLOR_MAIN_BLUE};
  border: none;
  border-radius: 30px;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 10px;
  padding: 10px 20px;

  &:hover {
    background: ${COLOR_MAIN_BLUE_DARK};
  }

  &:focus {
    outline: none;
  }
`

export const ButtonText = styled.p`
  color: white;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0;
  margin-left: 4px;
`

export const ButtonFooter = styled.p`
  color: #333;
  font-size: 15px;
`
