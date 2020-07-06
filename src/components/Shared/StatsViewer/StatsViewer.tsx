import React from "react"
import { StatsItem } from "./StatsItem/StatsItem"
import {
  ViewerWrapper,
  Icon,
  InfoContainer,
  InfoHeader,
  InfoRow,
} from "./StatsViewerStyles"

type TIcon = { url: string, height: number, width: number }
type TStatsItem = { header: string, value: string }
interface StatsViewerProps { 
  icon: TIcon
  header: string
  items: TStatsItem[]
}

export default function StatsViewer (props: StatsViewerProps) {
  const { icon, header, items } = props
  const statItems = items.map(item => <StatsItem item={item} key={item.header} />)

  return (
    <ViewerWrapper>
      <Icon src={icon.url} style={{ height: icon.height, width: icon.width }} />
      <InfoContainer>
        <InfoHeader>{header}</InfoHeader>
        <InfoRow>{statItems}</InfoRow>
      </InfoContainer>
    </ViewerWrapper>
  )
}