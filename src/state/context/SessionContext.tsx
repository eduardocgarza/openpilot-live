import React, { createContext, useState } from "react"
import { ISession, TSessionContext } from "../types/ISessionContext"

const initialSession: ISession = {
  isAuthenticated: false,
}

const DEFAULT_VALUE: TSessionContext = {
  session: initialSession,
  setSession: (_session: ISession) => {}
}

export const SessionContext = createContext<TSessionContext>(DEFAULT_VALUE)

const SessionContextProvider: React.FC = (props) => {
  const [session, setSession] = useState (initialSession)
  const sessionContextValue = { session, setSession }

  return (
    <SessionContext.Provider value={sessionContextValue}>
      {props.children}
    </SessionContext.Provider>
  )
}

export default SessionContextProvider