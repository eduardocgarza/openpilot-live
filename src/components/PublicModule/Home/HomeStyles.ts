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
`

export const CommaMainImage = styled.img`
  border-radius: 5px;
  box-shadow: 2px 2px 6px 1px rgba(0,0,0, 0.5);
  display: block;
  height: auto;
  width: 600px;
`

export const ContentContainer = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`

export const HomeTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: InterLight;
  margin-bottom: 16px;
`

export const HomeDescription = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
`

export const HomeButton = styled.button`
  background: black;
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 14px;
  margin: 10px 0;
  padding: 8px 20px;
  text-align: center;

  &:hover {
    background: #111;
  }
`
