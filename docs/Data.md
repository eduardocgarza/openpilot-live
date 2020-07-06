# Data

____

## JSON Files

**Properties available directly on File**

- `lastModified`
- `lastModifiedDate`
- `name`
- `path`
- `size`
- `type`

**JSON data properties already available**

- `start_time`
- `end_time`
- `coords`

Coordinates follows the following syntax:

```js
interface Coordinate {
  index: number
  lat: number
  lng: number
  speed: number
  dist: number
}
```

____

### Properties to compute on Data

**Categories**

1. No Iteration
2. Iteration

#### Category 1: No Iteration

- `distance`
- `duration`

Requires [Google Reserve Geocoding API](https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse)

- `startLocation`
- `endLocation`
- `city`
- `country`

#### Category 2: Iteration

- `acceleration` (per Coordinate)
- `timeIdle`
- `timeMoving`
- `percentageIdle`
- `percentageMoving`
- `averageSpeed`
- `averageAcceleration`
- `accummulatedDistance`

____


### Properties needed for Uploading page

- `name`
- `size`
- `type`

### Properties needed for Datapage

- `name`
- `city`
- `country`
- `distance`
- `duration`
- `startLocation`
- `endLocation`
- `date`
- `time`
- `averageSpeed`
- `averageAcceleration`


### Properties needed for Analysis page

All data on single Trip

- `name`
- `city`
- `country`
- `distance`
- `duration`
- `startLocation`
- `endLocation`
- `date`
- `time`
- `averageSpeed`
- `averageAcceleration`

- `coords`: `Coordinate`

## Data to Collect - Single Trip

**Cluster Analysis**

Distributions (count)

- distance vs. count
- speed vs. count
- acceleration vs. count
- avg speed vs. count
- avg acceleration vs. count
- t moving vs count
- t idle vs count

Table:

- city | number of trips | avg distance/speed/acceleration/duration

Table

- city vs. km/day
- city vs. trips/day
- city vs. avg distance/duration/speed/acceleration

**For Each Coordinate**

- index
- distance
- speed
- acceleration
- time
- longitude
- latitude

**Example**

| Velocity/Acceleration | Time | Percentage | Cummulative | ~Cummulative |
|-|-|-|-|-|
|..|..|..|..|..|

**Graphs**

- time vs. distance/displacement
- time vs. velocity
- time vs. acceleration

**Map Analysis Features**

- Markers every X points
- Hover on marker to get instantaneous information
- Color path based on velocity/acceleration clusters

___

## Data to Collect - Aggregate Analysis


**Example**

| City | # trips | Average distance/time/speed/acc | %/amount idle/moving |
|-|-|-|-|
|..|..|..|..|

**Boxplot**

- city vs. (km/day, trips/day, avg. distance per trip)

___

## Data Search

1. Simple Filter
2. Search Filter
3. Range Filter

## Simple Filter

- Sort by
- Ascending | Descending
- Any range option
- Any search option
- fileName, city, country, distance, duration, date, time, startLocation, endLocation, averageAcceleration, averageSpeed

## Search Filter

- Search by
- fileName, city, country, startLocation, endLocation, date

## Range Filter

- Range on
- Less than, between, greater than
- Multiple ranges
- distance, duration, date, time, average speed, average acceleration
