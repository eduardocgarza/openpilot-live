import TripFull from "../../../models/TripFull.model"

export type PieMovementAdapter = { name: string, displayValue: string, value: number }[]

export function generateBarMovement (trip: TripFull): PieMovementAdapter {
  return [
    { 
      name: "Time Idle", 
      displayValue: trip.getTimeIdle(),
      value: trip.timeIdle 
    },
    { 
      name: "Time Moving", 
      displayValue: trip.getTimeMoving(),
      value: trip.timeMoving 
    }
  ]
}

export type DistanceTimeAdapter = { time: number, distance: number, accummulatedDistance: number }[]

export function generategraphDistanceTimeData
(trip: TripFull): DistanceTimeAdapter {
  return trip.coordinates.map(coordinate => ({
    time: coordinate.index,
    distance: Number(coordinate.distance.toFixed(2)),
    accummulatedDistance: Number(coordinate.accummulatedDistance.toFixed(2))
  }))
}

export type VelocityTimeAdapter = { time: number, speed: number }[]

export function generateGraphVelocityTimeData (trip: TripFull): VelocityTimeAdapter {
  return trip.coordinates.map(coordinate => ({
    time: coordinate.index,
    speed: Number(coordinate.speed.toFixed(2))
  }))
}

export type AccelerationTimeAdapter = { time: number, acceleration: number }[]

export function generateGraphAccelerationTimeData (trip: TripFull): AccelerationTimeAdapter {
  return trip.coordinates.map(coordinate => ({
    time: coordinate.index,
    acceleration: Number(coordinate.acceleration.toFixed(2))
  }))
}