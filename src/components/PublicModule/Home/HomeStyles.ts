import styled from "styled-components"

export const HomeWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
`

export const JumbotronContainer = styled.header`
  margin-bottom: 30px;

  & img {
    display: block;
    height: auto;
    max-width: 100%;
    width: 600px;
  }
`

export const ContentContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;

  & > h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  
  & > p {
    font-size: 15px;
    margin-bottom: 16px;
    max-width: 600px;
  }
`

export const HomeButton = styled.button`
  background: black;
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 15px;
  padding: 10px 20px;

  &:hover {
    background: #111;
  }
`
