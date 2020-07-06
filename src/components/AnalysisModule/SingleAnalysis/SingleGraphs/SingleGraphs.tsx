import React from "react"
import LineGraphDistanceTime from "./Graphs/LineGraphDistanceTime"
import LineGraphAccummulatedDistanceTime from "./Graphs/LineGraphAccummulatedDistanceTime"
import LineGraphVelocityTime from "./Graphs/LineGraphVelocityTime"
import LineGraphAccelerationTime from "./Graphs/LineGraphAccelerationTime"
import PieGraphMovement from "./Graphs/PieGraphMovement"
import TripFull from "../../../../models/TripFull.model"
import {
  SingleGraphsContainer,
  GraphWrapper,
  GraphHeader,
  GraphContainer,
} from "./SingleGraphsStyles"
import { 
  generateBarMovement, 
  generategraphDistanceTimeData, 
  generateGraphVelocityTimeData, 
  generateGraphAccelerationTimeData 
} from "../Adapters"

interface SingleGraphsProps {
  trip: TripFull
}

export default function SingleGraphs (props: SingleGraphsProps) {
  const { trip } = props
  const barMovementData = generateBarMovement(trip)
  const graphDistanceTimeData = generategraphDistanceTimeData(trip)
  const graphVelocityTimeData = generateGraphVelocityTimeData(trip)
  const graphAccelerationTimeData = generateGraphAccelerationTimeData(trip)
  
  return (
    <SingleGraphsContainer>    
      <GraphWrapper>
        <GraphHeader>Distance-Time Analysis</GraphHeader>
        <GraphContainer>
          <LineGraphAccummulatedDistanceTime data={graphDistanceTimeData} />
        </GraphContainer>
        </GraphWrapper>
      <GraphWrapper>
        <GraphHeader>Distance-Time Analysis</GraphHeader>
        <GraphContainer>
          <LineGraphDistanceTime data={graphDistanceTimeData} />
        </GraphContainer>
        </GraphWrapper>        
      <GraphWrapper>
        <GraphHeader>Velocity-Time Analysis</GraphHeader>
        <GraphContainer>
        <LineGraphVelocityTime data={graphVelocityTimeData} />
        </GraphContainer>
        </GraphWrapper>        
      <GraphWrapper>
        <GraphHeader>Acceleration-Time Analysis</GraphHeader>
        <GraphContainer>
          <LineGraphAccelerationTime data={graphAccelerationTimeData} />
        </GraphContainer>
      </GraphWrapper> 
      <GraphWrapper>
        <GraphHeader>Movement Analysis</GraphHeader>
        <GraphContainer>
          <PieGraphMovement data={barMovementData} />
        </GraphContainer>
        </GraphWrapper>
    </SingleGraphsContainer>
  )
}