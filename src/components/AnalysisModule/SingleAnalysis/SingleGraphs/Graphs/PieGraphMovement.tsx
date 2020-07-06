import React from "react"
import moment from "moment"
import { PieChart, Pie, Tooltip } from "recharts"
import { PieMovementAdapter } from "../../Adapters"
import { COLOR_MAIN_BLUE } from "../../../../../constants/Colors"

interface PieGraphMovementProps {
  data: PieMovementAdapter
}

export default function PieGraphMovement(props: PieGraphMovementProps) {
  return (
    <PieChart height={200} width={400}>
      <Pie 
        dataKey="value" 
        nameKey="name"
        data={props.data} 
        innerRadius={40} 
        outerRadius={80} 
        fill={COLOR_MAIN_BLUE}
      />
      <Tooltip formatter={(value,name) => [moment.utc(Number(value) * 1000).format("HH:mm:ss"), name]}/>
    </PieChart>
  )
}