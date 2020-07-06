import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"
import { NavItem, NavButton } from "./NavStyles"
import CommaLogo from "../Icons/CommaLogo"
import { SessionContext } from "../../../state/context/SessionContext"
import { 
  DashboardRoute, 
  HomeRoute, 
  DataRoute,
  UploadRoute
} from "../../../router/Routes"

export default function AuthNav () {
  const history = useHistory ()
  const { setSession } = useContext (SessionContext)

  function handleSignout () {
    setSession ({ isAuthenticated: false })
    history.push (HomeRoute)
  }

  return (
    <Navbar collapseOnSelect bg="light" variant="light">
      <Container fluid="xl">
        <NavItem to={DashboardRoute}>
          <CommaLogo />
        </NavItem>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto d-flex align-items-center">
            <NavItem className="nav-link" to={DashboardRoute}>
              Dashboard
            </NavItem>
            <NavItem className="nav-link" to={DataRoute}>
              Data
            </NavItem>
            <NavItem className="nav-link" to={UploadRoute}>
              Upload
            </NavItem>
          </Nav>
          <Nav className="ml-auto">
            <NavButton onClick={handleSignout}>
              Sign out
            </NavButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}