import React from "react"
import { ParagraphItem } from "../../../Shared/Layout/Layout"
import { DataRoute } from "../../../../router/Routes"
import {
  SampleDataWrapper,
  Header,
  Button,
} from "./UploadSuccessStyles"

export default function UploadSuccess () {
  return (
    <SampleDataWrapper>
      <Header>Upload Completed</Header>
      <ParagraphItem text="Your JSON data has been successfully uploaded. Head over to the Data tab to view your files and their analysis." />
      <Button to={DataRoute}>Go to Data</Button>
    </SampleDataWrapper>
  )
}