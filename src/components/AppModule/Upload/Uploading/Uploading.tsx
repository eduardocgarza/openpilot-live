import React, { useState } from "react"
import UploadingTable from "../UploadingTable/UploadingTable"
import {
  UploadingWrapper,
  UploadInfo,
  UploadInfoText,
  UploadInfoDetails,
  UploadBadgeSuccess,
  BeginUploadButton,
  ShowAllButton,
  ShowPendingButton,
  ShowFailedButton,
  ShowUploadedButton,
  ShowDuplicatesButton,
  ButtonBadge,
} from "./UploadingStyles"

import { HeaderOne } from "../../../Shared/Layout/Layout"
import UploadingStatusTypes from "../../../../models/types/UploadingStatusTypes.types"
import TripUploadingFile from "../../../../models/TripUploadingFile.model"
import UploadTableDisplayMode from "../../../../models/types/UploadTableDisplayModeTypes.types"
import FileUploadStatusTypes from "../../../../models/types/FileUploadStatusTypes.types"

interface UploadingProps {
  files: TripUploadingFile[]
  deleteItem: (f: string) => void
  startUpload: () => void
  uploadStatus: UploadingStatusTypes
}

const ITEMS_PER_PAGE = 25

export default function Uploading (props: UploadingProps) {
  const [displayMode, setDisplayMode] = useState(UploadTableDisplayMode.ALL)
  const { files, uploadStatus, startUpload } = props
  const disableUpload = (uploadStatus !== UploadingStatusTypes.PENDING)

  let numDuplicates = 0, numPending = 0, numFailed = 0, numUploaded = 0
  files.forEach (file => {
    if (file.status === FileUploadStatusTypes.DUPLICATE) numDuplicates++
    if (file.status === FileUploadStatusTypes.PENDING) numPending++
    if (file.status === FileUploadStatusTypes.UPLOADED) numUploaded++
    if (file.status === FileUploadStatusTypes.FAILED) numFailed++
  })

  function handleShowAll() {
    if (displayMode !== UploadTableDisplayMode.ALL) {
      setDisplayMode(UploadTableDisplayMode.ALL)
    }
  }

  function handleShowPending() {
    if (displayMode !== UploadTableDisplayMode.PENDING) {
      setDisplayMode(UploadTableDisplayMode.PENDING)
    }
  }

  function handleShowFailed() {
    if (displayMode !== UploadTableDisplayMode.FAILED) {
      setDisplayMode(UploadTableDisplayMode.FAILED)
    }
  }

  function handleShowUploaded() {
    if (displayMode !== UploadTableDisplayMode.UPLOADED) {
      setDisplayMode(UploadTableDisplayMode.UPLOADED)
    }
  }

  function handleShowDuplicates() {
    if (displayMode !== UploadTableDisplayMode.DUPLICATES) {
      setDisplayMode(UploadTableDisplayMode.DUPLICATES)
    }
  }
  
  return (
    <UploadingWrapper>
      <HeaderOne text="Files to Upload" />
      <UploadInfo>
        <UploadInfoText>
          Showing {props.files.length < ITEMS_PER_PAGE ? props.files.length : ITEMS_PER_PAGE} of {props.files.length} files. When all files complete uploading, click here or head over to the Data tab to view all files with details.
        </UploadInfoText>
        <UploadInfoDetails>
          {(uploadStatus === UploadingStatusTypes.PENDING && numPending > 0) ? (
            <BeginUploadButton disabled={disableUpload} onClick={startUpload}>
              Start Upload
            </BeginUploadButton>
          ) : null}

          {uploadStatus === UploadingStatusTypes.PENDING ? (
            <>
              <ShowAllButton onClick={handleShowAll}>
                Show All <ButtonBadge>{files.length}</ButtonBadge>
              </ShowAllButton>
              <ShowDuplicatesButton onClick={handleShowDuplicates}>
                Duplicates <ButtonBadge>{numDuplicates}</ButtonBadge>
              </ShowDuplicatesButton>
              <ShowPendingButton onClick={handleShowPending}>
                Pending <ButtonBadge>{numPending}</ButtonBadge>
              </ShowPendingButton>
            </>
          ) : null}
          {uploadStatus === UploadingStatusTypes.COMPLETE ? (
            <>
            <ShowFailedButton onClick={handleShowFailed}>
              Failed <ButtonBadge>{numFailed}</ButtonBadge>
            </ShowFailedButton>
            <ShowUploadedButton onClick={handleShowUploaded}>
              Uploaded <ButtonBadge>{numUploaded}</ButtonBadge>
            </ShowUploadedButton>
            </>
          ) : null}

          {uploadStatus === UploadingStatusTypes.COMPLETE ? (
            <UploadBadgeSuccess>Upload Complete</UploadBadgeSuccess>
          ) : null}
          {/* <UploadBadgeFailed>{filesFailed} failed</UploadBadgeFailed> */}
        </UploadInfoDetails>
      </UploadInfo>
      <UploadingTable 
        deleteItem={props.deleteItem}
        files={props.files} 
        itemsPerPage={ITEMS_PER_PAGE}
        displayMode={displayMode}
      />
    </UploadingWrapper>
  )
}