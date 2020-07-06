import TripFull, { TripJSON, TripLocation, ITripFull } from "../models/TripFull.model"
import { TripFile } from "../components/AppModule/Upload/UploadButton/uploadFiles/uploadTypes"
import TripCoordinate from "../models/TripCoordinate.model"

export default function rebuildTripFromDB (trips: ITripFull[]) {
  return trips.map(trip => {
    const coordinates = trip.coordinates.map(coord => {
      const { index, distance, speed, latitude, longitude, accummulatedDistance, acceleration } = coord
      return new TripCoordinate(index, distance, speed, latitude, longitude, accummulatedDistance, acceleration)
    })
    
    const jsonFile: TripJSON = {
      startDate: trip.startDate,
      endDate: trip.endDate,
      coordinates
    }
    const tripFile: TripFile = {
      fileName: trip.fileName,
      fileSize: trip.fileSize,
      fileType: trip.fileType,
      lastModified: trip.lastModified,
    }
    const location: TripLocation = {
      startLocation: trip.startLocation,
      endLocation: trip.endLocation,
      city: trip.city,
      country: trip.country,
    }
  
    return new TripFull(jsonFile, tripFile, location)
  })
}