import moment from "moment"

export interface ITripCoordinate {
  index: number
  latitude: number
  longitude: number
  time: number
  distance: number
  accummulatedDistance: number
  speed: number
  acceleration: number
}

export default class TripCoordinate implements ITripCoordinate {
  public index: number
  public latitude: number
  public longitude: number
  public time: number
  public distance: number
  public accummulatedDistance: number
  public speed: number
  public acceleration: number

  constructor (index: number, dist: number, speed: number, lat: number, lng: number, accummulatedDistance: number, acceleration: number) {
    this.index = index
    this.latitude = lat
    this.longitude = lng
    this.time = index
    this.accummulatedDistance = accummulatedDistance
    this.distance = dist
    this.speed = speed
    this.acceleration = acceleration
  }

  public getLatitude (): string {
    return this.latitude.toFixed(3)
  }

  public getLongitude (): string {
    return this.longitude.toFixed(3)
  }

  public getTime (): string {
    return moment.utc(this.index * 1000).format("HH:mm:ss")
  }

  public getDistance (): string {
    return `${Number(this.accummulatedDistance.toFixed(2)).toLocaleString()} miles`
  }

  public getAccummulatedDistance (): string {
    return `${Math.round(this.accummulatedDistance).toLocaleString()} miles`
  }

  public getSpeed (): string {
    return `${this.speed.toFixed(2)} mph`
  }

  public getAcceleration (): string {
    return `${this.acceleration.toFixed(2)} mph/s`
  }

}