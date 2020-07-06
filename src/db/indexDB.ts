import { openDB, DBSchema } from "idb/with-async-ittr.js"
import { ITripFull } from "../models/TripFull.model"

const DB_VERSION_NUM = 1
export const DB_NAME = "openpilot"
export const DB_TRIPS_STORE = "trips"

export interface OpenpilotDB extends DBSchema {
  "trips": {
    key: string
    value: ITripFull
  };
}

export function startupDB () {
  return openDB<OpenpilotDB> (DB_NAME, DB_VERSION_NUM, {
    upgrade (db) {
      db.createObjectStore(DB_TRIPS_STORE, { keyPath: "fileName" })
    }
  })
}
