export enum SortDirection {
  ASCENDING = "Ascending",
  DESCENDING = "Descending",
}

export enum RangeDirection {
  LESS_THAN = "<",
  GREATER_THAN = ">"
}

export const SORT_FILTER_CATEGORIES = [
  { key: "fileName", name: "File name" },
  { key: "city", name: "City" },
  { key: "country", name: "Country" },
  { key: "distance", name: "Distance" },
  { key: "duration", name: "Duration" },
  { key: "startLocation", name: "Start location" },
  { key: "endLocation", name: "End location" },
  { key: "startDate", name: "Date" },
  { key: "averageSpeed", name: "Average speed" },
  { key: "averageAcceleration", name: "Average acceleration" },
]

export const SEARCH_FILTER_CATEGORIES = [
  { key: "fileName", name: "File name" },
  { key: "city", name: "City" },
  { key: "country", name: "Country" },
  { key: "startLocation", name: "Start location" },
  { key: "endLocation", name: "End location" },
]

export const RANGE_FILTER_CATEGORIES =[
  { 
    key: "distance", 
    name: "Distance", 
    units: "miles"
  },
  { 
    key: "duration", 
    name: "Duration", 
    units: "HH:MM:SS"
  },
  { 
    key: "startDate", 
    name: "Date", 
    units: "DD-MM-YYYY"
  },
  { 
    key: "averageSpeed", 
    name: "Average speed",
    units: "mph"
  },
  { 
    key: "averageAcceleration", 
    name: "Average acceleration",
    units: "mph/s"
  }
]

/**
 * @Filters
 */
export interface SortFilter {
  key: string
  displayKey: string
  direction: SortDirection
}

export interface SearchFilter {
  key: string
  displayKey: string
  value: string
}

export interface RangeFilter {
  key: string
  displayKey: string
  lowerValue: number | string
  upperValue: number | string
  lowerRange: RangeDirection
  upperRange: RangeDirection
}

/**
 * @ReactComponent Props
 */
interface FilterProps {}

export interface SortFilterProps extends FilterProps {
  filter: SortFilter
}

export interface SearchFilterProps extends FilterProps {
  filter: SearchFilter
}

export interface RangeFilterProps extends FilterProps {
  filter: RangeFilter
}