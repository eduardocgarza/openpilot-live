import React from "react"
import { GraphHeaderText } from "./GraphHeaderStyles"

interface GraphHeaderProps {
  text: string
}

export default function GraphHeader (props: GraphHeaderProps) {
  return (
    <GraphHeaderText>{props.text}</GraphHeaderText>
  )
}