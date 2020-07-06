import React, { useContext } from "react"
import { Route, Switch } from "react-router-dom"
import AuthSwitch from "./AuthSwitch"
import { AppContextProvider } from "../../state/context/AppContext"
import { SessionContext } from "../../state/context/SessionContext"
import { DashboardRoute, HomeRoute } from "../Routes"
import Dashboard from "../../components/AppModule/Dashboard/Dashboard"
import Home from "../../components/PublicModule/Home/Home"

export default function MainAppSwitch () {
  const { session } = useContext (SessionContext)
  return (
    <Switch>
      {!session.isAuthenticated ? (
        <Route path={HomeRoute} exact>
          <Home />
        </Route>
      ) : null}

      <AppContextProvider>
        {AuthSwitch.map (route => (
          <Route path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
        {session.isAuthenticated ? (
          <Route path={DashboardRoute} exact>
            <Dashboard />
          </Route>
        ) : null}
      </AppContextProvider>
    </Switch>
  )
}