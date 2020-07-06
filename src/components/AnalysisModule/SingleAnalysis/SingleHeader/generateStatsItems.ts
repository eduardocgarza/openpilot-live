import TripFull from "../../../../models/TripFull.model"

class StatsContentItem {
  header: string
  value: string

  constructor (header: string, value: string) {
    this.header = header
    this.value = value
  }
}

export function getStatsSingleHeader(trip: TripFull) {
  return [
    new StatsContentItem("Start Location", trip.getStartLocation()),
    new StatsContentItem("End Location", trip.getEndLocation()),
    new StatsContentItem("Distance", trip.getDistance()),
    new StatsContentItem("Duration", trip.getDuration()),
    new StatsContentItem("Date", trip.getStartDate()),
    new StatsContentItem("Time", trip.getStartTime()),
    new StatsContentItem("Average Speed", trip.getAverageSpeed()),
    new StatsContentItem("Average Acceleration", trip.getAverageAcceleration())
  ]
}

export function getStatsSingleDetails(trip: TripFull) {
  return [
    new StatsContentItem("Distance", trip.getDistance()),
    new StatsContentItem("Duration", trip.getDuration()),
    new StatsContentItem("Average Speed", trip.getAverageSpeed()),
    new StatsContentItem("Average Acceleration", trip.getAverageAcceleration()),
    new StatsContentItem("Time Moving", trip.getTimeMoving()),
    new StatsContentItem("Percentage Moving", trip.getPercentageMoving()),
    new StatsContentItem("Time Idle", trip.getTimeIdle()),
    new StatsContentItem("Percentage Idle", trip.getPercentageIdle()),
  ]
}

export function getStatsAggregateHeader(trip: TripFull) {
  return []  
}

export function getStatsAggregateDetails(trip: TripFull) {
  return []  
}