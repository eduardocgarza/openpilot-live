import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import { NavItem } from "./NavStyles"
import CommaLogo from "../Icons/CommaLogo"
import { HomeRoute } from "../../../router/Routes"

export default function UnauthorizedNav () { 
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="mr-auto ml-auto">
          <NavItem to={HomeRoute}>
            <CommaLogo />
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}