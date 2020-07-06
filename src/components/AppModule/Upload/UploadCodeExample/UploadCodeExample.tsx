import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { ParagraphItem, HeaderOne } from "../../../Shared/Layout/Layout"
import codeExample from "../../../../assets/data/data.json"
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function UploadCodeExample () {
  return (
    <>
      <HeaderOne
        text="Example"
      />
      <ParagraphItem
        text="The code snippet below shows an example of a valid JSON file with all the required properties. If a file has additional properties, they will be simply ignored. We will let you know on upload which files did not meet our validation requirements, and these will simply be ignored."
      />
      <SyntaxHighlighter 
        language="javascript"
        showLineNumbers={true}
        style={gruvboxDark}
      >
        {JSON.stringify (codeExample, null, 2)}
      </SyntaxHighlighter>
    </>
  )
}