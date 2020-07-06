import React, { useContext } from "react"
import { SessionContext } from "../../../state/context/SessionContext"
import AuthNav from "./AuthNav"
import UnauthorizedNav from "./UnauthNav"

export default function AppNav () {
  const { session } = useContext (SessionContext)
  return session.isAuthenticated ? <AuthNav /> : <UnauthorizedNav />
}