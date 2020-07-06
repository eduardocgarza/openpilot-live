export interface ISession {
  isAuthenticated: boolean
}

export type ISetSession = (session: ISession) => void

export type TSessionContext = {
  session: ISession
  setSession: ISetSession
}