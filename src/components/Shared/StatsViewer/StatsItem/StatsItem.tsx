import React from "react"
import {
  StatsItemContainer,
  StatsItemHeader,
  StatsItemValue,
} from "./StatsItemStyles"

interface StatsItemProps {
  item: {
    header: string
    value: string
  }
}

export function StatsItem (props: StatsItemProps) {
  const { item } = props
  
  return (
    <StatsItemContainer>
      <StatsItemHeader>{item.header}</StatsItemHeader>
      <StatsItemValue>{item.value}</StatsItemValue>
    </StatsItemContainer>
  )
} 