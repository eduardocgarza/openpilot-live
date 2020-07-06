import React, { createContext, useState, useContext } from "react"
import { SortFilter, SearchFilter, RangeFilter } from "../../components/AppModule/Data/Filters/FilterTypes"
import { IDataContext } from "../types/IDataContext"

const initialState = {} as IDataContext
export const DataContext = createContext<IDataContext>(initialState)

export const DataContextProvider: React.FC = (props) => {
  const [sortFilters, setSortFilters] = useState<SortFilter[]>([])
  const [searchFilters, setSearchFilters] = useState<SearchFilter[]>([])
  const [rangeFilters, setRangeFilters] = useState<RangeFilter[]>([])

  function addSortFilter (newFilter: SortFilter) {
    if (sortFilters.length === 1) return
    for (const filter of sortFilters) {
      if (filter.key === newFilter.key) return
    }
    setSortFilters([...sortFilters, newFilter])
  }

  function deleteSortFilter (f: SortFilter) {
    const newFiles = [...sortFilters]
    for (let index = 0; index < newFiles.length; index++) {
      if (f.key === newFiles[index].key) {
        newFiles.splice(index, 1)
        setSortFilters(newFiles)
      }
    }
  } 

  function addSearchFilter(newFilter: SearchFilter) {
    for (const filter of searchFilters) {
      if (filter.key === newFilter.key) {
        return
      }
    }
    setSearchFilters([...searchFilters, newFilter])
  }

  function deleteSearchFilter (f: SearchFilter) {
    const newFiles = [...searchFilters]
    for (let index = 0; index < newFiles.length; index++) {
      if (f.key === newFiles[index].key) {
        newFiles.splice(index, 1)
        setSearchFilters(newFiles)
      }
    }
  } 

  function addRangeFilter(newFilter: RangeFilter) {
    for (const filter of rangeFilters) {
      if (filter.key === newFilter.key) return
    }
    setRangeFilters([...rangeFilters, newFilter])
  }

  function deleteRangeFilter (f: RangeFilter) {
    const newFiles = [...rangeFilters]
    for (let index = 0; index < newFiles.length; index++) {
      if (f.key === newFiles[index].key) {
        newFiles.splice(index, 1)
        setRangeFilters(newFiles)
      }
    }
  } 
  
  const dataContextValue: IDataContext = {
    sortFilters, 
    addSortFilter,
    deleteSortFilter,
    searchFilters,
    addSearchFilter,
    deleteSearchFilter,
    rangeFilters, 
    addRangeFilter,
    deleteRangeFilter,
  }

  return (
    <DataContext.Provider value={dataContextValue}>
      {props.children}
    </DataContext.Provider>
  )
}

export function useDataContext() {
  return useContext(DataContext)
}