import FileTypes from "../../../../../models/types/FileTypes.types"

export interface ITripJSONFileCoordinate {
  dist: number
  index: number
  lat: number
  lng: number
  speed: number
}

export interface ITripJSONFile {
  start_time: string
  end_time: string
  coords: ITripJSONFileCoordinate[]
}

export interface TripFile {
  fileName: string
  fileSize: number
  fileType: FileTypes
  lastModified: Date
}