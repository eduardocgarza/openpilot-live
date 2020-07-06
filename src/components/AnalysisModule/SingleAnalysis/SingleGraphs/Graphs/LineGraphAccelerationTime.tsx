import React from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { AccelerationTimeAdapter } from "../../Adapters"
import { COLOR_MAIN_BLUE } from "../../../../../constants/Colors"

interface LineGraphAccelerationTimeProps {
  data: AccelerationTimeAdapter
}

export default function LineGraphAccelerationTime(props: LineGraphAccelerationTimeProps) {
  const { data } = props
  return (
    <ResponsiveContainer height="100%" width="100%">
      <LineChart 
        data={data}
        height={200}
        width={400}
      >
       <XAxis dataKey="time"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dot={false} dataKey="acceleration" stroke={COLOR_MAIN_BLUE}/>
      </LineChart>
    </ResponsiveContainer>
  )
}