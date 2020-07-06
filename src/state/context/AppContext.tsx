import React, { createContext, useContext, useEffect, useState } from "react"
import { startupDB, DB_TRIPS_STORE } from "../../db/indexDB"
import TripFull from "../../models/TripFull.model"
import { useHistory } from "react-router-dom"
import { AnalyzeRoute, DashboardRoute } from "../../router/Routes"
import rebuildTripFromDB from "../../db/rebuildTripFromDB"
import { IApplicationContext } from "../types/IAppContext"

const initialState = {} as IApplicationContext
const AppContext = createContext<IApplicationContext> (initialState)

export const AppContextProvider: React.FC = (props) => {
  const history = useHistory()

  /** @Startup State */
  const [contextReady, setContextReady] = useState(false)

  /** @Context State */
  const [trips, setTrips] = useState<TripFull[]>([])
  const [selectedTrips, setSelectedTrips] = useState<TripFull[]>([])
  // const [recentAnalysis, setRecentAnalysis] = useState()

  async function loadStorage () {
    const db = await startupDB()
    
    // Get TripFull[] from IndexDB
    const store = db.transaction(DB_TRIPS_STORE).objectStore(DB_TRIPS_STORE)
    const tripsData = await store.getAll()
    const trips = rebuildTripFromDB(tripsData)
    setTrips(trips)
    setContextReady(true)
  }
  
  useEffect(() => {
    loadStorage()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (selectedTrips.length > 0) {
      history.push(AnalyzeRoute)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTrips])

  async function deleteTripItem (trip: TripFull) {
    if (contextReady) {
      try {
        const db = await startupDB()
        const store = db.transaction(DB_TRIPS_STORE, "readwrite").objectStore(DB_TRIPS_STORE)
        await store.delete(trip.fileName)
        for (let index = 0; index < trips.length; index++) {
          if (trips[index].fileName === trip.fileName){
            const newTrips = [...trips]
            newTrips.splice(index, 1)
            setTrips(newTrips)
            return
          }
        }
        throw new Error ("Did not find the item in trips[]")
      } 
      catch (error) {}
    }
  }

  async function deleteAllItems() {
    const db = await startupDB()
    const store = db.transaction(DB_TRIPS_STORE, "readwrite").objectStore(DB_TRIPS_STORE)
    await store.clear()
    setTrips([])
    setSelectedTrips([])
    history.push(DashboardRoute)
  }
  
  const appContextValue: IApplicationContext = {
    contextReady,
    setTrips,
    trips,
    setSelectedTrips,
    selectedTrips,
    deleteTripItem,
    deleteAllItems
  }
  
  return (
    <AppContext.Provider value={appContextValue}>
      {props.children}
    </AppContext.Provider>
  )
}

export default function useAppContext () {
  return useContext (AppContext)
}