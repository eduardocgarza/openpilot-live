import styled from "styled-components"

export const ViewerWrapper = styled.section`
  align-items: center;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  padding: 16px 20px;
  text-align: center;

  @media (min-width: 800px) {
    flex-direction: row;
    text-align: left;
  }
`

export const Icon = styled.img`
  display: none;
  @media (min-width: 800px) {
    display: block;
    flex: 0;
    height: auto;
    margin-right: 20px;
  }
`

export const InfoContainer = styled.div`
  flex: 1;
`

export const InfoHeader = styled.p`
  border-bottom: 1px solid #333;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-bottom: 2px;
`

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  & > * {
    width: 50%;
    @media (min-width: 800px) {
      padding: 10px;
      width: 25%;
    }
  }

`
