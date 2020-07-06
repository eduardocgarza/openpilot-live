import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppNav from "../components/Shared/Navigation/AppNav"
import MainAppSwitch from "./switches/MainAppSwitch"

export default function AppRouter () {
  return (
    <BrowserRouter>
      <AppNav />
      <MainAppSwitch />
    </BrowserRouter>
  )
}