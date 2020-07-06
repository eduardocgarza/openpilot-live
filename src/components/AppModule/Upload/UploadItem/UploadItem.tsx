import React, { useState } from "react"
import JSONIcon from "../../../Shared/Icons/JSONIcon"
import FileUploadStatusTypes from "../../../../models/types/FileUploadStatusTypes.types"
import TripUploadingFile from "../../../../models/TripUploadingFile.model"
import {
  UploadItemWrapper,
  DeleteButton,
  SuccessBadge,
} from "./UploadItemStyles"
import {
  ItemIcon,
  ItemExpand,
  ItemContent,
  ItemButton,
} from "../../../Shared/Layout/TableStyles"

interface UploadItemProps {
  deleteItem: (f: string) => void
  item: TripUploadingFile
}

export default function UploadItem (props: UploadItemProps) {
  const [deleteMode, setDeleteMode] = useState(false)
  const { item, deleteItem } = props
  const { fileName, fileSize: size, status, fileType } = item
  const fileSize = `${(size / 1000).toFixed(2)} bytes`

  function handleDelete () {
    if (!deleteMode) setDeleteMode(true)
    else deleteItem(fileName)
  }
  
  return (
    <UploadItemWrapper status={status}>
      <ItemIcon>
        <JSONIcon width={26} />
      </ItemIcon>
      <ItemExpand>{fileName}</ItemExpand>
      <ItemContent>{fileSize}</ItemContent>
      <ItemContent>{fileType}</ItemContent>
      <ItemContent>{status}</ItemContent>
      <ItemButton>
        {item.status === FileUploadStatusTypes.UPLOADED ? (
          <SuccessBadge>&#10003;</SuccessBadge>
        ) : (
          <DeleteButton deleteMode={deleteMode} onClick={handleDelete}>x</DeleteButton>
        )}
      </ItemButton>
    </UploadItemWrapper>
  )
} 