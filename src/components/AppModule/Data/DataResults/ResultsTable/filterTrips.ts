import moment from "moment"
import TripFull from "../../../../../models/TripFull.model"
import { SortFilter, SearchFilter, RangeFilter, RangeDirection, SortDirection } from "../../Filters/FilterTypes"

function lessThan (range: RangeDirection) {
  return range === RangeDirection.LESS_THAN
}

function greaterThan (range: RangeDirection) {
  return range === RangeDirection.GREATER_THAN
}

function parseValue (filterKey: string, value: string | number) {
  switch (filterKey) {
    case "distance":
    case "averageSpeed":
    case "averageAcceleration": {
      return Number (value)
    }
    case "startDate": {
      const DATE_FORMAT = ["DD-M-YYYY", "D-MM-YYYY", "DD-MM-YYYY", "D-M-YYYY"]
      return moment(value, DATE_FORMAT, true)
    }
    case "duration": {
      const DURATION_FORMAT = ["HH:mm:ss","H:mm:ss"]
      return moment(value, DURATION_FORMAT, true).toDate()
    }
    default: {
      throw new Error ("The value was invalid: " + value)
    }
  }
}

export default function filterTrips(
  trips: TripFull[], 
  sortFilters: SortFilter[], 
  searchFilters: SearchFilter[], 
  rangeFilters: RangeFilter[]): TripFull[] {

  if (!trips || trips.length < 1) return []
  else if (!sortFilters && !searchFilters && !rangeFilters) return trips

  let filteredTrips = [...trips]
  /**
   * 1. Apply @SearchFilters
   */

   if (searchFilters.length > 0) {
     searchFilters.forEach (filter => {
       filteredTrips = filteredTrips.filter (trip => {
         const tripKeys = Object.keys(trip)
         for (let index = 0; index < tripKeys.length; index++) {
           const tripKey = tripKeys[index]
           if (filter.key === tripKey) {
             const tripValues = Object.values(trip)
             const value = tripValues[index]
             return value.includes(filter.value)
           }
         }
         return false
       })
     })
   }

  /**
   * 2. Apply @RangeFilters
   */
  if (rangeFilters.length > 0) {
    rangeFilters.forEach(filter => {
      filteredTrips = filteredTrips.filter(trip => {
        const tripKeys= Object.keys(trip)
        const tripValues = Object.values(trip)
        const {
          lowerValue,
          lowerRange,
          upperValue,
          upperRange,
          key: filterKey
        } = filter
        
        for (let index = 0; index < tripKeys.length; index++) {
          const tripKey = tripKeys[index]
          if (filterKey === tripKey) {
            const value = tripValues[index]
            const parsedValue = parseValue(filterKey, value)
            if (lowerValue && upperValue) {
              // lowerValue < [tripKey] < upperValue
              if (lessThan(lowerRange) &&  lessThan(upperRange)) {
                const lowerParsedValue = parseValue(filterKey, lowerValue)
                const upperParsedValue = parseValue(filterKey, upperValue)
                return (lowerParsedValue < parsedValue) && (parsedValue < upperParsedValue)
              }
              // lowerValue > [tripKey] > upperValue
              else if (greaterThan(lowerRange) && greaterThan(upperRange)) {
                const lowerParsedValue = parseValue(filterKey, lowerValue)
                const upperParsedValue = parseValue(filterKey, upperValue)
                return (lowerParsedValue > parsedValue) && (parsedValue > upperParsedValue)
              }
              return false
            }
            else if (lowerValue) {
              const lowerParsedValue = parseValue(filterKey, lowerValue)
              // lowerValue < [tripKey]
              if (lessThan(lowerRange)) {
                return (lowerParsedValue < parsedValue)
              }
              // lowerValue > [tripKey]
              else if (greaterThan(lowerRange)) {
                return (lowerParsedValue > parsedValue)
              }
              return false
            }
            else if (upperValue) {
              const upperParsedValue = parseValue(filterKey, upperValue)
              // [tripKey] < upperValue
              if (lessThan(upperRange)) {
                return (parsedValue < upperParsedValue)
              }
              // [tripKey] > upperValue
              else if (greaterThan(upperRange)) {
                return (parsedValue > upperParsedValue)
              }
              return false
            }
          }
        }
        return false
      })
    })
  }

  /**
   * 3. Apply @SortFilter
   */
  if (sortFilters.length > 0) {
    const { key: filterKey, direction } = sortFilters[0]
    const tripKeys = Object.keys(filteredTrips[0])
    
    for (let index = 0; index < tripKeys.length; index++) {
      if (tripKeys[index] === filterKey) {
        switch (filterKey) {
          case "fileName": 
          case "city": 
          case "country": 
          case "startLocation": 
          case "endLocation": {             
            if (direction === SortDirection.ASCENDING) {
              filteredTrips.sort((tripA, tripB) => {
                const valueA = Object.values(tripA)[index]
                const valueB = Object.values(tripB)[index]
                if (valueA < valueB) return -1
                else if (valueA > valueB) return 1
                else return 0
              })
            }
            else {
              filteredTrips.sort((tripA, tripB) => {
                const valueA = Object.values(tripA)[index]
                const valueB = Object.values(tripB)[index]
                if (valueA > valueB) return -1
                else if (valueA < valueB) return 1
                else return 0
              })
            }
            break
          }
          case "duration": {
            const DURATION_FORMAT = ["HH:mm:ss","H:mm:ss"]
            filteredTrips.sort((tripA, tripB) => {
              const rawValueA = Object.values(tripA)[index]
              const rawValueB = Object.values(tripB)[index]
              const valueA = moment(rawValueA, DURATION_FORMAT, true).toDate().getTime()
              const valueB = moment(rawValueB, DURATION_FORMAT, true).toDate().getTime()
              if (direction === SortDirection.ASCENDING) {
                return (valueA - valueB)
              } else {
                return (valueB - valueA)
              }
            })
            break
          }
          case "startDate": {
            filteredTrips.sort((tripA, tripB) => {
              const valueA = new Date(Object.values(tripA)[index]).getTime()
              const valueB = new Date(Object.values(tripB)[index]).getTime()
              if (direction === SortDirection.ASCENDING) {
                return (valueA - valueB)
              } else {
                return (valueB - valueA)
              }
            })
            break
          }
          case "distance": 
          case "averageSpeed": 
          case "averageAcceleration": {
            filteredTrips.sort((tripA, tripB) => {
              const valueA = Number(Object.values(tripA)[index])
              const valueB = Number(Object.values(tripB)[index])
              if (direction === SortDirection.ASCENDING) {
                return (valueA - valueB)
              }
              else {
                return (valueB - valueA)
              }
            })
            break
          }
        }
        break
      }
    }
  }
  
  return filteredTrips
}