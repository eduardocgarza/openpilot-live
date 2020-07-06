import React from "react"
import {
  SampleDataWrapper,
  Header,
  DownloadButton,
} from "./SampleDataStyles"
import { ParagraphItem } from "../../../Shared/Layout/Layout"

export default function SampleData() {
  return (
    <SampleDataWrapper>
      <Header>Don't have any JSON data that meets our requirements?</Header>
      <ParagraphItem text="Download our sample dataset below containing 30 trips with over 1,000 coordinates each. Then unzip the dataset and upload the folder directly." />
      <DownloadButton to="/sampleDataset.zip" target="_blank" download>Download</DownloadButton>
    </SampleDataWrapper>
  )
}