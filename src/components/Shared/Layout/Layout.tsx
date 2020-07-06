import React from "react"
import { 
  HeaderOneText, 
  HeaderTwoText,
  HeaderThreeText,
  ParagraphText,
} from "./LayoutStyles"

interface HeaderProps { text: string }

export function HeaderOne (props: HeaderProps) {
  return (
    <HeaderOneText>{props.text}</HeaderOneText>
  )
}

export function HeaderTwo (props: HeaderProps) {
  return (
    <HeaderTwoText>{props.text}</HeaderTwoText>
  )
}

export function HeaderThree (props: HeaderProps) {
  return (
    <HeaderThreeText>{props.text}</HeaderThreeText>
  )
}

interface ParagraphItemProps { text: string }
export function ParagraphItem (props: ParagraphItemProps) {
  return (
    <ParagraphText>{props.text}</ParagraphText>
  )
}

