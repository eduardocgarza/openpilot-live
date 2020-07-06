import styled from "styled-components"
import { Link } from "react-router-dom"

export const NavWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
`

export const Logo = styled.img`
  display: block;
  height: 25px;
  width: 25px;
`

export const NavItem = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  /* padding: 8px;
  line-height: 0;
  text-decoration: none; */
  margin: 0 12px 0 0;
`

export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;

  &:hover {
    text-decoration: underline;
  }
`