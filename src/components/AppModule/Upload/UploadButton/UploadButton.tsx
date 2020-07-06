import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import AddButtonIcon from "./AddButtonIcon"
import JSONIcon from "../../../Shared/Icons/JSONIcon"
// import ZIPIcon from "../../../Shared/ZIPIcon"
import { 
  UploadFileInput, 
  OuterDecorator,
  InnerDecorator,
  ContentContainer,
  Content,
  Icons,
  Button,
  ButtonText,
  ButtonFooter,
} from "./UploadButtonStyles"
import UploadingStatusTypes from "../../../../models/types/UploadingStatusTypes.types"

interface UploadButtonProps {
  createUploader: <T extends File>(acceptedFiles: T[]) => void
  uploadStatus: UploadingStatusTypes
}

export default function UploadButton (props: UploadButtonProps) {
  const { createUploader } = props
  const onDrop = useCallback(createUploader, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <OuterDecorator>
      <InnerDecorator />
      <ContentContainer {...getRootProps()}>
        <UploadFileInput
          {...getInputProps()}
          accept="application/json,.json,zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed" 
          multiple
          type="file" 
        />
        <Content>
          <Icons>
            <JSONIcon width={60} />
            {/* <ZIPIcon width={60} /> */}
          </Icons>
          <Button>
            <AddButtonIcon width={24} />
            <ButtonText>Choose File</ButtonText>
          </Button>
          <ButtonFooter>or drop file here</ButtonFooter>
        </Content>
      </ContentContainer>
    </OuterDecorator>
  )
}