import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { DistanceTimeAdapter } from "../../Adapters"
import { COLOR_MAIN_BLUE } from "../../../../../constants/Colors"

interface LineGraphDistanceTimeProps {
  data: DistanceTimeAdapter
}

export default function LineGraphAccummulatedDistanceTime(props: LineGraphDistanceTimeProps) {
  return (
    <ResponsiveContainer>
      <LineChart 
        data={props.data}
        height={200}
        width={400}
      >
        <XAxis dataKey="time"/>
        <YAxis />
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Line type="monotone" dot={false} dataKey="accummulatedDistance" stroke={COLOR_MAIN_BLUE} />
      </LineChart>
    </ResponsiveContainer>
  )
}