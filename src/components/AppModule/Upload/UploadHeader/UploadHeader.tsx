import React from "react"
import { HeaderOne, ParagraphItem } from "../../../Shared/Layout/Layout"
import { UploadHeaderWrapper } from "./UploadHeaderStyles"
import UploadingStatusTypes from "../../../../models/types/UploadingStatusTypes.types"
import useAppContext from "../../../../state/context/AppContext"

interface UploadProps {
  uploadStatus: UploadingStatusTypes
}

const OFF_MESSAGE = "You have not yet uploaded any data. Drag and drop one or more JSON files, or a folder containing JSON files. See below for formatting details of the files you upload."
const PENDING_MESSAGE = "Drag and drop more files that you wish to upload, otherwise click upload to begin uploading your files."
const COMPLETE_MESSAGE = "Your files are now uploaded. Head over to Data to view and query for data."

function getMessage (tripsLength: number, uploadStatus: UploadingStatusTypes) {
  if (uploadStatus === UploadingStatusTypes.OFF) {
    return tripsLength === 0 ? <ParagraphItem text={OFF_MESSAGE} /> : null
  }
  else if (uploadStatus === UploadingStatusTypes.PENDING) {
    return <ParagraphItem text={PENDING_MESSAGE} />
  }
  else if (uploadStatus === UploadingStatusTypes.UPLOADING) {
    return null
  }
  else {
    return <ParagraphItem text={COMPLETE_MESSAGE} />
  }
}

export default function UploadHeader (props: UploadProps) {
  const { contextReady, trips } = useAppContext()
  if (!contextReady) return null
  const { uploadStatus } = props
  const message = getMessage(trips.length, uploadStatus)
  return (
    <UploadHeaderWrapper>
      {uploadStatus !== UploadingStatusTypes.UPLOADING ? <HeaderOne text="Upload" />: null}
      {uploadStatus === UploadingStatusTypes.UPLOADING ? <HeaderOne text="Uploading..." />: null}
      {message}
    </UploadHeaderWrapper>
  )
}