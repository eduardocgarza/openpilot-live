import styled from "styled-components"

export const SingleMapContainer = styled.section`
  height: 1200px;
  display: block;
  width: 100%;

  @media (min-width: 880px) {
    display: flex;
    height: 600px;
  }
`

export const GoogleMapsContainer = styled.section`
  height: 600px;
  position: relative;
  width: 100%;
  @media (min-width: 880px) {
    height: 100%;
    width: 70%;
  }
`

export const CoordinatesContainer = styled.section`
  height: 600px;
  overflow-y: scroll;
  width: 100%;
  @media (min-width: 880px) {
    height: 100%;
    width: 30%;
  }
`