import { IDBPDatabase } from "idb"
import { OpenpilotDB, startupDB, DB_TRIPS_STORE } from "../../../../../db/indexDB"
import { ITripJSONFile } from "./uploadTypes"
import TripUploadingFile from "../../../../../models/TripUploadingFile.model"
import TripFull from "../../../../../models/TripFull.model"

export default async function readJSONFile (tripFile: TripUploadingFile): Promise<any> {
  const blob = new Response(tripFile.file)
  const db: IDBPDatabase<OpenpilotDB> = await startupDB()

  return blob.text()
    .then (function parseJSON (result) {
      if (result && typeof result === "string") {
        return JSON.parse(result)
      }
      else throw new Error ("This file contains invalid JSON syntax.")
    })
    .then (async function openAndUseDB (jsonFile: ITripJSONFile) {
      const trip = await TripFull.init (jsonFile, tripFile.get())
      const tripInDB = await db.get(DB_TRIPS_STORE, trip.fileName)
      if (!tripInDB) {
        await db.add(DB_TRIPS_STORE, trip)
        return trip
      }
      else throw new Error ("This file was already in the database")
    })
}