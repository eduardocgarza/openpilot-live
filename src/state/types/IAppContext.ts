import TripFull from "../../models/TripFull.model"

export interface IApplicationContext {
  contextReady: boolean
  selectedTrips: TripFull[]
  setSelectedTrips: (t: TripFull[]) => void
  setTrips: (t: TripFull[]) => void
  trips: TripFull[]
  deleteTripItem: (trip: TripFull) => void
  deleteAllItems: () => void
}