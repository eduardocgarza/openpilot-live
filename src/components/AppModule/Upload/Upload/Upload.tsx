import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import UploadHeader from "../UploadHeader/UploadHeader"
import UploadInstructions from "../UploadInstructions/UploadInstructions"
import UploadCodeExample from "../UploadCodeExample/UploadCodeExample"
import UploadButton from "../UploadButton/UploadButton"
import Uploading from "../Uploading/Uploading"
import TripUploadingFile from "../../../../models/TripUploadingFile.model"
import UploadingStatusTypes from "../../../../models/types/UploadingStatusTypes.types"
import useAppContext from "../../../../state/context/AppContext"
import { setupUploader, startUploading } from "./uploadFilesHelpers"
import FileUploadStatusTypes from "../../../../models/types/FileUploadStatusTypes.types"
import SampleData from "../SampleData/SampleData"
import UploadSuccess from "../UploadSuccess/UploadSuccess"

export default function Upload () {
  const { contextReady, setTrips, trips } = useAppContext()
  const [files, setFiles] = useState<TripUploadingFile[]>([])
  const [uploadStatus, setUploadStatus] = useState(UploadingStatusTypes.OFF)

  useEffect(() => {
    if (files.length < 1) setUploadStatus(UploadingStatusTypes.OFF)
  }, [files])
  
  function createUploader<T extends File>(files: T[]) {
    const filesToUpload = setupUploader (files, trips)
    setFiles(filesToUpload)
    setUploadStatus(UploadingStatusTypes.PENDING)
  }

  async function startUploader() {
    if (files.length < 1 || uploadStatus !== UploadingStatusTypes.PENDING) return
    setUploadStatus(UploadingStatusTypes.UPLOADING)
    const newFiles = files.filter(file => file.status !== FileUploadStatusTypes.DUPLICATE)
    if (newFiles.length === 0) {
      setUploadStatus(UploadingStatusTypes.COMPLETE)
      return
    }
    const tripsResult = await startUploading(newFiles, setFiles)
    setUploadStatus(UploadingStatusTypes.COMPLETE)
    setTrips(tripsResult)
  }

  function deletePendingItem (fileName: string) {
    if (uploadStatus === UploadingStatusTypes.PENDING) {
      for (let index = 0; index < files.length; index++) {
        if (files[index].fileName === fileName) {
          const items = [...files]
          items.splice(index, 1)
          setFiles(items)
          return
        }
      }
    }
  }

  if (!contextReady) return null
  return (
    <Container fluid="lg">
      <UploadHeader uploadStatus={uploadStatus} />

      {uploadStatus === UploadingStatusTypes.OFF || uploadStatus === UploadingStatusTypes.PENDING ? (
        <UploadButton 
          uploadStatus={uploadStatus}
          createUploader={createUploader}
        />
      ) : null}

      {uploadStatus !== UploadingStatusTypes.COMPLETE ? <SampleData /> : null}
      {uploadStatus === UploadingStatusTypes.COMPLETE ? <UploadSuccess /> : null}
      
      {uploadStatus !== UploadingStatusTypes.OFF ? (
        <Uploading 
          files={files}
          startUpload={startUploader}
          deleteItem={deletePendingItem}
          uploadStatus={uploadStatus}
        />
      ) : null}
      
      <UploadInstructions />
      <UploadCodeExample />
    </Container>
  )
}