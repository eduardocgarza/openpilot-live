import styled from "styled-components"

export const SingleGraphsContainer = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const GraphWrapper = styled.div`
  background: white;
  border: 1px solid #DDD;
  border-radius: 2px;
  margin: 4px;
  width: 100%;
  @media (min-width: 992px) {
    width: 48%;
  }
`

export const GraphHeader = styled.header`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 6px;
  padding: 10px;
  text-align: center;
`

export const GraphContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
`
