import React from "react"
import { HeaderTwo, HeaderOne, ParagraphItem, HeaderThree } from "../../../Shared/Layout/Layout"
import { Table } from "react-bootstrap"
import { TableWrapper } from "./UploadInstructionsStyles"

export default function UploadInstructions () {
  return (
    <>
      <HeaderOne text="Data Formating Instructions" />
      <ParagraphItem
        text="Please reference the information below to upload files and data that will successfully validate and upload
        into our application for analysis and storage."
      />
      {/* <HeaderTwo text="Zip Files" />
      <ParagraphItem
        text="ZIP is an archive file format that supports lossless data compression. A ZIP file may contain one or more files or directories that may have been compressed. Zip files end with the .zip file extension. The zip file you upload will be extracted and read by the application. All JSON files that follow the JSON format specified below will be uploaded to your data collection. Other files will be ignored."
      /> */}
      <HeaderTwo text="JSON File" />

      <TableWrapper>
        <HeaderThree text="Field Name" />
        <Table hover>
          <thead style={{ fontWeight: "bold" }}>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>filename</td>
              <td>
                Required. Each file should have a name ending with .json to identify the file. The file name can be anything since the date is read from the JSON properties within the file.
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>

      <TableWrapper>
        <HeaderThree text="File Content" />
        <Table hover>
          <thead style={{ fontWeight: "bold" }}>
            <tr>
              <th>Property</th>
              <th>Value</th>
              <th>Value Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>start_time</td>
              <td>string</td>
              <td>Required. The start_time property should be a Javascript Date object</td>
            </tr>
            <tr>
              <td>end_time</td>
              <td>string</td>
              <td>Required. The start_time property should be a Javascript Date object</td>
            </tr>
            <tr>
              <td>coords</td>
              <td>Coordinate[]</td>
              <td>Required. The coords property should follow the be a Coordinate object array</td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>

      <TableWrapper>
        <HeaderThree text="Coordinate Object" />
        <Table hover>
          <thead style={{ fontWeight: "bold" }}>
            <tr>
              <th>Property</th>
              <th>Value</th>
              <th>Value Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>index</td>
              <td>number</td>
              <td>Required. The property can be a string or number as it will be automatically converted.</td>
            </tr>
            <tr>
              <td>dist</td>
              <td>number</td>
              <td>Required. The property can be a string or number as it will be automatically converted.</td>
            </tr>
            <tr>
              <td>speed</td>
              <td>number</td>
              <td>Required. The property can be a string or number as it will be automatically converted.</td>
            </tr>
            <tr>
              <td>lng</td>
              <td>number</td>
              <td>Required. The property can be a string or number as it will be automatically converted.</td>
            </tr>
            <tr>
              <td>lat</td>
              <td>number</td>
              <td>Required. The property can be a string or number as it will be automatically converted.</td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
    </>
  )
}