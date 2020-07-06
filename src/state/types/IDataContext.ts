import { SortFilter, SearchFilter, RangeFilter } from "../../components/AppModule/Data/Filters/FilterTypes"

export interface IDataContext {
  // Sort Filters
  sortFilters: SortFilter[]
  addSortFilter: (s: SortFilter) => void
  deleteSortFilter: (f: SortFilter) => void
  // Search Filters
  searchFilters: SearchFilter[]
  addSearchFilter: (f: SearchFilter) => void
  deleteSearchFilter: (f: SearchFilter) => void
  // Range Filters
  rangeFilters: RangeFilter[]
  addRangeFilter: (f: RangeFilter) => void
  deleteRangeFilter: (f: RangeFilter) => void
}