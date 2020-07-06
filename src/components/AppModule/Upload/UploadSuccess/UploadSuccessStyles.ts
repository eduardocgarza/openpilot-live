import styled from "styled-components"
import { COLOR_MAIN_BLUE, COLOR_MAIN_BLUE_DARK } from "../../../../constants/Colors";
import { Link } from "react-router-dom";

export const SampleDataWrapper = styled.section`
  border: 1px solid ${COLOR_MAIN_BLUE};
  padding: 16px 20px;
  margin: 20px auto 0;
  margin-bottom: 30px;
  text-align: center;
  width: 80%;
`

export const Header = styled.header`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Button = styled(Link)`
  background: ${COLOR_MAIN_BLUE};
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
    background: ${COLOR_MAIN_BLUE_DARK};
    color: white;
  }
`