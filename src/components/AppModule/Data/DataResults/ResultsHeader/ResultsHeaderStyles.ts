import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`

export const ResultsInputContainer = styled.div`
  align-items: center;
  background: #F4F4F4;
  border: 1px solid #DDD;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  padding-left: 10px;
`

export const ResultsInput = styled.input`
  background: white;
  border: 1px solid #CCC;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  height: 100%;
  margin: 0 0 0 10px;
  padding: 4px 6px;
  width: 100px;
`

export const ActionsContainer = styled.div`
  align-items: center;
  display: flex;
`

const ResultsButton = styled.button`
  background: none;
  border: none;
  border-radius: 20px;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  margin: 0 0 0 10px;
  padding: 6px 16px;;
  text-align: center;
`

export const AggregateButton = styled(ResultsButton)`
  background: #444;
  color: white;

  &:hover {
    background: #222;
  }
`

export const AggregateSelectedButton = styled(ResultsButton)`
  background: #F6D465;
  color: #333;
  &:hover {
    background: #F3C42B;
  }
`

export const MatchesBadge = styled.div`
  background: #364DEF;
  color: white;
  border-radius: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: bold;
  margin-left: 10px;
  padding: 6px 16px;;
  text-align: center;
`
