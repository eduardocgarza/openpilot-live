import React, { useState } from "react"
import { UploadingTableContainer } from "./UploadingTableStyles"
import UploadItem from "../UploadItem/UploadItem"
import TripUploadingFile from "../../../../models/TripUploadingFile.model"
import CommaPagination from "../../../Shared/CommaPagination/CommaPagination"
import UploadTableDisplayModeTypes from "../../../../models/types/UploadTableDisplayModeTypes.types"
import FileUploadStatusTypes from "../../../../models/types/FileUploadStatusTypes.types"
import {
  Header,
  HeadIcon,
  HeadExpand,
  HeadContent,
  HeadButton,
} from "../../../Shared/Layout/TableStyles"

interface UploadingTableProps {
  files: TripUploadingFile[]
  deleteItem: (f: string) => void
  displayMode: UploadTableDisplayModeTypes
  itemsPerPage: number
}

function filterFiles (displayMode: UploadTableDisplayModeTypes, files: TripUploadingFile[]) {
  if (displayMode === UploadTableDisplayModeTypes.ALL) // ALL
    return files
  else if (displayMode === UploadTableDisplayModeTypes.DUPLICATES) // DUPLICATES
    return files.filter(file => file.status === FileUploadStatusTypes.DUPLICATE)
  else if (displayMode === UploadTableDisplayModeTypes.PENDING) // PENDING
    return files.filter(file => file.status === FileUploadStatusTypes.PENDING)
  else if (displayMode === UploadTableDisplayModeTypes.UPLOADED) // FAILED
    return files.filter(file => file.status === FileUploadStatusTypes.UPLOADED)
  else // UPLOADED
    return files.filter(file => file.status === FileUploadStatusTypes.FAILED)
}

export default function UploadingTable (props: UploadingTableProps) {
  const [pageActive, setPage] = useState(0)
  const { files: allFiles, deleteItem, displayMode, itemsPerPage } = props
  const pages: TripUploadingFile[][] = []
  const files = filterFiles(displayMode, allFiles)

  for (let index = 0; index < files.length; index++) {
    const page = Math.floor (index / itemsPerPage)
    if (!pages[page]) pages[page] = [files[index]]
    else pages[page].push(files[index])
  }

  const pageContents = pages.map(page => {
    return page.map (item => <UploadItem item={item} deleteItem={deleteItem} key={item.fileName} />)
  })
  
  return (
    <UploadingTableContainer>
      <Header>
        <HeadIcon />
        <HeadExpand>File</HeadExpand>
        <HeadContent>Size</HeadContent>
        <HeadContent>Type</HeadContent>
        <HeadContent>Status</HeadContent>
        <HeadButton />
      </Header>
      
      {pageContents[pageActive]}

      <CommaPagination
        pageActive={pageActive}
        setPage={setPage}
        pages={pages}
      />
      
    </UploadingTableContainer>
  )
}